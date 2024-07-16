import {AppStackParamList} from '@/navigators';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useEffect} from 'react';
import {ActivityIndicator} from 'react-native';

export const InitialScreen = ({
  navigation,
}: NativeStackScreenProps<AppStackParamList, 'Initial'>) => {
  useEffect(() => {
    const checkAuth = async () => {
      // const user = await Auth.currentAuthenticatedUser();
      const user = true;
      if (user) {
        navigation.replace('BottomTab');
      } else {
        navigation.replace('Auth');
      }
    };

    checkAuth();
  }, []);
  /*
   *Here you can return your custom loader component
   **/
  return <ActivityIndicator size="large" color="#0000ff" />;
};
