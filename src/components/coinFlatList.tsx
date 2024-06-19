import React from 'react';
import {FlatList} from 'react-native';
import {CoinItem} from './coinItem';
import {coinIds} from '../apis';
import {CoinIdsType} from '../types';

export const CoinFlatList = () => {
  const renderItem = React.useCallback(({item}: {item: CoinIdsType}) => {
    return (
      <React.Fragment key={item}>
        <CoinItem coinId={item} />
      </React.Fragment>
    );
  }, []);

  return (
    <FlatList
      data={coinIds}
      renderItem={renderItem}
      keyExtractor={item => item}
      scrollEnabled={false}
    />
  );
};
