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

import HomeScreenInsightComponent from '../components/HomeScreenComponents/HomeScreenInsightComponent';



const initialLayout = { flex: 1 };

export default function HomeScreen(props) {

  const HomeTabInsight = () => (
    <View>
        <HomeScreenInsightComponent {...props}/>
    </View>
  );

  const HomeTabSocial = () => (
    <View>
        <Text>Second route</Text>
        <Text>Third route</Text>
    </View>
  );

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
