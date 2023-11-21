import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import { BurnCalories } from "@screens/onboarding/BurnCalories";
import { EatWell } from "@screens/onboarding/EatWell";
import { InitialOnboarding } from "@screens/onboarding/InitialOnboarding";
import { LetImproveSleep } from "@screens/onboarding/LetImproveSleep";
import { TrackYourGoal } from "@screens/onboarding/TrackYourGoal";

type AuthRoutes = {
  InitialOnboarding: undefined;
  BurnCalories: undefined;
  EatWell: undefined;
  LetImproveSleep: undefined;
  TrackYourGoal: undefined;
};

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="InitialOnboarding"
    >
      <Screen name="InitialOnboarding" component={InitialOnboarding} />
      <Screen name="BurnCalories" component={BurnCalories} />
      <Screen name="EatWell" component={EatWell} />
      <Screen name="LetImproveSleep" component={LetImproveSleep} />
      <Screen name="TrackYourGoal" component={TrackYourGoal} />
    </Navigator>
  );
}
