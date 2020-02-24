import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

function continuegame(props) {
  return (
    <View style={styles.container}>
      <View style={styles.button1Stack}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Target")}
          style={styles.button1}
        ></TouchableOpacity>
        <Text style={styles.target}>Target</Text>
      </View>
      <View style={styles.button2Stack}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Create")}
          style={styles.button2}
        ></TouchableOpacity>
        <Text style={styles.tracker}>Tracker</Text>
      </View>
      <View style={styles.button3Stack}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Create")}
          style={styles.button3}
        ></TouchableOpacity>
        <Text style={styles.shop}>Shop</Text>
      </View>
      <View style={styles.button4Stack}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Create")}
          style={styles.button4}
        ></TouchableOpacity>
        <Text style={styles.map2}>Map</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  button1: {
    top: 1,
    left: 0,
    width: 170,
    height: 29,
    backgroundColor: "rgba(0,0,0,1)",
    position: "absolute",
    borderRadius: 50
  },
  target: {
    top: 0,
    left: 30,
    width: 110,
    height: 30,
    color: "rgba(0,232,44,1)",
    position: "absolute",
    fontSize: 30,
    fontFamily: "courier-regular"
  },
  button1Stack: {
    width: 170,
    height: 30,
    marginTop: 265,
    marginLeft: 102
  },
  button2: {
    top: 1,
    left: 0,
    width: 170,
    height: 29,
    backgroundColor: "rgba(0,0,0,1)",
    position: "absolute",
    borderRadius: 50
  },
  tracker: {
    top: 0,
    left: 18,
    width: 132,
    height: 30,
    color: "rgba(0,232,44,1)",
    position: "absolute",
    fontSize: 30,
    fontFamily: "courier-regular"
  },
  button2Stack: {
    width: 170,
    height: 30,
    marginTop: 4,
    marginLeft: 103
  },
  button3: {
    top: 1,
    left: 0,
    width: 170,
    height: 29,
    backgroundColor: "rgba(0,0,0,1)",
    position: "absolute",
    borderRadius: 50
  },
  shop: {
    top: 0,
    left: 44,
    width: 83,
    height: 30,
    color: "rgba(0,232,44,1)",
    position: "absolute",
    fontSize: 30,
    fontFamily: "courier-regular"
  },
  button3Stack: {
    width: 170,
    height: 30,
    marginTop: 7,
    marginLeft: 102
  },
  button4: {
    top: 1,
    left: 0,
    width: 170,
    height: 29,
    backgroundColor: "rgba(0,0,0,1)",
    position: "absolute",
    borderRadius: 50
  },
  map2: {
    top: 0,
    left: 56,
    width: 58,
    height: 30,
    color: "rgba(0,232,44,1)",
    position: "absolute",
    fontSize: 30,
    fontFamily: "courier-regular"
  },
  button4Stack: {
    width: 170,
    height: 30,
    marginTop: 10,
    marginLeft: 102
  }
});

export default continuegame;
