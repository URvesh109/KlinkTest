import React from 'react';
import {ViewStyle, TextStyle} from 'react-native';
import {Box, Text} from '../theme';
import {scale} from 'react-native-size-matters';
import dayjs from 'dayjs';
import {useSetRecoilState} from 'recoil';
import {pointerDateState} from '../atoms';

const pointerContainerStyle: ViewStyle = {
  height: scale(21),
  width: scale(42),
  justifyContent: 'center',
  marginTop: scale(5),
  marginLeft: scale(-50),
};

const pointerLabelStyle: ViewStyle = {
  paddingHorizontal: scale(8),
  paddingVertical: scale(4),
  borderRadius: scale(40),
};

const labelStyle: TextStyle = {
  fontSize: 10,
  textAlign: 'center',
};

export const PointerLabelComponent: React.FC<any> = props => {
  const setPointerDate = useSetRecoilState(pointerDateState);
  const {items} = props;
  let value = '';
  let date = '';
  if (items.length) {
    value = items[0].value;
    date = dayjs(items[0].date).format('ddd, MMM DD, HH:MM');
  }

  React.useLayoutEffect(() => {
    setPointerDate(date);
  }, [date, setPointerDate]);

  return (
    <Box style={pointerContainerStyle}>
      <Box backgroundColor="white" style={pointerLabelStyle}>
        <Text color="black" style={labelStyle} numberOfLines={1}>
          {'$' + value}
        </Text>
      </Box>
    </Box>
  );
};
