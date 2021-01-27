import { createSwitchNavigator } from "react-navigation";
import Home from "../screens/Home/HomeView";
import LoginView from '../screens/Login/LoginView'

/**
 * We use switch navigation so that we differentiate between authenticated and unauthenticated routes
 */

const routes = {
  initialRoute: LoginView,
  authenticatedRoute: Home
}

export const AppNavigator = createSwitchNavigator(routes);
