import React from 'react';
import {Pressable} from 'react-native';
import {Box, Text} from '../theme';
import {Switch} from './switch';
import {scale} from 'react-native-size-matters';
import {Icons} from '../assets';
import {CoinFlatList} from './coinFlatList';

const {SortAscendingIcon} = Icons;

export const Portfolio = () => {
  return (
    <Box marginHorizontal="l" marginVertical="xxl">
      <Text color="white" variant="header">
        Portfolio
      </Text>
      <Pressable onPress={() => console.log('On press')}>
        <Box
          marginTop="m"
          justifyContent="space-between"
          flexDirection="row"
          alignItems="center">
          <Switch />
          <Box
            height={scale(32)}
            width={scale(60)}
            justifyContent="flex-end"
            flexDirection="row"
            alignItems="center">
            <Text variant="body" color="grey">
              Sort
            </Text>
            <SortAscendingIcon width={scale(28)} height={scale(28)} />
          </Box>
        </Box>
      </Pressable>
      <CoinFlatList />
    </Box>
  );
};
