import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import * as Screens from '@/screens';
import {NavigationProps} from './types';
import {ActivityIndicator, useColorScheme} from 'react-native';
import {AuthNavigator} from './auth-navigator';
import {BottomTabNavigator} from './tab-navigator';
import {useEffect} from 'react';

export type AppStackParamList = {
  Initial: undefined;
  Auth: undefined;
  BottomTab: undefined;
};

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
      <Stack.Screen name="Initial" component={Screens.InitialScreen} />
      <Stack.Screen name="Auth" component={AuthNavigator} />
      <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
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
