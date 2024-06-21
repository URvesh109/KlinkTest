import React from 'react';
import {Pressable, useWindowDimensions} from 'react-native';
import {Box} from '../theme';
import {Icons} from '../assets';
import {scale} from 'react-native-size-matters';
import {useSetRecoilState} from 'recoil';
import {messageState} from '../atoms';

const {BuyIcon, DepositIcon, SwapIcon, WithdrawIcon} = Icons;

const CryptoActivity = () => {
  const window = useWindowDimensions();
  const setMessage = useSetRecoilState(messageState);

  const customWidth = window.width / 5;

  const onPress = () => {
    setMessage({
      visible: true,
      info: 'Coming soon!',
      type: 'success',
    });
  };

  return (
    <Box
      marginHorizontal="l"
      marginTop="xl"
      flexDirection="row"
      justifyContent="space-between">
      <Pressable onPress={onPress}>
        <BuyIcon height={scale(40)} width={customWidth} />
      </Pressable>
      <Pressable onPress={onPress}>
        <DepositIcon height={scale(40)} width={customWidth} />
      </Pressable>
      <Pressable onPress={onPress}>
        <SwapIcon height={scale(40)} width={customWidth} />
      </Pressable>
      <Pressable onPress={onPress}>
        <WithdrawIcon height={scale(40)} width={customWidth} />
      </Pressable>
    </Box>
  );
};

export default React.memo(CryptoActivity);
