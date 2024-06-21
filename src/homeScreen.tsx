import React from 'react';
import {Portfolio} from './components';
import CryptoActivity from './components/cryptoActivity';
import WalletHeader from './components/walletHeader';
import DurationChart from './components/durationChart';
import {palette, ScrollView} from './theme';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {useRecoilValue, useRecoilState, useSetRecoilState} from 'recoil';
import {loadingState, messageState} from './atoms';
import {fetchCoinList} from './apis';
import {RefreshControl, StyleSheet} from 'react-native';

const Home = () => {
  const [isLoading, setLoading] = useRecoilState(loadingState);
  const setErrorMessage = useSetRecoilState(messageState);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 4000);
  };

  React.useEffect(() => {
    async function fetch() {
      try {
        // setErrorMessage({
        //   visible: true,
        //   info: 'Something went wrong!',
        //   type: 'error',
        // });
        // setLoading(true);
        // setTimeout(() => {
        //   setLoading(false);
        // }, 3000);
        // const data = await fetchCoinList();
        // data.forEach(item => console.log('ids', item.id));
      } catch (error) {
        console.log('Error');
      }
    }
    fetch();
  }, []);

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
        {/* <Portfolio /> */}
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
