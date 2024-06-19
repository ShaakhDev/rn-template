import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import {NavigationProps} from './types';
import {ActivityIndicator, useColorScheme} from 'react-native';
import Config from '@/config';
import * as Screens from '@/screens';
import {AuthNavigator} from './auth-navigator';
import {BottomTabNavigator} from './tab-navigator';
import {useEffect} from 'react';

export type AppStackParamList = {
  Initial: undefined;
  Auth: undefined;
  BottomTab: undefined;
};

const exitRoutes = Config.exitRoutes;

export type AppStackScreenProps<T extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, T>;

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Initial"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Initial" component={InitialScreen} />
      <Stack.Screen name="Auth" component={AuthNavigator} />
      <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};

const InitialScreen = ({
  navigation,
}: NativeStackScreenProps<AppStackParamList, 'Initial'>) => {
  useEffect(() => {
    const checkAuth = async () => {
      // const user = await Auth.currentAuthenticatedUser();
      const user = null;
      if (user) {
        navigation.replace('BottomTab');
      } else {
        navigation.replace('Auth');
      }
    };

    checkAuth();
  }, []);

  return <ActivityIndicator size="large" color="#0000ff" />;
};

export function AppNavigator(props: NavigationProps) {
  const colorScheme = useColorScheme();

  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      {...props}>
      <AppStack />
    </NavigationContainer>
  );
}
