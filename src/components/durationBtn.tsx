import React from 'react';
import {Box, Text} from '../theme';
import {scale} from 'react-native-size-matters';
import {Pressable, useWindowDimensions} from 'react-native';
import {useRecoilValue} from 'recoil';
import {durationBtnState} from '../atoms';

type DurationBtnProps = {
  label: string;
  onPress: (item: string) => void;
};

const DurationBtn: React.FC<DurationBtnProps> = props => {
  const selectedBtn = useRecoilValue(durationBtnState);
  const {label, onPress} = props;
  const window = useWindowDimensions();
  const customWidth = window.width / 7.8;

  const textColor = label === selectedBtn ? 'white' : 'lightGrey';
  const backgroundColor = label === selectedBtn ? 'lightBlack' : 'black';

  const onItemPress = () => {
    onPress(label);
  };

  return (
    <Pressable onPress={onItemPress}>
      <Box
        height={scale(24)}
        width={customWidth}
        borderWidth={1}
        borderRadius={4}
        backgroundColor={backgroundColor}
        justifyContent="center"
        alignItems="center"
        borderColor="lightBlack">
        <Text color={textColor} variant="coinBody">
          {label}
        </Text>
      </Box>
    </Pressable>
  );
};

export default React.memo(DurationBtn);
