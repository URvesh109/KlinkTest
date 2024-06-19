import React from 'react';
import {Box, Text} from '../theme';
import {Pressable} from 'react-native';
import {scale} from 'react-native-size-matters';
import {SvgProps} from 'react-native-svg';
import {Icons} from '../assets';
import {SortIcons, Sortkey} from './sortByFlatList';

const {CheckedIcon, UncheckedIcon} = Icons;

type SorItemProps = {
  selected: Sortkey;
  iconName: SortIcons;
  label: string;
  labelKey: Sortkey;

  onSelect: () => void;
};

const icons = {
  ListNumIcon: Icons.ListNumIcon,
  DoubleSideArrowIcon: Icons.DoubleSideArrowIcon,
};

const SortItem: React.FC<SorItemProps> = props => {
  const {iconName, label, selected, labelKey} = props;

  const Icon: React.FC<SvgProps> = icons[`${iconName}`];

  const SelectIcon: React.FC<SvgProps> =
    selected === labelKey ? CheckedIcon : UncheckedIcon;

  return (
    <Pressable onPress={() => console.log('On sort item press')}>
      <Box
        paddingHorizontal="l"
        height={scale(60)}
        width={'100%'}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center">
          <Icon width={scale(24)} height={scale(24)} />
          <Text color="white" paddingLeft="m" variant={'sortTitle'}>
            {label}
          </Text>
        </Box>
        <SelectIcon width={scale(24)} height={scale(24)} />
      </Box>
    </Pressable>
  );
};

export default React.memo(SortItem);
