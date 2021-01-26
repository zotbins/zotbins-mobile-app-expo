import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/HomeView/Home";
import BarcodeScanner from "../components/BarcodeScanner";

//import MainTabNavigator from "./MainTabNavigator";

const screens = {
  Home: {
    screen: Home,
  },
  BarcodeScanner: {
    screen: BarcodeScanner,
  },
};
const AppNavigator = createStackNavigator(screens);

export default createAppContainer(AppNavigator);
