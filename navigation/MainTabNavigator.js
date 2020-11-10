import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import IoniconsTabBarIcon from "../components/TabNavigatorComponents/IoniconsTabBarIcon";
import AntDesignTabBarIcon from "../components/TabNavigatorComponents/AntDesignTabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import SettingsScreen from "../screens/SettingsScreen";
import TrendsScreen from "../screens/TrendsScreen";
import WasteScreen from "../screens/WasteScreen";
import ZotBinColors from "../constants/ZotBinColors";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Trends: TrendsScreen,
    Waste: WasteScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: "INSIGHT",
  tabBarOptions: {
    activeTintColor: ZotBinColors.tintColor,
    inactiveTintColor: ZotBinColors.inactiveColor,
  },
  tabBarIcon: ({ focused }) => (
    <AntDesignTabBarIcon focused={focused} name={"barschart"} />
  ),
};

HomeStack.path = "";

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: "TOOLS",
  tabBarOptions: {
    activeTintColor: ZotBinColors.tintColor,
    inactiveTintColor: ZotBinColors.inactiveColor,
  },
  tabBarIcon: ({ focused }) => (
    <IoniconsTabBarIcon focused={focused} name={"md-trash"} />
  ),
};

LinksStack.path = "";

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: "ACCOUNT",
  tabBarOptions: {
    activeTintColor: ZotBinColors.tintColor,
    inactiveTintColor: ZotBinColors.inactiveColor,
  },
  tabBarIcon: ({ focused }) => (
    <IoniconsTabBarIcon focused={focused} name={"md-person"} />
  ),
};

SettingsStack.path = "";

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});

tabNavigator.path = "";

export default tabNavigator;
