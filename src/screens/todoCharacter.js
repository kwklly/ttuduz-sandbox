import React from "react";
import {
  SafeAreaView,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView
} from "react-native";
import TodoInsert from "../components/TodoInsert";
import TodoListItem from "../components/TodoListItem";

export function TodoCharacter() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: "100%",
          height: 64,
          backgroundColor: "#fff",
          elevation: 6,
          marginBottom: 16
        }}
      >
        <View style={styles.category}>
          <Text style={styles.categoryName}>운동</Text>
        </View>
        <Text style={styles.characterName}>낑이</Text>
      </View>

      <View
        style={{
          width: "67%",
          height: "34%",
          borderRadius: 124,
          alignItems: "center",
          backgroundColor: "#ffffff",
          marginBottom: 12
        }}
      >
        <View style={styles.item}>
          <Image
            style={{
              position: "relative",
              top: 3.2,
              width: 27.9,
              height: 27.9
            }}
            source={require("../assets/carrot.png")}
          />
        </View>

        <View style={styles.book}>
          <Image
            style={{
              position: "relative",
              top: -5,
              right: 7,
              width: 45,
              height: 45
            }}
            source={require("../assets/book.png")}
          />
        </View>

        <Image
          style={{ width: 100, height: 180, marginTop: 24 }}
          source={require("../assets/rabbit_body.png")}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.dayday}>11.21 SAT</Text>
        <ScrollView contentContainerStyle={styles.input}>
          <Text style={styles.list}>To do List</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffa8c7",
    alignItems: "center"
  },
  characterName: {
    position: "absolute",
    top: 0,
    left: 162,
    color: "#373636",
    fontSize: 18,
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 22,
    letterSpacing: 0,
    marginTop: 20,
    marginBottom: 16,
    alignItems: "center",
    backgroundColor: "#fff",
    width: 36,
    height: 24
  },
  list: {
    marginLeft: 17,
    marginTop: 12
  },
  category: {
    width: 52,
    height: 32,
    position: "absolute",
    top: 16,
    right: 16,
    borderRadius: 16,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#9d9c9c"
  },
  categoryName: {
    position: "absolute",
    top: 8,
    left: 14,
    fontFamily: "Roboto",
    fontSize: 12,
    fontWeight: "300",
    fontStyle: "normal",
    lineHeight: 14,
    letterSpacing: 0,
    color: "#373636"
  },
  item: {
    position: "absolute",
    left: -43,
    top: 79,
    width: 28,
    height: 52,
    borderRadius: 18,
    backgroundColor: "#fff"
  },
  book: {
    position: "absolute",
    left: -43,
    top: 201,
    width: 28,
    height: 28,
    backgroundColor: "#fff",
    borderRadius: 124
  },
  day1: {
    position: "absolute",
    top: 17,
    left: 126,
    width: 8,
    height: 19,
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "300",
    fontStyle: "normal",
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: "left",
    color: "#000000"
  },
  day2: {
    position: "absolute",
    top: 17,
    right: 126,
    width: 8,
    height: 19,
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "300",
    fontStyle: "normal",
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: "left",
    color: "#000000"
  },
  dayday: {
    position: "absolute",
    top: 17,
    right: 149,
    width: 62,
    height: 17,
    fontFamily: "Roboto",
    fontSize: 15,
    fontWeight: "300",
    fontStyle: "normal",
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: "center",
    color: "#000000",
    marginBottom: 20
  },
  card: {
    backgroundColor: "#fff",
    width: "100%",
    height: "56%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginLeft: 0,
    marginRight: 0
  },
  input: {
    width: "80%",
    height: "10%",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#1a000000",
    fontSize: 14,
    marginTop: 52,
    marginLeft: 32,
    marginRight: 32,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.13,
    shadowRadius: 13,
    elevation: 10
  }
});
