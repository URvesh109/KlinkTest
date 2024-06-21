import React from 'react';
import {FlatList} from 'react-native';
import {CoinItem} from './coinItem';
import {coinIds} from '../apis';
import {CoinIdsType} from '../types';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {collapseState, coinSelectionState} from '../atoms';
import {Box, Text} from '../theme';

const EmptyComponent = () => {
  return (
    <Box justifyContent="center" alignItems="center" marginTop="xxl">
      <Text color="disabledBulletColor"> No data</Text>
    </Box>
  );
};

export const CoinFlatList = () => {
  const isCollapse = useRecoilValue(collapseState);
  const setCoinSelection = useSetRecoilState(coinSelectionState);

  const onPress = React.useCallback(
    (item: string) => {
      setCoinSelection(item);
    },
    [setCoinSelection],
  );

  const renderItem = React.useCallback(
    ({item}: {item: CoinIdsType}) => {
      return (
        <CoinItem
          onPress={onPress}
          key={item}
          coinId={item}
          status={isCollapse}
        />
      );
    },
    [isCollapse, onPress],
  );

  return (
    <FlatList
      data={coinIds}
      renderItem={renderItem}
      keyExtractor={item => item}
      scrollEnabled={false}
      ListEmptyComponent={EmptyComponent}
    />
  );
};
