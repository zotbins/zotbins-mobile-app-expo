import React from "react";
import { Text, View } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import PieChart from "react-native-pie-chart";

const currentMonth = "February";

const CurrentMonthView = () => (
    <View>
        <View>
            <Text style={{marginTop: 35}}>{currentMonth}</Text>
        </View>
        <View>
            <PieChart
                style={{marginTop: 25, marginBottom: 25}}
                chart_wh={250}
                series={[100, 150, 300]}
                sliceColor={["#CAFF54","#FFF854","#54D8FF"]}
                doughnut={true}
                coverRadius={0.60}
            />
            <Text style={{position: "absolute", alignSelf: "center", top: 140}}>Disposable Activity</Text>
        </View>


        <View>
           <Text>Waste = {30} </Text>
           <Text>Recyclable = {30} </Text>
           <Text>Compost = {40} </Text>
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


