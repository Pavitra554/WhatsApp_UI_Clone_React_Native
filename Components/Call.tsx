import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

//colors
import { HEADER_TEXT, HEADER_TEXT_ACTIVE } from "../Constants";

//Icons
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

//user Image

const Call = () => {
  return (
    <>
      <View style={styles.chatmain}>
        <View style={styles.chatcontent}>
          <Image
            style={styles.profilepic}
            source={require("../assets/DP/Kunal.jpg")}
          />
          <View style={styles.info}>
            <Text style={styles.name}>Kunal</Text>
            <Text style={styles.messages}>
              <MaterialCommunityIcons
                name='arrow-top-right'
                size={15}
                color={HEADER_TEXT_ACTIVE}
              />
              <Text> Today 6:30 PM</Text>
            </Text>
          </View>
        </View>
        <View style={styles.callMode}>
          <Ionicons name='call' size={20} color={HEADER_TEXT_ACTIVE} />
        </View>
      </View>
      <View style={styles.chatmain}>
        <View style={styles.chatcontent}>
          <Image
            style={styles.profilepic}
            source={require("../assets/DP/Ankit.jpg")}
          />
          <View style={styles.info}>
            <Text style={styles.name}>Ankit</Text>
            <Text style={styles.messages}>
              <MaterialCommunityIcons
                name='arrow-bottom-left'
                size={15}
                color='#de5246'
              />
              <Text> Yesterday 4:30 PM</Text>
            </Text>
          </View>
        </View>
        <View style={styles.callMode}>
          <Ionicons name='md-videocam' size={20} color={HEADER_TEXT_ACTIVE} />
        </View>
      </View>
    </>
  );
};

export default Call;

const styles = StyleSheet.create({
  chatmain: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 22,
    paddingHorizontal: 18,
    alignItems: "center",
    justifyContent: "space-between",
  },
  chatcontent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  profilepic: {
    height: 50,
    width: 50,
    // backgroundColor: "gray",s
    borderRadius: 100,
    marginRight: 17,
  },
  info: {},
  name: {
    color: "#fff",
    // fontWeight:'bold',
    fontSize: 18,
  },
  messages: {
    color: HEADER_TEXT,
    fontSize: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  callMode: {
    alignSelf: "center",
  },
  time: {
    color: HEADER_TEXT,
    fontSize: 12,
    paddingTop: 5,
  },
});
