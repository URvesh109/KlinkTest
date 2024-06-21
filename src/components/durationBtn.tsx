import React from 'react';
import {Box, Text} from '../theme';
import {scale} from 'react-native-size-matters';
import {Pressable, useWindowDimensions} from 'react-native';

type DurationBtnProps = {
  label: string;
  onPress: (item: string) => void;
  selectedBtn: string;
};

export const DurationBtn: React.FC<DurationBtnProps> = props => {
  const {label, onPress, selectedBtn} = props;
  const window = useWindowDimensions();
  const customWidth = window.width / 7.8;

  const textColor = label === selectedBtn ? 'white' : 'lightGrey';
  const backgroundColor = label === selectedBtn ? 'lightBlack' : 'black';

  const onItemPress = () => {
    onPress(label);
  };
  console.log('label selected', label, selectedBtn);
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
