import React, { Component } from 'react';
import { StyleSheet, Text} from 'react-native';


//import TestMenu from './src/components/assassin';
import Login from './src/components/Login';

export default class App extends Component {
	render() {
		return (
      <Login />
    );
	}
}
//AppRegistry.registerComponent('Assassin', () => App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
