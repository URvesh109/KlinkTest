import React from 'react';
import {Box, Text} from '../theme';
import {Icons} from '../assets';
import {scale} from 'react-native-size-matters';
import {useRecoilValue} from 'recoil';
import {pointerDateState} from '../atoms';

const {UpArrowIcon, InverArrowIcon} = Icons;

type PointerDate = {
  lastPrice: number;
  currentPrice: number;
};

export const PointerDate: React.FC<PointerDate> = props => {
  const {currentPrice, lastPrice} = props;
  const date = useRecoilValue(pointerDateState);

  const percentage = ((currentPrice - lastPrice) * 100) / currentPrice;
  const positive = percentage >= 0;

  const color = positive ? 'green' : 'dotColor';

  return (
    <Box flexDirection="row" alignItems="center" marginHorizontal="l">
      {positive ? (
        <UpArrowIcon width={scale(16)} height={scale(16)} />
      ) : (
        <InverArrowIcon
          width={scale(16)}
          height={scale(16)}
          transform={[{rotate: '-180deg'}]}
        />
      )}
      <Text variant="body" color={color}>
        {percentage.toFixed(2)}
      </Text>
      {date ? (
        <Text variant="coinBody" paddingLeft="sm">
          {date}
        </Text>
      ) : null}
    </Box>
  );
};
