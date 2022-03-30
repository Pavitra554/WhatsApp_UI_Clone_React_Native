import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//Colors
import { APP_BACKGROUND, HEADER_BACKGROUND, HEADER_TEXT } from "../Constants";

//Icons
import { Fontisto } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Header = () => {
  return (
    <SafeAreaView style={styles.HeaderMain}>
      <StatusBar style='inverted' />
      <View style={styles.header}>
        <Text style={styles.appName}>WhatsApp</Text>
        <View style={styles.leftIcons}>
          <Fontisto name='search' size={20} color={HEADER_TEXT} />
          <MaterialCommunityIcons
            name='dots-vertical'
            size={26}
            color={HEADER_TEXT}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  HeaderMain: {
    height: 90,
    backgroundColor: HEADER_BACKGROUND,
  },
  header: {
    marginTop: "4%",
    marginLeft: "5%",
    marginRight: "4%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  appName: {
    color: HEADER_TEXT,
    fontSize: 18,
    fontWeight: "bold",
  },
  leftIcons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 65,
  },
});
