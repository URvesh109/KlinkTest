import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import SortItem from './sortItem';
import {Box} from '../theme';

export type Sortkey = 'value' | 'a-z' | 'z-a';
export type SortIcons = 'ListNumIcon' | 'DoubleSideArrowIcon';

type SortDataProps = {
  iconName: SortIcons;
  label: string;
  labelKey: Sortkey;
};

const data: Array<SortDataProps> = [
  {iconName: 'ListNumIcon', label: 'Value', labelKey: 'value'},
  {iconName: 'DoubleSideArrowIcon', label: 'A-Z', labelKey: 'a-z'},
  {iconName: 'DoubleSideArrowIcon', label: 'Z-A', labelKey: 'z-a'},
];

export const SortByFlatList = () => {
  const itemSeparator = React.useCallback(() => {
    return (
      <Box
        borderWidth={StyleSheet.hairlineWidth}
        borderColor="lightBlack"
        marginHorizontal="l"
      />
    );
  }, []);

  const renderItem = React.useCallback(({item}: {item: SortDataProps}) => {
    return (
      <React.Fragment key={item.labelKey}>
        <SortItem
          iconName={item.iconName}
          label={item.label}
          selected={'value'}
          labelKey={item.labelKey}
          onSelect={() => {}}
        />
      </React.Fragment>
    );
  }, []);

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.labelKey}
      scrollEnabled={false}
      ItemSeparatorComponent={itemSeparator}
    />
  );
};
