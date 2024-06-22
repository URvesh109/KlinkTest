import React from 'react';
import {DurationBtn} from './durationBtn';
import {Box} from '../theme';
import {useRecoilState, useSetRecoilState} from 'recoil';
import {
  durationBtnState,
  bitcoinChartIndicatorState,
  messageState,
  bitcoinMarketChartState,
} from '../atoms';
import {fetchBitcoinChart} from '../apis';
import dayjs from 'dayjs';

const btnList = ['1D', '1W', '1M', '3M', '1Y', 'All'];

export const DurationBtnList = () => {
  const [selectedBtn, setDurationBtn] = useRecoilState(durationBtnState);
  const setIndicator = useSetRecoilState(bitcoinChartIndicatorState);
  const setMessage = useSetRecoilState(messageState);

  const setBitcoinMarketChart = useSetRecoilState(bitcoinMarketChartState);

  const fetchAsPerDuration = React.useCallback(
    (label: string) => {
      async function fetchChart() {
        try {
          let num = Number(label.charAt(0));
          let validate = label.charAt(1).toLowerCase();
          let unitType =
            validate === 'm' ? 'M' : (validate as dayjs.ManipulateType);
          setIndicator(true);
          const data = await fetchBitcoinChart({
            from: dayjs().subtract(num, unitType).unix(),
          });
          setBitcoinMarketChart(data);
        } catch (error) {
          setMessage({type: 'error', info: String(error), visible: true});
        } finally {
          setIndicator(false);
        }
      }
      fetchChart();
    },
    [setBitcoinMarketChart, setMessage, setIndicator],
  );

  const onPress = React.useCallback(
    (item: string) => {
      if (item !== 'All') {
        setDurationBtn(item);
        fetchAsPerDuration(item);
      } else {
        setMessage({
          visible: true,
          info: 'Access to historical data via the Public API (Demo plan) is restricted to the past 365 days only.',
          type: 'success',
        });
      }
    },
    [setDurationBtn, fetchAsPerDuration, setMessage],
  );

  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      marginTop="l"
      marginHorizontal="l">
      {btnList.map(item => (
        <DurationBtn
          key={item}
          label={item}
          onPress={onPress}
          selectedBtn={selectedBtn}
        />
      ))}
    </Box>
  );
};
