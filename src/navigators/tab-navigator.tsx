import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as Screens from '@/screens';

export type BottomTabParamsList = {
  Home: undefined;
  Catalog: undefined;
  Cart: undefined;
  Wishlist: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamsList>();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={Screens.HomeScreen} />
      <Tab.Screen name="Profile" component={Screens.ProfileScreen} />
    </Tab.Navigator>
  );
};
