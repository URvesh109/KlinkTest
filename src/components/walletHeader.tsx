import React from 'react';
import {LayoutChangeEvent, Pressable, useWindowDimensions} from 'react-native';
import {Box, Text} from '../theme';
import {Icons} from '../assets';
import {scale} from 'react-native-size-matters';
import {getBalance} from '../utils';
import {useSetRecoilState} from 'recoil';
import {messageState} from '../atoms';

const {BellIcon} = Icons;

const WalletHeader = () => {
  const splitBalance = getBalance(11212.113);
  const [decimalView, setDecimalView] = React.useState(true);
  const window = useWindowDimensions();
  const setMessageState = useSetRecoilState(messageState);

  const onPress = () => {
    setMessageState({
      visible: true,
      info: 'Coming soon!',
      type: 'success',
    });
  };

  /**
   * Logic to hide display decimal point if the balance text width is more than
   * mobile device screen size.
   */
  const onLayoutchange = React.useCallback(
    (e: LayoutChangeEvent) => {
      const layoutWidth = e.nativeEvent.layout.width;
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
        <Pressable onPress={onPress}>
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
        <Text marginTop="sm" variant="dollarAndDecimal">
          $
        </Text>
        <Box width={window.width - 50} flexDirection="row">
          <Text onLayout={onLayoutchange} variant="balance" numberOfLines={1}>
            {splitBalance[0]}
          </Text>
          {decimalView ? (
            <Text variant="dollarAndDecimal" marginTop="sm">
              .{splitBalance[1]}
            </Text>
          ) : null}
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(WalletHeader);
