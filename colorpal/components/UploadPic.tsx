import React from "react";
import { Button, Image } from "@rneui/base";
import { View } from "react-native";
import { Stack, VStack } from "react-native-flex-layout";

function UploadPic() {
  return (
    <View>
      <Stack fill center spacing={100}>
        <Image
          style={{ margin: 10, height: 80, width: 80 }} // Set a specific height
          source={require("../assets/logo3.png")}
        />
        <VStack m={4} spacing={20}>
          <Button title="Take Photo" size="lg" type="outline" />
          <Button title="Upload Photo" size="lg" type="outline" />
        </VStack>
      </Stack>
    </View>
  );
}

export default UploadPic;
