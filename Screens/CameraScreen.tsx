import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Camera } from "expo-camera";
import { useIsFocused } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");

export default function CameraScreen({ navigation }: any) {
  const [hasPermission, setHasPermission]: any = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const isFocused = useIsFocused();

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      // The screen is focused
      // Call any action
      (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === "granted");
      })();
      console.log("heool");
    });
    return unsubscribe;
  }, [navigation]);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  if (isFocused) {
    const handleFacesDetected = ({ faces }: any) => {
      console.log(faces);
    };
    return (
      <View style={styles.container}>
        <Camera style={styles.camera} type={type} focusable></Camera>
        <View style={styles.cameraDown}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}
            >
              <MaterialIcons name='flip-camera-ios' size={30} color='#fff' />
            </TouchableOpacity>
          </View>
          <View style={styles.takesnap}></View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <MaterialCommunityIcons name='flash-off' size={30} color='#fff' />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  } else {
    return <View />;
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    width: width,
  },
  camera: {
    flex: 3,
    height,
    flexDirection: "column-reverse",
  },
  buttonContainer: {},
  button: {},
  text: {
    color: "#fff",
  },
  cameraDown: {
    height: 180,
    width,
    backgroundColor: "#111212",
    justifyContent: "space-around",
    alignItems: "center",
    // paddingBottom: 360,
    flexDirection: "row-reverse",
  },
  takesnap: {
    height: 70,
    width: 70,
    borderWidth: 3,
    borderColor: "#fff",
    borderRadius: 50,
  },
});
