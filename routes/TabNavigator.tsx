import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

//colors
import {
  HEADER_BACKGROUND,
  HEADER_TEXT,
  HEADER_TEXT_ACTIVE,
} from "../Constants";

//Screens
import { Calls, Camera, Chats, Status } from "../Screens";

//Icons
import { Fontisto } from "@expo/vector-icons";
import Header from "../Components/Header";

const Tab = createMaterialTopTabNavigator();

export default function TabNavigator() {
  return (
    <>
      <Header />
      <Tab.Navigator
        initialRouteName='Feed'
        screenOptions={{
          tabBarActiveTintColor: HEADER_TEXT_ACTIVE,
          tabBarInactiveTintColor: HEADER_TEXT,
          tabBarPressColor: "#8097A1",
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: "bold",
          },
          tabBarStyle: {
            backgroundColor: HEADER_BACKGROUND,
            elevation: 5,
          },
          tabBarIndicatorStyle: {
            borderWidth: 1.5,
            borderColor: HEADER_TEXT_ACTIVE,
          },
        }}
      >
        <Tab.Screen
          name='Camera'
          component={Camera}
          options={{
            tabBarLabel: "Camera",
            tabBarShowLabel: false,
            tabBarShowIcon: true,
            tabBarIcon: () => {
              return <Fontisto name='camera' size={20} color={HEADER_TEXT} />;
            },
            tabBarIconStyle: {
              marginBottom: -8,
            },
          }}
        />
        <Tab.Screen
          name='Chats'
          component={Chats}
          options={{
            tabBarLabel: "Chats",
          }}
        />
        <Tab.Screen
          name='Status'
          component={Status}
          options={{ tabBarLabel: "Status" }}
        />
        <Tab.Screen
          name='Calls'
          component={Calls}
          options={{ tabBarLabel: "Calls" }}
        />
      </Tab.Navigator>
    </>
  );
}
