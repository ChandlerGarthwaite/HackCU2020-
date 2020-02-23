import React, { Component } from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

import LoginForm from './LoginForm'

export default class Login extends Component{
  render() {
    return (
        
                   <LoginForm />
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
  },
  loginContainer:{
      alignItems: 'center',
      flexGrow: 1,
      justifyContent: 'center',
      width: 375,
      height: 812
  },
  logo: {
      position: 'absolute',
      width: 500,
      height: 200
  },
});
