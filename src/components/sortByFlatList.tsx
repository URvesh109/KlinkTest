import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {SortItem} from './sortItem';
import {Box} from '../theme';
import {sortSelectionState} from '../atoms';
import {useRecoilState} from 'recoil';

export type Sortkey = 'Value' | 'A-Z' | 'Z-A';
export type SortIcons = 'ListNumIcon' | 'DoubleSideArrowIcon';

type SortDataProps = {
  iconName: SortIcons;
  label: string;
};

const data: Array<SortDataProps> = [
  {iconName: 'ListNumIcon', label: 'Value'},
  {iconName: 'DoubleSideArrowIcon', label: 'A-Z'},
  {iconName: 'DoubleSideArrowIcon', label: 'Z-A'},
];

export const SortByFlatList = () => {
  const [selectedSort, setSortSelection] = useRecoilState(sortSelectionState);

  const onPress = React.useCallback(
    (item: Sortkey) => {
      setSortSelection(item);
    },
    [setSortSelection],
  );

  const itemSeparator = React.useCallback(() => {
    return (
      <Box
        borderWidth={StyleSheet.hairlineWidth}
        borderColor="lightBlack"
        marginHorizontal="l"
      />
    );
  }, []);

  const renderItem = React.useCallback(
    ({item}: {item: SortDataProps}) => {
      return (
        <SortItem
          key={item.label}
          iconName={item.iconName}
          label={item.label}
          selected={selectedSort}
          onSelect={onPress}
        />
      );
    },
    [onPress, selectedSort],
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.label}
      scrollEnabled={false}
      ItemSeparatorComponent={itemSeparator}
    />
  );
};
