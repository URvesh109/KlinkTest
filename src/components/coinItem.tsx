import React from 'react';
import {useWindowDimensions} from 'react-native';
import {Box, Text, CoinIcon, IconName, marginLeft} from '../theme';
import {Pressable} from 'react-native';
import {scale} from 'react-native-size-matters';
import {CoinIdsType, coinNames} from '../types';
import {Chart} from './chart';
import Animated, {
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

type ItemProps = {
  coinId: CoinIdsType;
  status: boolean;
  onPress: (item: string) => void;
};

export const CoinItem = (props: ItemProps) => {
  const {status, coinId} = props;
  const data = coinNames[coinId];
  const window = useWindowDimensions();

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: withTiming(!status ? 1 : 0, {
        duration: 300,
        easing: Easing.linear,
      }),
      height: withTiming(!status ? 80 : 0, {
        duration: 400,
        easing: Easing.linear,
      }),
      width: window.width,
    };
  }, [status]);

  const onPress = () => {
    props.onPress(coinId as string);
  };

  return (
    <Pressable onPress={onPress}>
      <Box
        marginTop="xl"
        borderWidth={1}
        borderColor="disabledBulletColor"
        borderRadius={scale(12)}>
        <Box
          height={scale(80)}
          paddingHorizontal="l"
          width={'100%'}
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center">
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center">
            <CoinIcon iconName={props.coinId as IconName} />
            <Box paddingLeft="m" width={scale(100)}>
              <Text
                color="white"
                variant={'coinTitle'}
                numberOfLines={1}
                ellipsizeMode="tail">
                {data.expandTitle}
              </Text>
              <Text color="grey" variant="coinBody">
                {data.expandDesc}
              </Text>
            </Box>
          </Box>
          <Box width={scale(127)} alignItems="flex-end">
            <Text
              numberOfLines={1}
              color="white"
              variant={'coinTitle'}
              ellipsizeMode={'tail'}>
              $ 423424.23423
            </Text>
          </Box>
        </Box>
        <Animated.View style={[animatedStyles, marginLeft]} key={'sparkline'}>
          <Chart
            color={data.color}
            startFillColor={data.startFillColor}
            endFillColor={data.endFillColor}
            height={scale(80)}
          />
        </Animated.View>
      </Box>
    </Pressable>
  );
};
