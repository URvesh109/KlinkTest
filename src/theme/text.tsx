import * as React from 'react';
import {createText} from '@shopify/restyle';
import {Theme} from './theme';

const RnText = createText<Theme>();

type TextProps = React.ComponentProps<typeof RnText>;

export const Text = (props: TextProps) => {
  const {children, style: styleOverride, ...rest} = props;

  return (
    <RnText
      maxFontSizeMultiplier={1.2}
      allowFontScaling={false}
      {...rest}
      style={styleOverride}>
      {children}
    </RnText>
  );
};
