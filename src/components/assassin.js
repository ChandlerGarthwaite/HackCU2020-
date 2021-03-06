import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

function assassin({navigation}) {
  const pressHandlercreate = () => {
    navigation.navigate('create');
  };
  const pressHandlerprof = () => {
    navigation.navigate('profile');
  };

    const pressHandlercon = () => {
      navigation.navigate('continue');
    };

    const pressHandlergame = () => {
      navigation.navigate('joingame');
    };
    
  return (
    <View style={styles.container}>
      <View style={styles.buttonStack}>
        <TouchableOpacity
          onPress={pressHandlercreate}
          style={styles.button}
        ></TouchableOpacity>
        <Text style={styles.create}>Create</Text>
      </View>
      <View style={styles.button2Stack}>
        <TouchableOpacity
          onPress={pressHandlerprof}
          style={styles.button2}
        ></TouchableOpacity>
        <TouchableOpacity
          onPress={pressHandlercon}
          style={styles.button3}
        ></TouchableOpacity>
        <Text style={styles.profile1}>Profile</Text>
      </View>
      <View style={styles.rect3Stack}>
        <View style={styles.rect3}></View>
        <Text style={styles.joinGame}>Join Game</Text>
      </View>
      <View style={styles.button4Stack}>
        <TouchableOpacity
          onPress={pressHandlergame}
          style={styles.button4}
        ></TouchableOpacity>
        <Text style={styles.username3}>Continue</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  button: {
    top: 1,
    left: 0,
    width: 170,
    height: 29,
    backgroundColor: "rgba(0,0,0,1)",
    position: "absolute",
    borderRadius: 50
  },
  create: {
    top: 0,
    left: 30,
    width: 110,
    height: 30,
    color: "rgba(0,232,44,1)",
    position: "absolute",
    fontSize: 30,
    fontFamily: "courier-regular"
  },
  buttonStack: {
    width: 170,
    height: 30,
    marginTop: 263,
    marginLeft: 102
  },
  button2: {
    top: 0,
    left: 0,
    width: 170,
    height: 29,
    backgroundColor: "rgba(0,0,0,1)",
    position: "absolute",
    borderRadius: 50
  },
  button3: {
    top: 0,
    left: 1,
    width: 170,
    height: 29,
    backgroundColor: "rgba(0,0,0,1)",
    position: "absolute",
    borderRadius: 50,
    overflow: "hidden"
  },
  profile1: {
    top: 0,
    left: 22,
    width: 127,
    height: 30,
    color: "rgba(0,232,44,1)",
    position: "absolute",
    fontSize: 30,
    fontFamily: "courier-regular"
  },
  button2Stack: {
    width: 171,
    height: 30,
    marginTop: 8,
    marginLeft: 102
  },
  rect3: {
    top: 0,
    left: 0,
    width: 170,
    height: 29,
    backgroundColor: "rgba(0,0,0,1)",
    position: "absolute",
    borderRadius: 50
  },
  joinGame: {
    top: 0,
    left: 2,
    width: 169,
    height: 30,
    color: "rgba(0,232,44,1)",
    position: "absolute",
    fontSize: 30,
    fontFamily: "courier-regular"
  },
  rect3Stack: {
    width: 171,
    height: 30,
    marginTop: 45,
    marginLeft: 102
  },
  button4: {
    top: 1,
    left: 0,
    width: 170,
    height: 29,
    backgroundColor: "rgba(0,0,0,1)",
    position: "absolute",
    borderRadius: 50,
    overflow: "hidden"
  },
  username3: {
    top: 0,
    left: 13,
    width: 144,
    height: 30,
    color: "rgba(0,232,44,1)",
    position: "absolute",
    fontSize: 30,
    fontFamily: "courier-regular"
  },
  button4Stack: {
    width: 170,
    height: 30,
    marginTop: -64,
    marginLeft: 102
  }
});

export default assassin;
