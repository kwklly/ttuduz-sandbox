import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CharacterInfo } from "./src/screens/characterInfo";
import { TodoCharacter } from "./src/screens/todoCharacter";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export function TabNav() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="character" component={CharacterInfo} />
        <Tab.Screen name="todo" component={TodoCharacter} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
