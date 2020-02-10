import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { useNavigation } from "@react-navigation/native";
import PieChart from "react-native-pie-chart";
import { Ionicons } from '@expo/vector-icons';

const currentMonth = "February";

const wasteValue = 30;
const wasteColor = "#54D8FF";
const recyclableValue = 40;
const recyclableColor = "#CAFF54";
const compostValue = 50;
const compostColor = "#FFF854";

const HomeScreenDonutView = () => (
    <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: "white", justifyContent: "center"}}>
            <Text style={{textAlign: "center"}}>{currentMonth}</Text>
        </View>
        <View style={{flex: 5, backgroundColor: "white", justifyContent: "center"}}>
            <PieChart
                style={{marginTop: 25, marginBottom: 25}}
                chart_wh={250}
                series={[compostValue, recyclableValue, wasteValue]}
                sliceColor={[compostColor, recyclableColor, wasteColor]}
                doughnut={true}
                coverRadius={0.60}
            />
            <Text style={{position: "absolute", alignSelf: "center", textAlign: "center"}}>{"Disposable\nActivity"}</Text>
        </View>
        <View style={{flex: 2, flexDirection: "row", justifyContent: "center", backgroundColor: "white"}}>
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
)

export default function HomeScreenInsightComponent(props) {
    return (
        <View style={{alignItems: "center"}}>
            <View>
                <HomeScreenDonutView/>
                <View style={{backgroundColor: "white", marginBottom: 25}}>
                    <TouchableOpacity style={{paddingTop: 10, paddingBottom: 10, borderBottomWidth: 1}} onPress={() => props.navigation.navigate("Trends")}>
                        <Text>View Personal Trends <Ionicons name={"md-arrow-dropright"}/></Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={{paddingTop: 10, paddingBottom: 10, borderBottomWidth: 1}}  onPress={() => props.navigation.navigate("Waste")}>
                        <Text>View Waste Activity <Ionicons name={"md-arrow-dropright"}/></Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
  );
}
