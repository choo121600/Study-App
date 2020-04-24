import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { EvilIcons } from "react-native-vector-icons";

import ListScreen from "../screens/ListScreen";
import MyListScreen from "../screens/MyListScreen";

const Tab = createBottomTabNavigator();

export default function HomeStack() {
  return (
    <Tab.Navigator
      initialRouteName="List"
      tabBarOptions={{
        activeTintColor: "#e91e63",
      }}
    >
      <Tab.Screen
        name="List"
        component={ListScreen}
        options={{
          tabBarLabel: "List",
          tabBarIcon: ({ color, size }) => (
            <EvilIcons name="navicon" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Test"
        component={ListScreen}
        options={{
          tabBarLabel: "Test",
          tabBarIcon: ({ color, size }) => (
            <EvilIcons name="pencil" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MyList"
        component={MyListScreen}
        options={{
          tabBarLabel: "MyList",
          tabBarIcon: ({ color, size }) => (
            <EvilIcons name="plus" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
