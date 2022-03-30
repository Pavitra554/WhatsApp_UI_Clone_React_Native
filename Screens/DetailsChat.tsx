import React from "react";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Image,
  TextInput,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

//Colors
import {
  APP_BACKGROUND,
  HEADER_BACKGROUND,
  HEADER_TEXT,
  HEADER_TEXT_ACTIVE,
} from "../Constants";

//Icons
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const DetailsChat = ({ route }: any) => {
  const navigation = useNavigation();
  const { data } = route.params;
  return (
    <>
      <SafeAreaView style={styles.HeaderMain}>
        <StatusBar style='inverted' />
        <View style={styles.header}>
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <MaterialIcons name='arrow-back' size={24} color='white' />
          </TouchableWithoutFeedback>
          <Image style={styles.dp} source={data.dp} />
          <Text style={styles.Name}>{data.name}</Text>
        </View>
        <View style={styles.leftIcons}>
          <Ionicons name='md-videocam' size={24} color='#fff' />
          <Ionicons name='call' size={20} color='#fff' />
          <MaterialCommunityIcons name='dots-vertical' size={26} color='#fff' />
        </View>
      </SafeAreaView>
      <View style={styles.chatpart}>
        <View style={styles.chatinput}>
          <MaterialIcons name='emoji-emotions' size={24} color={HEADER_TEXT} />
          <TextInput
            style={styles.input}
            placeholder='Message'
            placeholderTextColor={HEADER_TEXT}
          />
          <Entypo name='attachment' size={20} color={HEADER_TEXT} />
          <View style={styles.payment}>
            <FontAwesome name='rupee' size={14} color={APP_BACKGROUND} />
          </View>
          <Fontisto name='camera' size={20} color={HEADER_TEXT} />
        </View>
        <View style={styles.voice}>
          <MaterialIcons name='keyboard-voice' size={30} color='#fff' />
        </View>
      </View>
    </>
  );
};

export default DetailsChat;

const styles = StyleSheet.create({
  HeaderMain: {
    height: 90,
    backgroundColor: HEADER_BACKGROUND,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 10,
    justifyContent: "space-between",
  },
  header: {
    marginTop: "3%",
    marginRight: "4%",
    marginLeft: "1%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  Name: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  dp: {
    height: 35,
    width: 35,
    backgroundColor: "gray",
    borderRadius: 100,
    marginRight: 8,
  },
  leftIcons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: "3%",
    width: 140,
  },
  chatpart: {
    flex: 1,
    backgroundColor: APP_BACKGROUND,
  },
  chatinput: {
    height: 50,
    width: "80%",
    backgroundColor: HEADER_BACKGROUND,
    marginVertical: 5,
    marginLeft: 6,
    position: "absolute",
    bottom: "0%",
    borderRadius: 50,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  input: {
    color: "#fff",
    fontSize: 18,
    width: 90,
    overflow: "scroll",
  },
  payment: {
    height: 20,
    width: 20,
    borderRadius: 20,
    backgroundColor: HEADER_TEXT,
    justifyContent: "center",
    alignItems: "center",
  },
  voice: {
    height: 55,
    width: 55,
    borderRadius: 100,
    margin: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: HEADER_TEXT_ACTIVE,
    position: "absolute",
    bottom: "0%",
    right: "1%",
    elevation: 5,
  },
});
