import {colors} from '@/theme';
import {ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type GradientScreenProps = {
  children: React.ReactNode;
  contentContainerStyle?: ViewStyle;
};
export const GradientScreen = ({
  children,
  contentContainerStyle,
}: GradientScreenProps) => {
  return (
    <LinearGradient
      style={[$container, contentContainerStyle]}
      colors={[
        colors.palette.gradient3,
        colors.palette.gradient2,
        colors.palette.gradient1,
      ]}>
      {children}
    </LinearGradient>
  );
};

const $container: ViewStyle = {
  flex: 1,
};
