import LoginScreen from "../screens/LoginScreen";
import {createSwitchNavigator} from "react-navigation";
import onboardingStackNavigator from "./onboardingStackNavigator";

const routes = {
  Login: {
    screen: LoginScreen,
    routeName: 'Login',
  },
  Onboarding: {
    screen: onboardingStackNavigator,
    routeName: 'Onboarding',
  }
}

const config = {
  initialRouteName: 'Login'
}

const mainSwitchNavigator = createSwitchNavigator(routes, config)

export default mainSwitchNavigator
