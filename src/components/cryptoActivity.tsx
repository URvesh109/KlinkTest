import React from 'react';
import {Pressable, useWindowDimensions} from 'react-native';
import {Box} from '../theme';
import {Icons} from '../assets';
import {scale} from 'react-native-size-matters';

const {BuyIcon, DepositIcon, SwapIcon, WithdrawIcon} = Icons;

const CryptoActivity = () => {
  const window = useWindowDimensions();

  const customWidth = window.width / 5;

  return (
    <Box
      marginHorizontal="l"
      marginTop="xl"
      flexDirection="row"
      justifyContent="space-between">
      <Pressable onPress={() => console.log('Buy')}>
        <BuyIcon height={scale(40)} width={customWidth} />
      </Pressable>
      <Pressable onPress={() => console.log('deposit')}>
        <DepositIcon height={scale(40)} width={customWidth} />
      </Pressable>
      <Pressable onPress={() => console.log('Swap')}>
        <SwapIcon height={scale(40)} width={customWidth} />
      </Pressable>
      <Pressable onPress={() => console.log('Withdraw')}>
        <WithdrawIcon height={scale(40)} width={customWidth} />
      </Pressable>
    </Box>
  );
};

export default React.memo(CryptoActivity);
