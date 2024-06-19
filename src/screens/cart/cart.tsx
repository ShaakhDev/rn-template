import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {View, ViewStyle} from 'react-native';
import {BottomTabParamsList} from 'src/navigators/tab-navigator';
import {Text} from '@/components';

export const CartScreen = ({
  navigation,
}: NativeStackScreenProps<BottomTabParamsList, 'Cart'>) => {
  return (
    <View style={$container}>
      <Text>Cart Screen</Text>
    </View>
  );
};

const $container: ViewStyle = {
  flex: 1,
  gap: 20,
  justifyContent: 'center',
  alignItems: 'center',
};
