import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {View, ViewStyle} from 'react-native';
import {Text} from '@/components';
import {BottomTabParamsList} from 'src/navigators/tab-navigator';

export const HomeScreen = ({
  navigation,
}: NativeStackScreenProps<BottomTabParamsList, 'Home'>) => {
  return (
    <View style={$container}>
      <Text>Home Screen</Text>
    </View>
  );
};

const $container: ViewStyle = {
  flex: 1,
  gap: 20,
  justifyContent: 'center',
  alignItems: 'center',
};
