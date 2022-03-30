import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { HEADER_TEXT } from "../Constants";
interface props {
  data: any;
  navigation: any;
}

const Chat: React.FC<props> = ({ data }) => {
  return (
    <View style={styles.chatmain}>
      <View style={styles.chatcontent}>
        <Image style={styles.profilepic} source={data.dp} />
        <View style={styles.info}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.messages}>{data.message}</Text>
        </View>
      </View>
      <View style={styles.timestapm}>
        <Text style={styles.time}>{data.time}</Text>
      </View>
    </View>
  );
};

export default Chat;

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
    backgroundColor: "gray",
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
  },
  timestapm: {
    alignSelf: "flex-start",
  },
  time: {
    color: HEADER_TEXT,
    fontSize: 12,
    paddingTop: 5,
  },
});
