import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { useNavigation } from "@react-navigation/native";
import PieChart from "react-native-pie-chart";
import { Ionicons } from "@expo/vector-icons";
import ZotBinColors from "../../constants/ZotBinColors";
import ZotBinsObservationsGetRequest from "../../api/ZotBinsObservationsGetRequest";

const currentMonth = "March";
const myWasteValue = 55; //ZotBinsObservationsGetRequest("waste");
const myRecyclableValue = 31; //ZotBinsObservationsGetRequest("recycle");
const myCompostValue = 14; //ZotBinsObservationsGetRequest("compost");
// TODO: Need to use componentDidMount to wait for the GET request result

const HomeScreenDonutView = () => (
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
      <PieChart
        style={{ marginTop: 25, marginBottom: 25 }}
        chart_wh={250}
        series={[myCompostValue, myRecyclableValue, myWasteValue]}
        sliceColor={[
          ZotBinColors.compostColor,
          ZotBinColors.recyclableColor,
          ZotBinColors.wasteColor,
        ]}
        doughnut={true}
        coverRadius={0.6}
      />
      <Text
        style={{
          position: "absolute",
          alignSelf: "center",
          textAlign: "center",
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        {"Disposable\nActivity"}
      </Text>
    </View>
    <View
      style={{ flex: 1, justifyContent: "center", backgroundColor: "white" }}
    >
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View
          style={{
            flex: 1,
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
    </View>
  </View>
);

export default function HomeScreenInsightComponent(props) {
  return (
    <View style={{ alignItems: "center" }}>
      <View>
        <HomeScreenDonutView />
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            backgroundColor: "white",
            marginBottom: 25,
          }}
        >
          <TouchableOpacity
            style={{
              marginBottom: 10,
              paddingTop: 15,
              paddingBottom: 15,
              borderBottomWidth: 2,
            }}
            onPress={() => props.navigation.navigate("Trends")}
          >
            <Text style={{ fontSize: 18 }}>
              View Personal Trends <Ionicons name={"md-arrow-dropright"} />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: 10,
              paddingTop: 15,
              paddingBottom: 15,
              borderBottomWidth: 2,
            }}
            onPress={() => props.navigation.navigate("Waste")}
          >
            <Text style={{ fontSize: 18 }}>
              View Waste Activity <Ionicons name={"md-arrow-dropright"} />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
