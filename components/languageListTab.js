import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  TextInput,
  TouchableOpacity,
} from "react-native";

import PropTypes from "prop-types";

import EvilIcons from "react-native-vector-icons/EvilIcons";

const { width, height } = Dimensions.get("window");
class languageListTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subjectValue: props.subject,
      isEditing: false,
    };
  }

  componentDidMount = () => {};

  static propTypes = {
    subject: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    deleteLanguage: PropTypes.func.isRequired,
    updateLanguage: PropTypes.func.isRequired,
  };

  render() {
    const { isEditing, subjectValue } = this.state;
    const { subject, id, deleteLanguage } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.column}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("languageScreen");
            }}
          >
            {isEditing ? (
              <TextInput
                style={[styles.input, styles.text]}
                value={subjectValue}
                multiline={true}
                onChangeText={this._controllInput}
                returnKeyType={"done"}
                onBlur={this._finishEditing}
                underlineColorAndroid={"transparent"}
              />
            ) : (
              <Text style={styles.text}>{subject}</Text>
            )}
          </TouchableOpacity>
        </View>
        {isEditing ? (
          <View style={styles.action}>
            <TouchableOpacity onPressOut={this._finishEditing}>
              <View>
                <EvilIcons name="check" size={30} />
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.action}>
            <TouchableOpacity onPressOut={this._startEditing}>
              <View>
                <EvilIcons name="pencil" size={30} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPressOut={(event) => {
                event.stopPropagation();
                deleteLanguage(id);
              }}
            >
              <View>
                <EvilIcons name="trash" size={30} />
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }

  _startEditing = (event) => {
    event.stopPropagation();
    this.setState({
      isEditing: true,
    });
  };

  _finishEditing = (event) => {
    event.stopPropagation();
    const { subjectValue } = this.state;
    const { id, updateLanguage } = this.props;
    updateLanguage(id, subjectValue);
    this.setState({
      isEditing: false,
    });
  };

  _controllInput = (text) => {
    this.setState({ subjectValue: text });
  };
}

const styles = StyleSheet.create({
  container: {
    width: width - 60,
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  column: {
    flexDirection: "row",
    alignItems: "center",
    width: width / 2,
    justifyContent: "flex-start",
  },
  text: {
    fontWeight: "500",
    fontSize: 20,
    marginVertical: 20,
  },
  action: {
    flexDirection: "row",
  },
  input: {
    marginVertical: 15,
    width: width / 2,
  },
});

export default languageListTab;
