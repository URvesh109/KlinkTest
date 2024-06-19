import React from 'react';
import {ViewStyle} from 'react-native';
import {Box, Text, CoinIcon, IconName} from '../theme';
import {Pressable} from 'react-native';
import {scale} from 'react-native-size-matters';
import {CoinIdsType, coinNames} from '../types';
import {Chart} from './chart';

/**
 * LineChart is missing left and marginLeft alignment style and props, so
 * added marginLeft to fit it nicely in the box.
 */
const marginLeft: ViewStyle = {
  marginLeft: -scale(25),
};

type ItemProps = {coinId: CoinIdsType; status: boolean};

export const CoinItem = (props: ItemProps) => {
  const data = coinNames[props.coinId];

  return (
    <Pressable onPress={() => console.log('On list item press')}>
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
        {!props.status && (
          <Box height={scale(80)} style={marginLeft}>
            <Chart
              color={data.color}
              startFillColor={data.startFillColor}
              endFillColor={data.endFillColor}
            />
          </Box>
        )}
      </Box>
    </Pressable>
  );
};
