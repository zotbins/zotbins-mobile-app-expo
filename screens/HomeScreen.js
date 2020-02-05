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

import HomeScreenActivityDonut from '../components/homescreencomponents/HomeScreenActivityDonut';

const HomeTabInsight = () => (
  <View>
     <HomeScreenActivityDonut />
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
      swipeEnabled={false}
    />
  );
}

HomeScreen.navigationOptions = {
  title: "Activity Insight",
};

