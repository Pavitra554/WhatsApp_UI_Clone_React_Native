import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import Chat from "../Components/Chat";
import { APP_BACKGROUND, HEADER_TEXT_ACTIVE } from "../Constants";

//Icons
import { MaterialCommunityIcons } from "@expo/vector-icons";

//Screen Height and width
const { height } = Dimensions.get("window");

const userData = [
  {
    id: 1,
    name: "Kunal",
    time: "1:30 PM",
    message: "Noice",
    dp: require("../assets/DP/Kunal.jpg"),
  },
  {
    id: 2,
    name: "Ankit",
    time: "2:30 PM",
    message: "wow..",
    dp: require("../assets/DP/Ankit.jpg"),
  },
  {
    id: 3,
    name: "Dezzy",
    time: "6:00 AM",
    message: "Good Morning Sir..",
    dp: require("../assets/DP/Dezzy.jpg"),
  },
];

const Chats = () => {
  const navigation = useNavigation();
  // const test: any = ;
  return (
    <>
      <ScrollView style={styles.chatMain}>
        {userData.map((e, i) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(
                  "DetailsChat" as never,
                  { data: e } as never
                )
              }
              key={e.id}
            >
              <Chat data={e} navigation={navigation} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <View style={styles.newChat}>
        <MaterialCommunityIcons
          name='android-messages'
          size={30}
          color='#fff'
        />
      </View>
    </>
  );
};

export default Chats;

const styles = StyleSheet.create({
  chatMain: {
    // flex:1,
    backgroundColor: APP_BACKGROUND,
  },
  newChat: {
    height: 55,
    width: 55,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: HEADER_TEXT_ACTIVE,
    position: "absolute",
    bottom: "3%",
    right: "4%",
  },
});
