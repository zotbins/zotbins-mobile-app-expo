import React from "react";
import { Text, View } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import PieChart from "react-native-pie-chart";

const currentMonth = "February";

const wasteValue = 30;
const wasteColor = "#54D8FF";
const recyclableValue = 40;
const recyclableColor = "#CAFF54";
const compostValue = 50;
const compostColor = "#FFF854";

const CurrentMonthView = () => (
    <View>
        <View>
            <Text style={{marginTop: 35}}>{currentMonth}</Text>
        </View>
        <View>
            <PieChart
                style={{marginTop: 25, marginBottom: 25}}
                chart_wh={250}
                series={[compostValue, recyclableValue, wasteValue]}
                sliceColor={[compostColor, recyclableColor, wasteColor]}
                doughnut={true}
                coverRadius={0.60}
            />
            <Text style={{position: "absolute", alignSelf: "center", top: 140, textAlign: "center"}}>{"Disposable\nActivity"}</Text>
        </View>
        <View style={{flex: 1, flexDirection: "row", justifyContent: "center"}}>
            <View style={{marginRight: 50}}>
                <Text>Waste</Text>
                <Text>Recyclable</Text>
                <Text>Compost</Text>
            </View>
            <View style={{marginLeft: 50}}>
                <Text>{wasteValue}%</Text>
                <Text>{recyclableValue}%</Text>
                <Text>{compostValue}%</Text>
            </View>

        </View>
    </View>
);

export default function HomeScreenActivityDonut(props) {
    return (
        <View style={{alignItems: "center"}}>
            <CurrentMonthView />
        </View>
  );
}
