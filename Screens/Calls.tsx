import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { APP_BACKGROUND, HEADER_TEXT_ACTIVE } from "../Constants";

//Icons
import { MaterialIcons } from "@expo/vector-icons";
import Call from "../Components/Call";

const Calls = () => {
  return (
    <>
      <ScrollView style={styles.callMain}>
        <Call />
        <Call />
      </ScrollView>
      <View style={styles.newCall}>
        <MaterialIcons name='add-call' size={30} color='#fff' />
      </View>
    </>
  );
};

export default Calls;

const styles = StyleSheet.create({
  callMain: {
    // flex:1,
    backgroundColor: APP_BACKGROUND,
  },
  newCall: {
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
});
