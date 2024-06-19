import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Text, TouchableOpacity, ViewStyle} from 'react-native';
import {AuthStackParamsList} from 'src/navigators/auth-navigator';
import {GradientScreen} from '@/components';

export const SignupScreen = ({
  navigation,
}: NativeStackScreenProps<AuthStackParamsList, 'Signup'>) => {
  return (
    <GradientScreen contentContainerStyle={$container}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>Login</Text>
      </TouchableOpacity>
      <Text>Signup Screen</Text>
    </GradientScreen>
  );
};

const $container: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
};
