import React from 'react';
import {Box, Text} from '../theme';
import {scale} from 'react-native-size-matters';

type NetworkStatusProps = {
  status: boolean;
};

export const NetworkStatus = (props: NetworkStatusProps) => {
  const {status} = props;

  const messsage = status ? 'Back Online' : 'No internet';
  const backgroundColor = status ? 'solanaColor' : 'lightBlack';
  const color = status ? 'lightBlack' : 'lightWhite';

  return (
    <Box
      justifyContent="center"
      alignItems="center"
      marginHorizontal="l"
      backgroundColor={backgroundColor}
      height={scale(30)}
      borderTopStartRadius={10}
      borderTopEndRadius={10}>
      <Text color={color} variant="body">
        {messsage}
      </Text>
    </Box>
  );
};
