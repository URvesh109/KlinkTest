import React from 'react';
import DurationBtn from './durationBtn';
import {Box} from '../theme';
import {useSetRecoilState} from 'recoil';
import {durationBtnState} from '../atoms';

const btnList = ['1D', '1W', '1M', '3M', '1Y', 'All'];

export const DurationBtnList = () => {
  const setDurationBtn = useSetRecoilState(durationBtnState);

  const onPress = (item: string) => {
    setDurationBtn(item);
  };

  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      marginTop="l"
      marginHorizontal="l">
      {btnList.map(item => (
        <DurationBtn key={item} label={item} onPress={onPress} />
      ))}
    </Box>
  );
};
