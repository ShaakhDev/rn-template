import {GradientScreen} from '@/components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Text, View, ViewStyle} from 'react-native';
import {AuthStackParamsList} from 'src/navigators/auth-navigator';

export const ResetPasswordScreen = ({
  navigation,
}: NativeStackScreenProps<AuthStackParamsList, 'ResetPassword'>) => {
  return (
    <GradientScreen contentContainerStyle={$container}>
      <Text>Reset Password Screen</Text>
    </GradientScreen>
  );
};

const $container: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
};
