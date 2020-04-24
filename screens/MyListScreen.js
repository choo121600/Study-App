import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Dimensions,
} from "react-native";
import axios from "axios";

import LanguageListTab from "../components/languageListTab";
import { AppLoading } from "expo";

const baseUrl = "http://192.168.0.15:3000";
const { height, width } = Dimensions.get("window");

class MyListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newSubject: "",
      loadedLanguages: false,
      languages: [],
    };
  }

  componentDidMount = () => {
    this._loadLanguages();
  };

  render() {
    const { loadedLanguages, newSubject, languages } = this.state;
    if (!loadedLanguages) {
      return <AppLoading />;
    }
    return (
      <View style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}> My Language List </Text>
        </View>
        <View style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder={"Add Language"}
            value={newSubject}
            onChangeText={this._controllNewLanguage}
            returnKeyType={"done"}
            autoCorrect={false}
            onSubmitEditing={this._addLanguage}
          />
          <ScrollView contentContainerStyle={styles.tabs}>
            {Object.values(languages)
              .reverse()
              .map((language) => (
                <LanguageListTab
                  key={language.id}
                  {...language}
                  deleteLanguage={this._deleteLanguage}
                  updateLanguage={this._updateLanguage}
                />
              ))}
          </ScrollView>
        </View>
      </View>
    );
  }

  //Load Languages
  _loadLanguages = async () => {
    try {
      const url = baseUrl + "/study/languageList";
      axios
        .get(url)
        .then((res) => {
          if (res.data.success) {
            const data = res.data.data;
            this.setState({ languages: data, loadedLanguages: true });
            console.log("data", data);
          } else {
            alert("error in web service");
          }
        })
        .catch((error) => {
          alert("error serverrrr" + error);
        });
    } catch (err) {
      console.log(err);
    }
  };

  //Controll New Language Text Input
  _controllNewLanguage = (text) => {
    this.setState({
      newSubject: text,
    });
  };

  //Add New Language
  _addLanguage = () => {
    const { newSubject } = this.state;
    if (newSubject !== "") {
      const url = baseUrl + "/study/createLanguage";
      const datapost = {
        subject: this.state.newSubject,
      };
      axios
        .post(url, datapost)
        .then((response) => {
          if (response.data.success === true) {
            alert(response.data.message);
          } else {
            alert(response.data.message);
          }
        })
        .catch((error) => {
          alert("Error AddLanguage" + error);
        });
    }
    this.setState({ newSubject: "" });
    this._loadLanguages();
  };

  //Delete Language
  _deleteLanguage = (id) => {
    const url = baseUrl + "/study/deleteLanguage";
    axios
      .post(url, { id: id })
      .then((response) => {
        if (response.data.success === true) {
          alert(response.data.message);
        } else {
          alert(response.data.message);
        }
      })
      .catch((error) => {
        alert("Error Deleteeee" + error);
      });
    this._loadLanguages();
  };

  //Update Language
  _updateLanguage = (id, subject) => {
    const url = baseUrl + "/study/updateLanguage/" + id;
    const datapost = {
      subject: subject,
    };
    axios
      .post(url, datapost)
      .then((response) => {
        if (response.data.success === true) {
          alert(response.data.message);
        } else {
          alert(response.data.message);
        }
      })
      .catch((error) => {
        alert("Error Updateee" + error);
      });
    this._loadLanguages();
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  titleView: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  titleText: {
    fontSize: 20,
  },
  languageList: {
    flex: 1,
  },
  card: {
    backgroundColor: "#9DA3B4",
    flex: 1,
    width: width - 20,
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: "rgb(50, 50, 50)",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: -1,
          width: 0,
        },
      },
      android: {
        elevation: 3,
      },
    }),
  },
  input: {
    padding: 20,
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,
    fontSize: 16,
  },
  tabs: {
    alignItems: "center",
  },
});

export default MyListScreen;
