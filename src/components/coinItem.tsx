import React from 'react';
import {useWindowDimensions} from 'react-native';
import {Box, Text, CoinIcon, IconName, marginLeft} from '../theme';
import {Pressable} from 'react-native';
import {scale} from 'react-native-size-matters';
import {CoinData, CoinIdsType, coinNames} from '../types';
import {Chart} from './chart';
import Animated, {
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import {lineDataItem} from 'react-native-gifted-charts';
import {fingNewSparklineRange} from '../utils';

type ItemProps = {
  coinData: CoinData;
  status: boolean;
  onPress: (item: string) => void;
};

export const CoinItem = (props: ItemProps) => {
  const {status, coinData} = props;
  const data = coinNames[coinData.id as CoinIdsType];
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
    props.onPress(coinData.id);
  };

  let high_7d = Math.max(...coinData.sparkline_in_7d.price);
  let low_7d = Math.min(...coinData.sparkline_in_7d.price);

  let sparklineData: Array<lineDataItem> = React.useMemo(() => {
    return coinData.sparkline_in_7d.price.map(item => {
      return {
        value: item,
      };
    });
  }, [coinData]);

  const result = fingNewSparklineRange({low: low_7d, high: high_7d});

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
            <CoinIcon iconName={coinData.id as IconName} />
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
              {'$' + coinData.current_price}
            </Text>
          </Box>
        </Box>
        <Animated.View style={[animatedStyles, marginLeft]} key={'sparkline'}>
          <Chart
            data={sparklineData}
            color={data.color}
            startFillColor={data.startFillColor}
            endFillColor={data.endFillColor}
            height={scale(80)}
            yAxisOffset={result.yAxisOffset || 1}
            stepValue={result.stepValue || 1}
            noOfSections={result.noOfSections || 1}
            roundToDigits={3}
          />
        </Animated.View>
      </Box>
    </Pressable>
  );
};
