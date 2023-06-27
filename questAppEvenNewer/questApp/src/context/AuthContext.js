import createDataContext from './createDataContext';
import api from '../api/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from '../navigationRef'

const authReducer = (state, action) => {
    switch (action.type) {
      case 'addError':
        return {...state, errorMessage: action.payload};
      case 'signup':
        return {errorMessage: '', token: action.payload};
      case 'signin':
        return {errorMessage: '', token: action.payload};
      case "clearErrorMessage":
        return {...state, errorMessage: ''}
      case 'signout':
        return { token: null, errorMessage: ''}
      default:
        return state;
    }
};

const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  if(token){
    dispatch({ type: 'signin', payload: token})
    navigate('Quest');
  }
  else {
    navigate('Signup')
  }
}
 
const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clearErrorMessage' })
}

const signup = dispatch => async ({ email, password }) => {
    try {
      const response = await api.post('/signup', { email, password });
      console.log(response.data.token)  
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'signup', payload: response.data.token});
      navigate('Quest')
    } 
    catch (err) {
      console.log(err)
      dispatch({ type: 'addError', payload: 'Something went wrong with signing up'})
    }
  };


const signin = dispatch =>  async ({ email, password }) => {
    try {
      const response = await api.post('/signin', { email, password })
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'signin', payload: response.data.token})
      navigate('Quest');
    }
    catch(error){
      console.log(error)
      dispatch({ type: 'addError', payload:'Something went wrong with signing in'})
    }
  };

const signout = dispatch => async() => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'signout'});
    navigate('loginFlow');
  };

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: '' }
);


