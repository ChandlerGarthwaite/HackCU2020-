import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  Text,
  TouchableOpacity
} from "react-native";

function Create(props) {
  return (
    <View style={styles.container}>
      <View style={styles.scrollArea}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <TextInput
            placeholder="MM/DD/YYYY"
            style={styles.mmDdYyyy}
          ></TextInput>
        </ScrollView>
      </View>
      <Text style={styles.gameSettings}>Game Settings</Text>
      <View style={styles.scrollArea1}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.scrollArea1_contentContainerStyle}
        >
          <View style={styles.mmDdYyyy1Stack}>
            <TextInput
              placeholder="EX: 50"
              style={styles.mmDdYyyy1}
            ></TextInput>
            <View style={styles.scrollArea2}>
              <ScrollView
                horizontal={false}
                contentContainerStyle={styles.scrollArea2_contentContainerStyle}
              >
                <TextInput
                  placeholder="EX: 50"
                  style={styles.mmDdYyyy2}
                ></TextInput>
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </View>
      <Text style={styles.startDate}>Start Date</Text>
      <Text style={styles.pointsPerKill}>Points Per Kill</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Assassin")}
        style={styles.button1}
      >
        <Text style={styles.submit1}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  scrollArea: {
    width: 240,
    height: 29,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 50,
    marginTop: 265,
    marginLeft: 68
  },
  scrollArea_contentContainerStyle: {
    width: 92,
    height: 29,
    flexDirection: "column"
  },
  mmDdYyyy: {
    width: 227,
    height: 29,
    color: "#121212",
    fontFamily: "roboto-regular",
    marginLeft: 12
  },
  gameSettings: {
    width: 240,
    height: 50,
    color: "rgba(0,232,44,1)",
    fontSize: 50,
    fontFamily: "courier-regular",
    textAlign: "center",
    marginTop: -222,
    marginLeft: 74
  },
  scrollArea1: {
    width: 240,
    height: 29,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 50,
    marginTop: 273,
    marginLeft: 67
  },
  scrollArea1_contentContainerStyle: {
    width: 92,
    height: 29,
    flexDirection: "column"
  },
  mmDdYyyy1: {
    top: 0,
    left: 7,
    width: 227,
    height: 29,
    color: "#121212",
    position: "absolute",
    fontFamily: "roboto-regular"
  },
  scrollArea2: {
    top: 0,
    left: 0,
    width: 240,
    height: 29,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    borderRadius: 50
  },
  scrollArea2_contentContainerStyle: {
    width: 92,
    height: 29
  },
  mmDdYyyy2: {
    width: 227,
    height: 29,
    color: "#121212",
    fontFamily: "roboto-regular",
    marginLeft: 7
  },
  mmDdYyyy1Stack: {
    width: 240,
    height: 29
  },
  startDate: {
    width: 187,
    height: 30,
    color: "rgba(0,232,44,1)",
    fontSize: 30,
    fontFamily: "courier-regular",
    marginTop: -200,
    marginLeft: 101
  },
  pointsPerKill: {
    width: 187,
    height: 30,
    color: "rgba(0,232,44,1)",
    fontSize: 30,
    fontFamily: "courier-regular",
    textAlign: "center",
    marginTop: 75,
    marginLeft: 101
  },
  button1: {
    width: 95,
    height: 29,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: 79,
    marginLeft: 140
  },
  submit1: {
    width: 72,
    height: 20,
    color: "rgba(0,232,44,1)",
    fontSize: 20,
    fontFamily: "courier-regular",
    marginTop: 5,
    marginLeft: 12
  }
});

export default Create;
