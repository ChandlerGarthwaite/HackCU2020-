import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView, TextInput } from "react-native";

function JoinGame(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.enterGameCode}>Enter Game Code</Text>
      <View style={styles.scrollArea1}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.scrollArea1_contentContainerStyle}
        >
          <TextInput
            placeholder="Enter Game Code"
            clearButtonMode="never"
            style={styles.mmDdYyyy1}
          ></TextInput>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  enterGameCode: {
    width: 274,
    height: 30,
    color: "rgba(0,232,44,1)",
    fontSize: 30,
    fontFamily: "courier-regular",
    marginTop: 224,
    marginLeft: 50
  },
  scrollArea1: {
    width: 240,
    height: 29,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 50,
    marginTop: 35,
    marginLeft: 67
  },
  scrollArea1_contentContainerStyle: {
    width: 92,
    height: 29,
    flexDirection: "column"
  },
  mmDdYyyy1: {
    width: 227,
    height: 29,
    color: "#121212",
    fontFamily: "roboto-regular",
    marginLeft: 7
  }
});

export default JoinGame;
