import React from "react";
import { Text, View } from "react-native";
import { TabBar, TabView, SceneMap } from "react-native-tab-view";

import HomeScreenInsightComponent from "../components/HomeScreenComponents/HomeScreenInsightComponent";
import HomeScreenSocialComponent from "../components/HomeScreenComponents/HomeScreenSocialComponent";
import ZotBinColors from "../constants/ZotBinColors";
import ZotBinScreenNavOptions from "../constants/ZotBinScreenNavOptions";

export default function HomeScreen(props) {
  // Personal Insight Tab
  const HomeTabInsight = () => (
    <View>
      <HomeScreenInsightComponent {...props} />
    </View>
  );
  // Social Tab... TODO: Talk about implementing the social feature...
  const HomeTabSocial = () => (
    <View>
      <HomeScreenSocialComponent {...props} />
    </View>
  );

  // Start this screen in state 0 "homeTabInsight"
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "homeTabInsight", title: "Personal Insight" },
    { key: "homeTabSocial", title: "Social" },
  ]);

  const renderScene = SceneMap({
    homeTabInsight: HomeTabInsight,
    homeTabSocial: HomeTabSocial,
  });

  const initialLayout = { flex: 1 };

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      swipeEnabled={false}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          style={{
            backgroundColor: "white",
            elevation: 0,
          }}
          indicatorStyle={{ backgroundColor: ZotBinColors.inactiveColor }}
          labelStyle={{ color: ZotBinColors.inactiveColor }}
        />
      )}
    />
  );
}

HomeScreen.navigationOptions = ZotBinScreenNavOptions("Activity Insight");
