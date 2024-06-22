import React from 'react';
import {Box, loadingViewStyle, marginLeft, palette} from '../theme';
import {PointerDate} from './pointerDate';
import {DurationBtnList} from './durationBtnList';
import {PointerComponent} from './pointerComponent';
import {PointerLabelComponent} from './pointerLabelComponent';
import {coinNames} from '../types';
import {useRecoilValue} from 'recoil';
import {Chart} from './chart';
import {scale} from 'react-native-size-matters';
import {ActivityIndicator, useWindowDimensions} from 'react-native';
import {lineDataItem} from 'react-native-gifted-charts';
import {
  bitcoinMarketChartState,
  bitcoinChartIndicatorState,
  coinListState,
} from '../atoms';
import {fingNewSparklineRange} from '../utils';

const DurationChart = () => {
  const data = coinNames.bitcoin;
  const width = useWindowDimensions().width + 30;
  const bitcoinMarketChart = useRecoilValue(bitcoinMarketChartState);
  const isLoading = useRecoilValue(bitcoinChartIndicatorState);
  const coinList = useRecoilValue(coinListState);

  const bitcoinData = coinList.find(item => item.id === 'bitcoin');

  const renderPointerComponent = () => (
    <PointerComponent backgroundColor={data.color} />
  );

  const renderPointerLabelComponent = (items: any) => (
    <PointerLabelComponent items={items} />
  );

  let prices = bitcoinMarketChart.prices.map(item => item[1]);

  let high = Math.max(...prices);
  let low = Math.min(...prices);

  let sparklineData: Array<lineDataItem> = React.useMemo(() => {
    return bitcoinMarketChart.prices.map(item => {
      return {
        value: item[1],
        date: item[0],
      };
    });
  }, [bitcoinMarketChart]);

  const result = fingNewSparklineRange({low, high});

  return (
    <Box marginTop="xl">
      {bitcoinData?.current_price ? (
        <PointerDate
          lastPrice={sparklineData[0].value}
          currentPrice={bitcoinData?.current_price}
        />
      ) : null}
      <Box style={marginLeft} marginTop="xl" width={width} height={scale(140)}>
        <Chart
          data={sparklineData}
          color={data.color}
          startFillColor={data.startFillColor}
          endFillColor={data.endFillColor}
          height={scale(140)}
          thickness={2}
          width={width}
          adjustToWidth
          yAxisOffset={result.yAxisOffset || 1}
          stepValue={result.stepValue || 1}
          noOfSections={result.noOfSections || 1}
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
      {isLoading ? (
        <Box
          backgroundColor="lightBackgroundIndicator"
          style={[loadingViewStyle]}>
          <Box flex={1} justifyContent="center" alignItems="center">
            <ActivityIndicator size={'large'} color={palette.lightWhite} />
          </Box>
        </Box>
      ) : null}
    </Box>
  );
};

export default React.memo(DurationChart);
