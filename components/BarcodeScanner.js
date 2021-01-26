import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import axios from "axios";

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

export default class BarcodeScanner extends Component {
  state = {
    data: {},
  };
  barCodeScanned = ({ data }) => {
    var self = this;
    axios
      .get("https://zotbins.pythonanywhere.com/barcode/get", {
        params: { barcode: data },
      })
      .then(function (response) {
        self.setState({ data: response.data });
        alert(
          "Instructions: " +
            data.instructions +
            "\n" +
            "Name: " +
            data.name +
            "\n" +
            "Type: " +
            data.type +
            "Waste Bin: " +
            data.wastebin
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <BarCodeScanner
          onBarCodeScanned={this.barCodeScanned}
          style={{
            height: DEVICE_HEIGHT / 1.1,
            width: DEVICE_WIDTH / 1.1,
          }}
        ></BarCodeScanner>
      </View>
    );
  }
}
