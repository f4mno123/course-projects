import React, { useContext, useFocusEffect, useCallback } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LoginForm from '../components/LoginForm';
import NavLink from '../components/NavLink';
import { Context } from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';

const SigninScreen = ({navigation}) => {
  const { state, signin, clearErrorMessage } = useContext(Context);
  

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage}/>
      <LoginForm headerText="Sign in to your account" errorMessage={state.errorMessage} onSubmit={signin} submitButtonText="Sign in"  />
      <NavLink loginText="Dont have an account? sign up instead" routeName="Signup" />
    </View>
  )
};

SigninScreen.navigationOptions = () => {
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

export default SigninScreen;
