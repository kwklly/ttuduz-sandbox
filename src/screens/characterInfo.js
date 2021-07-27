import React from "react";
import { SafeAreaView, Image, StyleSheet, Text, View } from "react-native";

export function CharacterInfo() {
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
        <Text style={styles.characterName}>낑이 정보</Text>
      </View>
      <Image
        style={{
          position: "relative",
          top: 3.2,
          width: "60%",
          height: "40%",
          marginTop: 24
        }}
        source={require("../assets/rabbit_body_edit.png")}
      />

      <View style={styles.box}>
        <Text style={{ textAlign: "center" }}>내 친구들이 제일 좋아!</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.dayday}>
          여기저기 놀러다니기 좋아하는 토끼 매일 아침 집을 나가 저녁에
          들어올만큼 돌아다니는걸 좋아한다. 가장 가보고 싶은 곳은 옆집에 사는
          판디씨네 집이다. 처음 보는 친구와도 금방 친해지며, 요즘 제일 관심있는
          건 뜨개질!
        </Text>
        <Text style={styles.categoryBottom}>CATEGORY</Text>
        <Text style={styles.text}>ITEM</Text>
        <View style={styles.category}>
          <Text style={styles.categoryName}>운동</Text>
        </View>
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
  category: {
    width: 52,
    height: 32,
    marginLeft: 32,
    marginTop: -130,
    marginRight: 32,
    marginBottom: 129,
    borderRadius: 16,
    backgroundColor: "#ffa8c7"
  },
  categoryBottom: {
    marginLeft: 32,
    marginTop: 120,
    marginBottom: 129,
    width: 70,
    height: 17,
    fontFamily: "Roboto",
    fontWeight: "500",
    lineHeight: 17,
    fontSize: 13
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
    color: "#fff"
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
  text: {
    marginLeft: 272
  },
  box: {
    marginTop: -20,
    marginBottom: -2,

    width: 211,
    height: 36,
    borderRadius: 25,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderWidth: 3,
    borderColor: "#ff86b9"
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
    marginLeft: 32,
    marginTop: 30,
    marginRight: 32,
    marginBottom: 129,
    fontFamily: "Roboto",
    fontSize: 10,
    fontWeight: "300",
    fontStyle: "normal",
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: "left",
    color: "#000000"
  },
  card: {
    backgroundColor: "#fff",
    width: "100%",
    height: "50%",
    marginLeft: 0,
    marginRight: 0,
    marginTop: -20
  },
  input: {
    width: 296,
    height: 42,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 22,
    borderBottomColor: "#9e9e9e",
    fontSize: 14,
    marginTop: 52,
    marginLeft: 32,
    marginRight: 32
  }
});
