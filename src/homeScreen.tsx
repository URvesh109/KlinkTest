import React from 'react';
import {Portfolio} from './components';
import CryptoActivity from './components/cryptoActivity';
import WalletHeader from './components/walletHeader';
import DurationChart from './components/durationChart';
import {palette, ScrollView} from './theme';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {
  loadingState,
  messageState,
  coinListState,
  bitcoinMarketChartState,
  durationBtnState,
} from './atoms';
import {fetchBitcoinChart, fetchCoinList} from './apis';
import {RefreshControl, StyleSheet} from 'react-native';
import {extractNumAndUnitType} from './utils';
import dayjs from 'dayjs';

const Home = () => {
  const setLoading = useSetRecoilState(loadingState);
  const setErrorMessage = useSetRecoilState(messageState);
  const [refreshing, setRefreshing] = React.useState(false);
  const setCoinList = useSetRecoilState(coinListState);
  const setBitcoinMarketChart = useSetRecoilState(bitcoinMarketChartState);
  const durationBtn = useRecoilValue(durationBtnState);

  const onRefresh = React.useCallback(() => {
    async function fetch() {
      try {
        setRefreshing(true);
        const data = await fetchCoinList();
        setCoinList(data);
        const {unitType, num} = extractNumAndUnitType(durationBtn);
        const bitcoinMarketData = await fetchBitcoinChart({
          from: dayjs().subtract(num, unitType).unix(),
        });
        setBitcoinMarketChart(bitcoinMarketData);
      } catch (error) {
        setErrorMessage({type: 'error', info: String(error), visible: true});
      } finally {
        setRefreshing(false);
      }
    }
    fetch();
  }, [
    setCoinList,
    setRefreshing,
    setErrorMessage,
    setBitcoinMarketChart,
    durationBtn,
  ]);

  React.useEffect(() => {
    async function fetch() {
      try {
        setLoading(true);
        const bitcoinMarketData = await fetchBitcoinChart({});
        setBitcoinMarketChart(bitcoinMarketData);
        const data = await fetchCoinList();
        setCoinList(data);
      } catch (error) {
        setErrorMessage({type: 'error', info: String(error), visible: true});
      } finally {
        setLoading(false);
      }
    }
    fetch();
  }, [setLoading, setCoinList, setErrorMessage, setBitcoinMarketChart]);

  return (
    <BottomSheetModalProvider>
      <ScrollView
        nestedScrollEnabled={false}
        refreshControl={
          <RefreshControl
            tintColor={palette.white}
            style={styles.indicatorBackgroundColor}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }>
        <WalletHeader />
        <DurationChart />
        <CryptoActivity />
        <Portfolio />
      </ScrollView>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  indicatorBackgroundColor: {
    backgroundColor: 'transparent',
  },
});

export default Home;
