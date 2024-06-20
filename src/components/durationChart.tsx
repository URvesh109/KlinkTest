import React from 'react';
import {Box, marginLeft} from '../theme';
import {PointerLabel} from './pointerLabel';
import {DurationBtnList} from './durationBtnList';
import {PointerComponent} from './pointerComponent';
import {PointerLabelComponent} from './pointerLabelComponent';
import {coinNames} from '../types';

import {Chart} from './chart';
import {scale} from 'react-native-size-matters';
import {useWindowDimensions} from 'react-native';

const DurationChart = () => {
  const data = coinNames['usd-coin'];
  const width = useWindowDimensions().width + 30;

  const renderPointerComponent = () => (
    <PointerComponent backgroundColor={data.color} />
  );

  const renderPointerLabelComponent = (items: any) => (
    <PointerLabelComponent items={items} />
  );

  return (
    <Box marginTop="xl">
      <PointerLabel />
      <Box style={marginLeft} marginTop="xl" width={width} height={scale(140)}>
        <Chart
          color={data.color}
          startFillColor={data.startFillColor}
          endFillColor={data.endFillColor}
          height={scale(140)}
          thickness={2}
          width={width}
          pointerConfig={{
            pointerStripHeight: scale(140),
            pointerStripColor: 'green',
            pointerStripWidth: 4,
            pointerComponent: renderPointerComponent,
            pointerLabelWidth: 0,
            autoAdjustPointerLabelPosition: true,
            pointerLabelComponent: renderPointerLabelComponent,
          }}
        />
      </Box>
      <DurationBtnList />
    </Box>
  );
};

export default React.memo(DurationChart);
