import * as React from 'react';
import { Text, Navigation, TouchableOpacity, TextInput, View, Button, StyleSheet } from 'react-native';

function LoginForm(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.assassin}>Assassin</Text>
      <View style={styles.rect}></View>
      <View style={styles.rect1}></View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Assassin')}
        style={styles.button}
      >
        <Text style={styles.submit}>Submit</Text>
      </TouchableOpacity>
      <Text style={styles.username}>Username</Text>
      <Text style={styles.password}>Password</Text>
      <View style={styles.rect3}></View>
    </View>
  );
  }
  function Assassin(props) {
    return <View style={styles.container}></View>;
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
  button: {
    width: 95,
    height: 29,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: 37,
    marginLeft: 140
  },
  submit: {
    color: "rgba(0,232,44,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 4,
    marginLeft: 16
  },
  username: {
    color: "rgba(0,232,44,1)",
    fontSize: 30,
    fontFamily: "roboto-regular",
    marginTop: -211,
    alignSelf: "center"
  },
  password: {
    color: "rgba(0,232,44,1)",
    fontSize: 30,
    fontFamily: "roboto-regular",
    marginTop: 49,
    alignSelf: "center"
  },
  rect3: {
    width: 0,
    height: 0,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: -225,
    marginLeft: 212
  }
});

export default LoginForm;
