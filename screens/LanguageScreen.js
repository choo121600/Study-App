import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

class LanguageScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> English to Korean </Text>
        <View>
          <TextInput style={styles.input} placeholder={"word"} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {},
});

export default LanguageScreen;
