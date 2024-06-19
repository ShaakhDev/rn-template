import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {View, ViewStyle} from 'react-native';
import {BottomTabParamsList} from 'src/navigators/tab-navigator';
import {Text} from '@/components';

export const ProfileScreen = ({
  navigation,
}: NativeStackScreenProps<BottomTabParamsList, 'Profile'>) => {
  return (
    <View style={$container}>
      <Text>Profile Screen</Text>
    </View>
  );
};

const $container: ViewStyle = {
  flex: 1,
  gap: 20,
  justifyContent: 'center',
  alignItems: 'center',
};
