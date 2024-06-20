import React from 'react';
import {LayoutChangeEvent, Pressable, useWindowDimensions} from 'react-native';
import {Box, Text} from '../theme';
import {Icons} from '../assets';
import {scale} from 'react-native-size-matters';
import {getBalance} from '../utils';

const {BellIcon} = Icons;

const WalletHeader = () => {
  const splitBalance = getBalance(121222);
  const [decimalView, setDecimalView] = React.useState(true);
  const window = useWindowDimensions();
  console.log('split', splitBalance[0]);

  /**
   * Logic to do display decimal point if the balance text is more than
   * mobile device screen size.
   */

  const onLayoutchange = React.useCallback(
    (e: LayoutChangeEvent) => {
      const layoutWidth = e.nativeEvent.layout.width;
      console.log('layout', layoutWidth, window.width);
      if (layoutWidth >= window.width - 80) {
        setDecimalView(false);
      } else {
        setDecimalView(true);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [splitBalance.toString()],
  );

  return (
    <Box marginHorizontal="l" marginTop="xl">
      <Box
        alignItems="center"
        flexDirection="row"
        justifyContent="space-between">
        <Text variant="header">Wallet Balance</Text>
        <Pressable onPress={() => console.log('On notification pressed')}>
          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="flex-end">
            <BellIcon height={scale(24)} width={scale(24)} />
            <Text color="lightBlue" variant="notification" paddingLeft="s">
              Notifications
            </Text>
          </Box>
        </Pressable>
      </Box>
      <Box marginTop="m" flexDirection="row" alignItems="flex-start">
        <Text marginTop="m" variant="dollarAndDecimal">
          $
        </Text>
        <Box width={window.width - 50} flexDirection="row">
          <Text onLayout={onLayoutchange} variant="balance" numberOfLines={1}>
            {splitBalance[0]}
          </Text>
          {decimalView ? (
            <Text variant="dollarAndDecimal" marginTop="m">
              .{splitBalance[1]}
            </Text>
          ) : null}
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(WalletHeader);
