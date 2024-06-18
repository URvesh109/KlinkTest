import React, {FC} from 'react';
import {ScrollView as SV, ScrollViewProps} from 'react-native';
import {
  createRestyleComponent,
  VariantProps,
  createVariant,
} from '@shopify/restyle';
import {Theme} from './theme';

const BaseScrollView = createRestyleComponent<
  VariantProps<Theme, 'scrollViewVariants'> & ScrollViewProps,
  Theme
>([createVariant({themeKey: 'scrollViewVariants'})], SV);

type Props = React.ComponentProps<typeof BaseScrollView>;

export const ScrollView: FC<Props> = props => {
  const {children, ...rest} = props;
  return <BaseScrollView {...rest}>{children}</BaseScrollView>;
};
