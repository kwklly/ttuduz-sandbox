import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function New() {
  return (
    <View style={styles.container}>
      <Text>버튼 예제</Text>
      <Button title="Button" onPress={() => alert("Touch!")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
