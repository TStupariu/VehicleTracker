import {createStackNavigator} from "react-navigation";
import NameInputScreen from "../screens/Onboarding/NameInputScreen";
import InitialVehiclesScreen from "../screens/Onboarding/InitialVehiclesScreen";

const routes = {
  NameInput: {
    screen: NameInputScreen,
  },
  InitialVehicles: {
    screen: InitialVehiclesScreen,
  }
}

const config = {
  initialRouteName: 'NameInput'
}

const onboardingStackNavigator = createStackNavigator(routes, config)

export default onboardingStackNavigator
