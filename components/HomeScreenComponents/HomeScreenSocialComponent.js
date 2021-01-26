import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import ZotBinColors from "../../constants/ZotBinColors";
import ZotBinsObservationsGetRequest from "../../api/ZotBinsObservationsGetRequest";
import CalculateDiversionRate from "../../api/CalculateDiversionRate";
import { Dimensions } from "react-native";

import { StackedBarChart } from "react-native-chart-kit";

// TODO: Need to plugin actual values with API requests
// Raw Values
const averageWasteValue = 67; //ZotBinsObservationsGetRequest("waste");
const averageRecyclableValue = 25; //ZotBinsObservationsGetRequest("recycle");
const averageCompostValue = 8; //ZotBinsObservationsGetRequest("compost");
const myWasteValue = 55; //ZotBinsObservationsGetRequest("waste");
const myRecyclableValue = 31; //ZotBinsObservationsGetRequest("recycle");
const myCompostValue = 14; //ZotBinsObservationsGetRequest("compost");
// Diversion Values
const averageDiversionValue = CalculateDiversionRate(
  averageRecyclableValue,
  averageCompostValue,
  averageWasteValue
);
const myDiversionValue = CalculateDiversionRate(
  myRecyclableValue,
  myCompostValue,
  myWasteValue
);
const myDiversionPercentile = 74; //ZotBinsObservationsGetRequest("waste");
// Needed constants
const currentMonth = "March";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const HomeScreenStackedBarChartView = () => (
  <View style={{ flex: 2 }}>
    <View
      style={{ flex: 1, backgroundColor: "white", justifyContent: "center" }}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: 18,
          color: ZotBinColors.inactiveColor,
        }}
      >
        {currentMonth}
      </Text>
    </View>
    <View
      style={{ flex: 5, backgroundColor: "white", justifyContent: "center" }}
    >
      <StackedBarChart
        data={{
          labels: ["Avg.", "You"],
          legend: ["Waste", "Recyclable", "Compost"],
          data: [
            [averageWasteValue, averageRecyclableValue, averageCompostValue],
            [myWasteValue, myRecyclableValue, myCompostValue],
          ],
          barColors: [
            ZotBinColors.wasteColor,
            ZotBinColors.recyclableColor,
            ZotBinColors.compostColor,
          ],
        }}
        width={screenWidth - 100}
        height={screenHeight / 2 - 150}
        chartConfig={{
          backgroundColor: ZotBinColors.whiteColor,
          backgroundGradientFrom: ZotBinColors.whiteColor,
          backgroundGradientTo: ZotBinColors.whiteColor,
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 0,
          borderRadius: 16,
        }}
      />
    </View>
  </View>
);

export default function HomeScreenInsightComponent(props) {
  return (
    <View style={{ alignItems: "center" }}>
      <View>
        <HomeScreenStackedBarChartView />
        <View
          style={{
            flex: 2,
            justifyContent: "center",
            backgroundColor: "white",
          }}
        >
          <View style={{ flex: 1, flexDirection: "row", marginTop: 5 }}>
            <View
              style={{
                flex: 1,
                marginTop: 30,
                alignItems: "center",
                borderColor: ZotBinColors.wasteColor,
                borderBottomWidth: 5,
              }}
            >
              <Text style={{ fontSize: 22 }}>{myWasteValue}%</Text>
              <Text style={{ fontSize: 16, color: ZotBinColors.inactiveColor }}>
                Waste
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                marginTop: 30,
                alignItems: "center",
                borderColor: ZotBinColors.recyclableColor,
                borderBottomWidth: 5,
              }}
            >
              <Text style={{ fontSize: 22 }}>{myRecyclableValue}%</Text>
              <Text style={{ fontSize: 16, color: ZotBinColors.inactiveColor }}>
                Recycle
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                marginTop: 30,
                alignItems: "center",
                borderColor: ZotBinColors.compostColor,
                borderBottomWidth: 5,
              }}
            >
              <Text style={{ fontSize: 22 }}>{myCompostValue}%</Text>
              <Text style={{ fontSize: 16, color: ZotBinColors.inactiveColor }}>
                Compost
              </Text>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: "row", marginTop: 25 }}>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text style={{ fontSize: 22 }}>{averageDiversionValue}%</Text>
              <Text style={{ fontSize: 16, color: ZotBinColors.inactiveColor }}>
                Avg. Diversion Rate
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text style={{ fontSize: 22 }}>{myDiversionValue}%</Text>
              <Text style={{ fontSize: 16, color: ZotBinColors.inactiveColor }}>
                Your Diversion Rate
              </Text>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text style={{ fontSize: 30 }}>{myDiversionPercentile}th</Text>
              <Text style={{ fontSize: 24, color: ZotBinColors.inactiveColor }}>
                Zero-Waste Percentile
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
