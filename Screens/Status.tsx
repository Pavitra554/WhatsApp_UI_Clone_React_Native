import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import {
  APP_BACKGROUND,
  HEADER_BACKGROUND,
  HEADER_TEXT_ACTIVE,
} from "../Constants";

//Icons
import { MaterialCommunityIcons } from "@expo/vector-icons";
import StatusComp from "../Components/StatusComp";
import { Fontisto } from "@expo/vector-icons";

const Status = () => {
  return (
    <>
      <ScrollView style={styles.callMain}>
        <StatusComp />
      </ScrollView>
      <View style={styles.newEdit}>
        <MaterialCommunityIcons name='pencil' size={24} color='#fff' />
      </View>
      <View style={styles.newStatus}>
        <Fontisto name='camera' size={19} color='#FFF' />
      </View>
    </>
  );
};

export default Status;

const styles = StyleSheet.create({
  callMain: {
    // flex:1,
    backgroundColor: APP_BACKGROUND,
  },
  newStatus: {
    height: 55,
    width: 55,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: HEADER_TEXT_ACTIVE,
    position: "absolute",
    bottom: "3%",
    right: "4%",
    elevation: 5,
  },
  newEdit: {
    height: 45,
    width: 45,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: HEADER_BACKGROUND,
    position: "absolute",
    bottom: "14%",
    right: "5.5%",
    elevation: 5,
  },
});
