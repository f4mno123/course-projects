import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import LoginForm from '../components/LoginForm';
import NavLink from '../components/NavLink';
import { NavigationEvents } from 'react-navigation';

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage, tryLocalSignin } = useContext(AuthContext);

  useEffect( () => {
    tryLocalSignin();
  }, [])

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage}/>
      <LoginForm headerText="Sign up for tracker" errorMessage={state.errorMessage} onSubmit={({email, password}) => signup({email, password})} submitButtonText="Sign up"/>
      <NavLink routeName='Signin' loginText="Already have an account? Sign in instead"/>
    </View>
  );
};


SignupScreen.navigationOptions = () => {
  return {
    header: () => false,
    headerLeft: () => false
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
  errorMessage: {
    fontSize: 16,
    color:'red',
    marginLeft: 15,
    marginTop: 15
  },
});

export default SignupScreen;
