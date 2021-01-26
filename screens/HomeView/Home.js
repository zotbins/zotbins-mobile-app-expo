import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Home({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("BarcodeScanner");
  };

  return <Button title="Open Scanner" onPress={pressHandler} />;
}
