import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

//colors
import { HEADER_TEXT, HEADER_TEXT_ACTIVE } from "../Constants";

//Icons
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

//user Image

const StatusComp = () => {
  return (
    <>
      <View style={styles.chatmain}>
        <View style={styles.chatcontent}>
          <View style={styles.MYprofilepicBORDER}>
            <Image
              style={styles.MYprofilepic}
              source={require("../assets/DP/me.jpg")}
            />
          </View>
          <View style={styles.info}>
            <Text style={styles.name}>My Status</Text>
            <Text style={styles.messages}>
              <Text> Today 6:30 PM</Text>
            </Text>
          </View>
        </View>
        <View>
          <MaterialCommunityIcons
            name='dots-horizontal'
            size={28}
            color={HEADER_TEXT}
          />
        </View>
      </View>
      <Text style={styles.viewedtext}>Recent updates</Text>
      <View style={styles.chatmain}>
        <View style={styles.chatcontent}>
          <View
            style={[
              styles.MYprofilepicBORDER,
              { borderColor: HEADER_TEXT_ACTIVE },
            ]}
          >
            <Image
              style={styles.MYprofilepic}
              source={require("../assets/DP/Kunal.jpg")}
            />
          </View>
          <View style={styles.info}>
            <Text style={styles.name}>Kunal</Text>
            <Text style={styles.messages}>
              <Text>Just now</Text>
            </Text>
          </View>
        </View>
      </View>
      <Text style={styles.viewedtext}>Viewed updates</Text>
      <View style={styles.chatmain}>
        <View style={styles.chatcontent}>
          <View style={styles.MYprofilepicBORDER}>
            <Image
              style={styles.MYprofilepic}
              source={require("../assets/DP/Ankit.jpg")}
            />
          </View>
          <View style={styles.info}>
            <Text style={styles.name}>Ankit</Text>
            <Text style={styles.messages}>
              <Text> Yesterday 6:30 PM</Text>
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.chatmain}>
        <View style={styles.chatcontent}>
          <View style={styles.MYprofilepicBORDER}>
            <Image
              style={styles.MYprofilepic}
              source={require("../assets/DP/Dezzy.jpg")}
            />
          </View>
          <View style={styles.info}>
            <Text style={styles.name}>Dezzy</Text>
            <Text style={styles.messages}>
              <Text> Yesterday 8:30 PM</Text>
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default StatusComp;

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
  MYprofilepicBORDER: {
    height: 50,
    width: 50,
    borderRadius: 100,
    marginRight: 17,
    borderWidth: 2,
    borderColor: HEADER_TEXT,
    padding: 2,
  },
  MYprofilepic: {
    height: 42,
    width: 42,
    borderRadius: 100,
    marginRight: 17,
  },
  profilepic: {
    height: 50,
    width: 50,
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
  time: {
    color: HEADER_TEXT,
    fontSize: 12,
    paddingTop: 5,
  },
  viewedtext: {
    color: HEADER_TEXT,
    fontSize: 13,
    paddingTop: 22,
    paddingHorizontal: 18,
    fontWeight: "bold",
  },
});
