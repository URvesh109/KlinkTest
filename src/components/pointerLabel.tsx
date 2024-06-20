import React from 'react';
import {Box, Text} from '../theme';
import {Icons} from '../assets';
import {scale} from 'react-native-size-matters';

const {UpArrowIcon, InverArrowIcon} = Icons;

export const PointerLabel = () => {
  const [positive, setPositive] = React.useState(true);

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
        12%
      </Text>
      <Text variant="coinBody" paddingLeft="sm">
        Wed, Jun 14, 23:00
      </Text>
    </Box>
  );
};
