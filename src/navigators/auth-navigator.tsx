import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Screens from '@/screens';
import {colors} from '@/theme';

export type AuthStackParamsList = {
  Welcome: undefined;
  Signup: undefined;
  Login: undefined;
  ResetPassword: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParamsList>();

export const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        navigationBarColor: 'black',
      }}>
      <AuthStack.Screen name="Welcome" component={Screens.Welcome} />
      <AuthStack.Screen name="Signup" component={Screens.SignupScreen} />
      <AuthStack.Screen name="Login" component={Screens.LoginScreen} />
    </AuthStack.Navigator>
  );
};
