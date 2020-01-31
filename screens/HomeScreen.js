import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { TabView, SceneMap } from 'react-native-tab-view';
import PieChart from 'react-native-pie-chart';

const HomeTabInsight = () => (
  <View style={{alignItems: "center"}}>
    <View>
      <Text style={{marginTop: 35}}>Disposable Activity</Text>
      <PieChart
        style={{marginTop: 35}}
        chart_wh={250}
        series={[100, 150, 300]}
        sliceColor={['#CAFF54','#FFF854','#54D8FF']}
        doughnut={true}
        coverRadius={0.60}
        coverFill={"#FFF"}
       />
     </View>
     <View>
       <Text>Waste = {30} </Text>
       <Text>Recyclable = {30} </Text>
       <Text>Compost = {40} </Text>
     </View>

  </View>
);

const HomeTabSocial = () => (
  <View><Text>Second route</Text></View>
);

const initialLayout = { flex: 1 };

export default function HomeScreen() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'homeTabInsight', title: 'Personal Insight' },
    { key: 'homeTabSocial', title: 'Social' },
  ]);

  const renderScene = SceneMap({
    homeTabInsight: HomeTabInsight,
    homeTabSocial: HomeTabSocial,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
}

HomeScreen.navigationOptions = {
  title: "Activity Insight",
};

