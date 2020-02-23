import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";

function Login(props) {
  return (
    <View style={styles.container}>
      <View style={styles.assassinStackStackStack}>
        <View style={styles.assassinStackStack}>
          <View style={styles.assassinStack}>
            <Text style={styles.assassin}>Assassin</Text>
            <Image
              source={require("./Throwing_Star.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
          </View>
          <Text style={styles.username}>Username</Text>
        </View>
        <View style={styles.rectStack}>
          <View style={styles.rect}>
            <View style={styles.rect3}></View>
          </View>
          <TextInput
            placeholder="Username"
            style={styles.username2}
          ></TextInput>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Assassin")}
        style={styles.button}
      >
        <Text style={styles.submit}>Submit</Text>
      </TouchableOpacity>
      <Text style={styles.password}>Password</Text>
      <View style={styles.rect4}>
        <TextInput placeholder="Password" style={styles.password2}></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  assassin: {
    top: 0,
    left: 0,
    color: "rgba(0,232,44,1)",
    position: "absolute",
    fontSize: 50,
    fontFamily: "courier-regular"
  },
  image: {
    top: 39,
    left: 76,
    width: 88,
    height: 128,
    position: "absolute"
  },
  assassinStack: {
    top: 0,
    left: 0,
    width: 240,
    height: 167,
    position: "absolute"
  },
  username: {
    top: 152,
    left: 45,
    color: "rgba(0,232,44,1)",
    position: "absolute",
    fontSize: 30,
    fontFamily: "courier-regular"
  },
  assassinStackStack: {
    top: 0,
    left: 0,
    width: 240,
    height: 182,
    position: "absolute"
  },
  rect: {
    top: 9,
    left: 0,
    width: 170,
    height: 29,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    borderRadius: 50
  },
  rect3: {
    width: 0,
    height: 0,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 29,
    marginLeft: 110
  },
  username2: {
    top: 0,
    left: 6,
    width: 159,
    height: 48,
    color: "#121212",
    position: "absolute",
    fontFamily: "roboto-regular"
  },
  rectStack: {
    top: 175,
    left: 31,
    width: 170,
    height: 48,
    position: "absolute"
  },
  assassinStackStackStack: {
    width: 240,
    height: 223,
    marginTop: 97,
    marginLeft: 71
  },
  button: {
    width: 95,
    height: 29,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: 87,
    marginLeft: 140
  },
  submit: {
    color: "rgba(0,232,44,1)",
    fontSize: 20,
    fontFamily: "courier-regular",
    marginTop: 5,
    marginLeft: 12
  },
  password: {
    color: "rgba(0,232,44,1)",
    fontSize: 30,
    fontFamily: "courier-regular",
    marginTop: -104,
    marginLeft: 115
  },
  rect4: {
    width: 170,
    height: 29,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 50,
    marginTop: 2,
    marginLeft: 102
  },
  password2: {
    width: 159,
    height: 25,
    color: "#121212",
    fontFamily: "advent-pro-regular",
    marginTop: 2,
    marginLeft: 6
  }
});

export default Login;
