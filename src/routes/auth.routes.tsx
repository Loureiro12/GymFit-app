import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import { BurnCalories } from "@screens/onboarding/BurnCalories";
import { EatWell } from "@screens/onboarding/EatWell";
import { InitialOnboarding } from "@screens/onboarding/InitialOnboarding";
import { LetImproveSleep } from "@screens/onboarding/LetImproveSleep";
import { TrackYourGoal } from "@screens/onboarding/TrackYourGoal";
import { SelectUserType } from "@screens/SelectUserType";
import { SignIn } from "@screens/SignIn";
import { SignUp } from "@screens/SignUp";

type AuthRoutes = {
  InitialOnboarding: undefined;
  BurnCalories: undefined;
  EatWell: undefined;
  LetImproveSleep: undefined;
  TrackYourGoal: undefined;
  SignIn: undefined;
  SignUp: undefined;
  SelectUserType: undefined;
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
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="SelectUserType" component={SelectUserType} />
    </Navigator>
  );
}
