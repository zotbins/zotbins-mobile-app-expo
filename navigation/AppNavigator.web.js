import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/HomeView/Home";
import BarCodeScanner from "../components/BarcodeScanner";

//import MainTabNavigator from "./MainTabNavigator";

const screens = {
  Home: {
    screen: Home,
  },
  BarCodeScanner: {
    screen: BarCodeScanner,
  },
};
const AppNavigator = createStackNavigator(screens);

export default createAppContainer(AppNavigator);
