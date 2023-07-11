import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import AwesomeButton from "./UploadPic";
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

type HomeProps = {
  navigation: NativeStackNavigationProp<any>;
}

export default function Home({navigation}: HomeProps) {
    return (
        <View style={styles.container}>
          <AwesomeButton />
          <Text>Welcome to Colorpal!</Text>
          <Button title="Take the Quiz" onPress={() => navigation.navigate('Quiz')} />
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
  