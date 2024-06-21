import React from 'react';
import {Box, marginLeft} from '../theme';
import {PointerDate} from './pointerDate';
import {DurationBtnList} from './durationBtnList';
import {PointerComponent} from './pointerComponent';
import {PointerLabelComponent} from './pointerLabelComponent';
import {coinNames} from '../types';

import {Chart} from './chart';
import {scale} from 'react-native-size-matters';
import {useWindowDimensions} from 'react-native';
import {lineDataItem} from 'react-native-gifted-charts';

const DurationChart = () => {
  const data = coinNames['usd-coin'];
  const width = useWindowDimensions().width + 30;

  const renderPointerComponent = () => (
    <PointerComponent backgroundColor={data.color} />
  );

  const renderPointerLabelComponent = (items: any) => (
    <PointerLabelComponent items={items} />
  );

  let priceData: Array<lineDataItem> = prices.map(item => {
    return {
      value: item[1],
      date: item[0],
    };
  });

  return (
    <Box marginTop="xl">
      <PointerDate />
      <Box style={marginLeft} marginTop="xl" width={width} height={scale(140)}>
        <Chart
          data={priceData}
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

const prices = [
  [1718694203426, 136],
  [1718698153177, 137],
  [1718701237527, 138],
  [1718704869379, 138],
  [1718708520346, 138],
  [1718712152902, 137],
  [1718715661285, 136],
  [1718719715923, 134],
  [1718723235741, 135],
  [1718726963341, 135],
  [1718730166605, 134],
  [1718733643911, 233],
  [1718737294055, 132],
  [1718741014162, 132],
  [1718744666786, 137],
  [1718748508186, 137],
  [1718751670207, 137],
  [1718755429999, 137],
  [1718758842438, 138],
  [1718762743951, 138],
  [1718766544661, 139],
  [1718769604238, 140],
  [1718773231449, 140],
  [1718777075056, 140],
];
