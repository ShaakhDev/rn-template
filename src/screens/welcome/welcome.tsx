import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {View, ViewStyle, StatusBar} from 'react-native';
import {Text} from '@/components';
import {AuthStackParamsList} from 'src/navigators/auth-navigator';
import {colors, spacing} from '@/theme';

export const Welcome = ({
  navigation,
}: NativeStackScreenProps<AuthStackParamsList, 'Welcome'>) => {
  return (
    <>
      {/* <StatusBar barStyle="light-content" /> */}
      <View style={$container}>
        <Text>Welcome Screen</Text>
      </View>
    </>
  );
};

const $container: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  paddingBottom: spacing.xxxl,
  paddingHorizontal: spacing.lg,
};
