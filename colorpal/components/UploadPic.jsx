import React from "react";
import { Button } from "@rneui/base";
import { View } from "react-native";
import { VStack } from "react-native-flex-layout";

function AwesomeButton() {
  return (
    <View>
      <VStack m={4} spacing={2} divider>
        <Button style="margin-bottom:10px" title="Take Photo" size="lg" />
        <Button title="Upload Photo" size="lg" />
      </VStack>
    </View>
  );
}

export default AwesomeButton;
