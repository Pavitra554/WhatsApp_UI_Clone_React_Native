import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import { DetailsChat } from "../Screens";

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='TabNavigator'
        options={{ headerShown: false }}
        component={TabNavigator}
      />
      <Stack.Screen
        name='DetailsChat'
        options={{ headerShown: false }}
        component={DetailsChat}
      />
    </Stack.Navigator>
  );
}

export default RootNavigation;
