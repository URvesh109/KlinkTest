import React from 'react';
import {Pressable} from 'react-native';
import {Box, Text} from '../theme';
import {Switch} from './switch';
import {scale} from 'react-native-size-matters';
import {Icons} from '../assets';
import {CoinFlatList} from './coinFlatList';
import BottomDrawer, {BottomDrawerHandle} from './bottomDrawer';

const {SortAscendingIcon} = Icons;

export const Portfolio = () => {
  const bottomDrawerRef = React.useRef<BottomDrawerHandle>(null);

  const onPress = React.useCallback(() => {
    console.log('ONpress for present called');
    bottomDrawerRef.current?.present();
  }, []);

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
        <Pressable onPress={onPress}>
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
      <BottomDrawer ref={bottomDrawerRef} />
    </Box>
  );
};
