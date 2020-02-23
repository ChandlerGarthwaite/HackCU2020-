import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function Target(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.targetName}>Target Name</Text>
      <View style={styles.rect}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  targetName: {
    width: 217,
    height: 30,
    color: "rgba(0,232,44,1)",
    fontSize: 30,
    fontFamily: "courier-regular",
    marginTop: 159,
    alignSelf: "center"
  },
  rect: {
    width: 345,
    height: 418,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 8,
    alignSelf: "center"
  }
});

export default Target;
