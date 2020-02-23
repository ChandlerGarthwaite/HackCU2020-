import React, { Component } from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert, Button, StyleSheet, StatusBar} from 'react-native';


export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
    render() {
      return (
        <View style={styles.container}>
        <Text style={styles.assassin}>Assassin</Text>
        <View style={styles.rect}></View>
        <View style={styles.rect1}></View>
        <View style={styles.rect2Stack}>
          <View style={styles.rect2}></View>
          <Text style={styles.submit}>Submit</Text>
        </View>
        <Text style={styles.username}>Username</Text>
        <Text style={styles.password}>Password</Text>
      </View>
      );
    }
  }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }
});
