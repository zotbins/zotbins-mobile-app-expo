import React from "react";
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import ZotBinColors from '../constants/ZotBinColors';
import CalculateDiversionRate from "../api/CalculateDiversionRate";

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";

// TODO: Need to plugin actual values with API requests
// Raw Values
const averageWasteValue = 67; //ZotBinsObservationsGetRequest("waste");
const averageRecyclableValue = 25; //ZotBinsObservationsGetRequest("recycle");
const averageCompostValue = 8; //ZotBinsObservationsGetRequest("compost");
const averageDiversionValue = CalculateDiversionRate(averageRecyclableValue, averageCompostValue, averageWasteValue);

const minWasteValue = 40;
const minRecyclableValue = 20;
const minCompostValue = 5;
const minDiversionValue = CalculateDiversionRate(minRecyclableValue, minCompostValue, minWasteValue);

const maxWasteValue = 74;
const maxRecyclableValue = 50;
const maxCompostValue = 14;
const maxDiversionValue = CalculateDiversionRate(maxRecyclableValue, maxCompostValue, maxWasteValue);

// Needed constants
const currentMonth = "March";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const TrendsScreenLineChartView = () => (
    <View style={{flex: 1}}>
        <LineChart
            data={{
            labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec"
            ],
            datasets: [
                {
                    data: [20, 45, 28, 80, 99, 43, 20, 45, 28, 80, 99, 43]
                }
            ],
            }}
            width={screenWidth}
            height={screenHeight/3 - 50}
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
                borderRadius: 16,
            }}
        />
    </View>

)


export default function TrendsScreen() {
    return (
            <View style={{alignItems: "center"}}>
                <View>
                    <TrendsScreenLineChartView/>
                    <View style={{flex: 2, justifyContent: "center", backgroundColor: "white"}}>
                        <View style={{flex: 1, flexDirection: "row", marginTop: 5, justifyContent: "center"}}>
                            <View style={{flex: 1, alignItems: "center"}}>
                                <TouchableOpacity>
                                    <Text>{"1D"}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex: 1, alignItems: "center"}}>
                                <TouchableOpacity>
                                    <Text>{"3D"}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex: 1, alignItems: "center"}}>
                                <TouchableOpacity>
                                    <Text>{"1W"}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex: 1, alignItems: "center"}}>
                                <TouchableOpacity>
                                    <Text>{"1M"}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex: 1, alignItems: "center"}}>
                                <TouchableOpacity>
                                    <Text>{"6M"}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex: 1, alignItems: "center"}}>
                               <TouchableOpacity>
                                   <Text>{"1Y"}</Text>
                               </TouchableOpacity>
                           </View>
                        </View>
                        <View style={{flex: 10, marginTop: 5}}>
                            <View style={{alignItems: "center"}}>
                                <Text style={{justifyContent: "center", fontSize: 30}}>{"1Y Data Trends"}</Text>
                            </View>
                            <View style={{flex: 10, flexDirection: "row"}}>
                                <View style={{flex: 1, marginTop: 30, alignItems: "center", borderColor: ZotBinColors.wasteColor, borderBottomWidth: 5}}>
                                    <Text style={{fontSize: 22, color: ZotBinColors.wasteColor}}>Waste</Text>
                                    <Text style={{fontSize: 22}}>{averageWasteValue}%</Text>
                                    <Text style={{fontSize: 16, color: ZotBinColors.inactiveColor}}>Avg.</Text>
                                    <Text style={{fontSize: 22}}>{minWasteValue}%</Text>
                                    <Text style={{fontSize: 16, color: ZotBinColors.inactiveColor}}>Min.</Text>
                                    <Text style={{fontSize: 22}}>{maxWasteValue}%</Text>
                                    <Text style={{fontSize: 16, color: ZotBinColors.inactiveColor}}>Max.</Text>
                                </View>
                                <View style={{flex: 1, marginTop: 30, alignItems: "center", borderColor: ZotBinColors.recyclableColor, borderBottomWidth: 5}}>
                                    <Text style={{fontSize: 22, color: ZotBinColors.recyclableColor}}>Recycle</Text>
                                    <Text style={{fontSize: 22}}>{averageRecyclableValue}%</Text>
                                    <Text style={{fontSize: 16, color: ZotBinColors.inactiveColor}}>Avg.</Text>
                                    <Text style={{fontSize: 22}}>{minRecyclableValue}%</Text>
                                    <Text style={{fontSize: 16, color: ZotBinColors.inactiveColor}}>Min.</Text>
                                    <Text style={{fontSize: 22}}>{maxRecyclableValue}%</Text>
                                    <Text style={{fontSize: 16, color: ZotBinColors.inactiveColor}}>Max.</Text>
                                </View>
                                <View style={{flex: 1, marginTop: 30, alignItems: "center", borderColor: ZotBinColors.compostColor, borderBottomWidth: 5}}>
                                    <Text style={{fontSize: 22, color: ZotBinColors.compostColor}}>Compost</Text>
                                    <Text style={{fontSize: 22}}>{averageCompostValue}%</Text>
                                    <Text style={{fontSize: 16, color: ZotBinColors.inactiveColor}}>Avg.</Text>
                                    <Text style={{fontSize: 22}}>{minCompostValue}%</Text>
                                    <Text style={{fontSize: 16, color: ZotBinColors.inactiveColor}}>Min.</Text>
                                    <Text style={{fontSize: 22}}>{maxCompostValue}%</Text>
                                    <Text style={{fontSize: 16, color: ZotBinColors.inactiveColor}}>Max.</Text>
                                </View>
                                <View style={{flex: 1, marginTop: 30, alignItems: "center", borderColor: ZotBinColors.blackColor, borderBottomWidth: 5}}>
                                <Text style={{fontSize: 22, color: ZotBinColors.blackColor}}>{"D. R."}</Text>
                                    <Text style={{fontSize: 22}}>{averageDiversionValue}%</Text>
                                    <Text style={{fontSize: 16, color: ZotBinColors.inactiveColor}}>Avg.</Text>
                                    <Text style={{fontSize: 22}}>{minDiversionValue}%</Text>
                                    <Text style={{fontSize: 16, color: ZotBinColors.inactiveColor}}>Min.</Text>
                                    <Text style={{fontSize: 22}}>{maxDiversionValue}%</Text>
                                    <Text style={{fontSize: 16, color: ZotBinColors.inactiveColor}}>Max.</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
    )
}

TrendsScreen.navigationOptions = {
    title: "Your Personal Trends",
};
