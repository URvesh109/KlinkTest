import React from 'react';
import {FlatList} from 'react-native';
import {CoinItem} from './coinItem';
import {coinIds} from '../apis';
import {CoinIdsType} from '../types';
import {useRecoilValue} from 'recoil';
import {collapseState} from '../atoms';
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
  const renderItem = React.useCallback(
    ({item}: {item: CoinIdsType}) => {
      return <CoinItem key={item} coinId={item} status={isCollapse} />;
    },
    [isCollapse],
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
