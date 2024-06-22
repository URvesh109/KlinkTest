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
  onSelect: (label: Sortkey) => void;
};

const icons = {
  ListNumIcon: Icons.ListNumIcon,
  DoubleSideArrowIcon: Icons.DoubleSideArrowIcon,
};

export const SortItem: React.FC<SorItemProps> = React.memo(
  props => {
    const {iconName, label, selected, onSelect} = props;

    const Icon: React.FC<SvgProps> = icons[`${iconName}`];

    const SelectIcon: React.FC<SvgProps> =
      selected === label ? CheckedIcon : UncheckedIcon;

    const onPress = () => {
      onSelect(label as Sortkey);
    };

    return (
      <Pressable onPress={onPress}>
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
  },
  (prevProps, nextProps) => {
    /**
     * Only re-render for the prev selected item and the current selected item.
     * So the list will render only two times.
     */
    if (
      prevProps.selected === prevProps.label ||
      nextProps.selected === nextProps.label
    ) {
      return false;
    } else {
      return true;
    }
  },
);
