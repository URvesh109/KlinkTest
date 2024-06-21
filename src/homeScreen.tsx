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
  coinSelectionState,
  coinListState,
} from './atoms';
import {fetchCoinList} from './apis';
import {RefreshControl, StyleSheet} from 'react-native';

const Home = () => {
  const setLoading = useSetRecoilState(loadingState);
  const isCoinSelected = useRecoilValue(coinSelectionState);
  const setErrorMessage = useSetRecoilState(messageState);
  const [refreshing, setRefreshing] = React.useState(false);
  const setCoinList = useSetRecoilState(coinListState);

  const onRefresh = React.useCallback(() => {
    async function fetch() {
      try {
        setRefreshing(true);
        const data = await fetchCoinList();
        setCoinList(data);
      } catch (error) {
        setErrorMessage({type: 'error', info: String(error), visible: true});
      } finally {
        setRefreshing(false);
      }
    }
    fetch();
  }, [setCoinList, setRefreshing, setErrorMessage]);

  React.useEffect(() => {
    async function fetch() {
      try {
        setLoading(true);
        const data = await fetchCoinList();
        setCoinList(data);
      } catch (error) {
        setErrorMessage({type: 'error', info: String(error), visible: true});
      } finally {
        setLoading(false);
      }
    }
    fetch();
  }, [setLoading, setCoinList, setErrorMessage]);

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
        {isCoinSelected ? <DurationChart /> : null}
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
