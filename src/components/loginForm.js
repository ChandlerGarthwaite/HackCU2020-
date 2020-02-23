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
    backgroundColor: "rgba(0,0,0,1)"
  },
  assassin: {
    color: "rgba(0,232,44,1)",
    fontSize: 40,
    fontFamily: "roboto-regular",
    marginTop: 171,
    alignSelf: "center"
  },
  rect: {
    width: 170,
    height: 29,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 254,
    alignSelf: "center"
  },
  rect1: {
    width: 170,
    height: 29,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 48,
    alignSelf: "center"
  },
  rect2: {
    top: 0,
    left: 0,
    width: 95,
    height: 29,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute"
  },
  submit: {
    top: 0,
    left: 0,
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 30,
    fontFamily: "roboto-regular"
  },
  rect2Stack: {
    width: 95,
    height: 30,
    marginTop: 30,
    marginLeft: 178
  },
  username: {
    color: "rgba(0,232,44,1)",
    fontSize: 30,
    fontFamily: "roboto-regular",
    marginTop: -205,
    alignSelf: "center"
  },
  password: {
    color: "rgba(0,232,44,1)",
    fontSize: 30,
    fontFamily: "roboto-regular",
    marginTop: 49,
    alignSelf: "center"
  }
});
