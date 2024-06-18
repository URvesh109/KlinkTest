import React from 'react';
import {Box, Text, CoinIcon, IconName} from '../theme';
import {Pressable} from 'react-native';
import {scale} from 'react-native-size-matters';
import {CoinIdsType, coinNames} from '../types';

type ItemProps = {coinId: CoinIdsType};

// export const ListItem = (coinName: CoinIds) => {
export const ListItem = (props: ItemProps) => {
  const data = coinNames[props.coinId];

  return (
    <Pressable onPress={() => console.log('On list item press')}>
      <Box
        paddingHorizontal="l"
        marginTop="xl"
        height={scale(80)}
        width={'100%'}
        borderWidth={1}
        borderColor="disabledBulletColor"
        borderRadius={scale(12)}
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
    </Pressable>
  );
};
