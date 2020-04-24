import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class ListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.foreignView}>
          <Text style={styles.foreignText}> Hungry </Text>
        </View>
        <View style={styles.nativeView}>
          <Text style={styles.nativeText}> 배가 고프다. </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  foreignView: {
    flex: 1,
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#B8B8B8",
  },
  foreignText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  nativeView: {
    flex: 1,
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  nativeText: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default ListScreen;
