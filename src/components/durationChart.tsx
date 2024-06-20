import React from 'react';
import {Box, marginLeft} from '../theme';
import {PointerLabel} from './pointerLabel';
import {DurationBtnList} from './durationBtnList';
import {coinNames} from '../types';

import {Chart} from './chart';
import {scale} from 'react-native-size-matters';
import {useWindowDimensions} from 'react-native';

const DurationChart = () => {
  const data = coinNames['usd-coin'];
  const width = useWindowDimensions().width + 30;
  return (
    <Box marginTop="xl">
      <PointerLabel />
      <Box style={marginLeft} marginTop="xl" width={width} height={scale(140)}>
        <Chart
          color={data.color}
          startFillColor={data.startFillColor}
          endFillColor={data.endFillColor}
          height={scale(140)}
          width={width}
        />
      </Box>
      <DurationBtnList />
    </Box>
  );
};

export default React.memo(DurationChart);
