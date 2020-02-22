import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


import TestMenu from './src/components/assassin';
import Login from './src/components/login'

export default class App extends Component {
	render() {
		return (
      <>

      <Login />

      </>
    );

	}
}



/*
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! good app</Text>
    </View>
  );
}
*/


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
