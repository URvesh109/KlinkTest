import React from 'react';
import {Box} from '../theme';
import {PointerLabel} from './pointerLabel';
import {DurationBtnList} from './durationBtnList';

const DurationChart = () => {
  return (
    <Box marginHorizontal="l" marginTop="xl">
      <PointerLabel />
      <DurationBtnList />
    </Box>
  );
};

export default React.memo(DurationChart);
