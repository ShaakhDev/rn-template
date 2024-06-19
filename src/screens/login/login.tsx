import {GradientScreen} from '@/components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Text, View, TouchableOpacity, ViewStyle} from 'react-native';
import {AuthStackParamsList} from 'src/navigators/auth-navigator';

export const LoginScreen = ({
  navigation,
}: NativeStackScreenProps<AuthStackParamsList, 'Login'>) => {
  return (
    <GradientScreen contentContainerStyle={$container}>
      <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
        <Text>Reset Password</Text>
      </TouchableOpacity>
      <Text>Login Screen</Text>
    </GradientScreen>
  );
};

const $container: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
};
