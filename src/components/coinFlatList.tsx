import React from 'react';
import {FlatList} from 'react-native';
import {CoinItem} from './coinItem';
import {CoinData} from '../types';
import {useRecoilValue} from 'recoil';
import {collapseState, sortedCoinListState} from '../atoms';
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
  const sortedCoinList = useRecoilValue(sortedCoinListState);

  const renderItem = React.useCallback(
    ({item}: {item: CoinData}) => {
      return <CoinItem key={item.id} coinData={item} status={isCollapse} />;
    },
    [isCollapse],
  );

  return (
    <FlatList
      data={sortedCoinList}
      renderItem={renderItem}
      scrollEnabled={false}
      ListEmptyComponent={EmptyComponent}
    />
  );
};
