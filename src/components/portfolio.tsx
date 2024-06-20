import React from 'react';
import {Pressable} from 'react-native';
import {Box, Text} from '../theme';
import {Switch} from './switch';
import {scale} from 'react-native-size-matters';
import {Icons} from '../assets';
import {CoinFlatList} from './coinFlatList';
import BottomDrawer, {BottomDrawerPresentHandle} from './bottomDrawer';

const {SortAscendingIcon} = Icons;

export const Portfolio = () => {
  const bottomDrawerRef = React.useRef<BottomDrawerPresentHandle>(null);
  return (
    <Box marginHorizontal="l" marginVertical="xl">
      <Text color="white" variant="header">
        Portfolio
      </Text>
      <Box
        marginTop="m"
        justifyContent="space-between"
        flexDirection="row"
        alignItems="center">
        <Switch />
        <Pressable onPress={() => bottomDrawerRef.current?.present()}>
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
        </Pressable>
      </Box>
      <CoinFlatList />
      <BottomDrawer selected="fun" ref={bottomDrawerRef} />
    </Box>
  );
};
