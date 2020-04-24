import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LanguageScreen from "../screens/LanguageScreen";
import MyListScreen from "../screens/MyListScreen";

const Tab = createStackNavigator();

export default function ListStack() {
  return (
    <Tab.Navigator initialRouteName="MyListScreen" headerMode="none">
      <Tab.Screen name="MyListScreen" component={MyListScreen} />
      <Tab.Screen name="languageScreen" component={LanguageScreen} />
    </Tab.Navigator>
  );
}
