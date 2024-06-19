import React, {FC} from 'react';
import {
  Pressable as Press,
  PressableProps,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {
  ColorProps,
  createRestyleComponent,
  VariantProps,
  createVariant,
} from '@shopify/restyle';
import {Text} from './text';
import {Box} from './box';
import {Theme} from './theme';

import {Icons} from '../assets';
import {scale} from 'react-native-size-matters';
import {SvgProps} from 'react-native-svg';

const icons = {
  SwapIcon: Icons.SwapIcon,
  CardIcon: Icons.DoubleSideArrowIcon,
  DepositIcon: Icons.DepositIcon,
  WithdrawIcon: Icons.WithdrawIcon,
};

const BaseButton = createRestyleComponent<
  VariantProps<Theme, 'pressableVariants'> & PressableProps,
  Theme
>([createVariant({themeKey: 'pressableVariants'})], Press);

type IconName = keyof typeof icons;

type Props = React.ComponentProps<typeof BaseButton> &
  ColorProps<Theme> & {
    label: string;
    buttonStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    iconName: IconName;
    iconWidth: number;
    iconHeight: number;
  };

export const Pressable: FC<Props> = props => {
  const {
    variant,
    iconWidth,
    iconHeight,
    buttonStyle,
    label,
    iconName,
    textStyle,
    ...rest
  } = props;
  const Icon: React.FC<SvgProps> = icons[`${iconName}`];

  return (
    <BaseButton {...rest} style={[buttonStyle]}>
      <Box
        height={scale(40)}
        flex={0.2}
        justifyContent="center"
        alignItems="center">
        <Icon width={scale(iconWidth)} height={scale(iconHeight)} />
        <Text variant={variant} style={[textStyle]} paddingLeft="m">
          {label}
        </Text>
      </Box>
    </BaseButton>
  );
};
