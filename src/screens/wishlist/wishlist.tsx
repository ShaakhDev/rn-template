import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {View, ViewStyle} from 'react-native';
import {BottomTabParamsList} from 'src/navigators/tab-navigator';
import {Text} from '@/components';
export const WishlistScreen = ({
  navigation,
}: NativeStackScreenProps<BottomTabParamsList, 'Wishlist'>) => {
  return (
    <View style={$container}>
      <Text>Wishlist Screen</Text>
    </View>
  );
};

const $container: ViewStyle = {
  flex: 1,
  gap: 20,
  justifyContent: 'center',
  alignItems: 'center',
};
