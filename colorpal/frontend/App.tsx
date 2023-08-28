import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import StyleSheet from "react-native";
import UploadPic from "./components/UploadPic";

export default function App() {
  return (
    <View style={styles.container}>
      <UploadPic />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
