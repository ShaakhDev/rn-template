import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  View,
  ViewStyle,
  Dimensions,
  Image,
  StatusBar,
  TextStyle,
} from 'react-native';
import {Text, Button} from '@/components';
import {AuthStackParamsList} from 'src/navigators/auth-navigator';
import {GradientScreen} from '@/components';
import {colors, spacing} from '@/theme';
import Carousel, {ICarouselInstance} from 'react-native-reanimated-carousel';
import {useRef, useState} from 'react';
import AnimatedDotsCarousel from 'react-native-animated-dots-carousel';

const items = [
  {
    image: require('/assets/images/1.png'),
    slogan: 'Найти продукты которые вы любите',
  },
  {
    image: require('/assets/images/2.png'),
    slogan: 'Быстрая доставка',
  },
  {
    image: require('/assets/images/3.png'),
    slogan: 'Отслеживать продукт',
  },
];

export const Welcome = ({
  navigation,
}: NativeStackScreenProps<AuthStackParamsList, 'Welcome'>) => {
  const [curPage, setCurPage] = useState<number>(0);
  const carouselRef = useRef<ICarouselInstance>(null);
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  const onSnap = (index: number) => {
    setCurPage(index);
  };

  const onButtonPress = () => {
    if (curPage == 2) {
      navigation.navigate('Signup');
    } else {
      onSnap(curPage + 1);
      carouselRef.current?.next();
    }
  };

  const onLoginPress = () => {
    navigation.navigate('Login');
  };
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.palette.gradient3}
      />
      <GradientScreen contentContainerStyle={$container}>
        <Button
          pressedStyle={$loginBtnPress}
          textStyle={$btnText}
          onPress={onLoginPress}
          style={$loginBtn}>
          <Text size="sm" weight="medium" style={$loginBtnText}>
            Авторизоваться
          </Text>
        </Button>
        <Carousel
          loop={false}
          onSnapToItem={onSnap}
          snapEnabled
          ref={carouselRef}
          width={width}
          height={height / 2}
          style={{marginTop: height / 4 - spacing.xxxl}}
          scrollAnimationDuration={1000}
          data={items}
          renderItem={({index, item}) => {
            return (
              <View style={$carouselItem}>
                <Image source={item?.image} />
                <Text size="lg" style={$text} weight="semiBold">
                  {item?.slogan}
                </Text>
              </View>
            );
          }}
        />

        <View style={$dots}>
          <AnimatedDotsCarousel
            currentIndex={curPage}
            activeIndicatorConfig={{
              color: colors.palette.secondary,
              size: 10,
              opacity: 1,
              margin: 5,
            }}
            inactiveIndicatorConfig={{
              color: colors.palette.neutral100,
              size: 10,
              opacity: 1,
              margin: 5,
            }}
            decreasingDots={[
              {
                config: {
                  color: colors.palette.neutral100,
                  margin: 3,
                  opacity: 0.5,
                  size: 6,
                },
                quantity: 1,
              },
            ]}
            length={items.length}
            maxIndicators={3}
          />
        </View>
        <Button
          pressedStyle={$registerBtnPress}
          onPress={onButtonPress}
          style={$registerBtn}>
          <Text weight="semiBold" style={[$btnText, $text]}>
            {curPage == 2 ? 'Регистрации' : 'Далее'}
          </Text>
        </Button>
      </GradientScreen>
    </>
  );
};

const $container: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  paddingBottom: spacing.xxxl,
  paddingHorizontal: spacing.lg,
};

const $dots: ViewStyle = {
  maxHeight: spacing.xl,
};
const $carouselItem: ViewStyle = {
  flex: 1,
  gap: 80,
  justifyContent: 'flex-start',
  alignItems: 'center',
};

const $text: TextStyle = {
  textAlign: 'center',
};

const $btnText: TextStyle = {
  color: colors.palette.primary,
};

const $registerBtn: ViewStyle = {
  borderWidth: 0,
  width: '100%',
  backgroundColor: colors.palette.secondary,
  borderRadius: spacing.xxl,
  marginTop: 20,
};
const $loginBtn: ViewStyle = {
  borderWidth: 0,
  width: '100%',
  justifyContent: 'flex-end',
  backgroundColor: 'transparent',
};
const $loginBtnText: TextStyle = {
  color: colors.palette.neutral100,
  textAlign: 'right',
};

const $registerBtnPress: ViewStyle = {
  backgroundColor: colors.palette.secondary,
  opacity: 0.9,
};
const $loginBtnPress: ViewStyle = {
  backgroundColor: 'transparent',
};
