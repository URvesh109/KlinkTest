import React from 'react';
import {Portfolio} from './components';
import CryptoActivity from './components/cryptoActivity';
import WalletHeader from './components/walletHeader';
import DurationChart from './components/durationChart';
import {ScrollView} from './theme';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
// import {fetchCoinList} from './apis';

const Home = () => {
  React.useEffect(() => {
    async function fetch() {
      try {
        // await fetchCoinList();
      } catch (error) {
        console.log('Error');
      }
    }
    fetch();
  }, []);

  return (
    <BottomSheetModalProvider>
      <ScrollView nestedScrollEnabled={false}>
        <WalletHeader />
        <DurationChart />
        <CryptoActivity />
        <Portfolio />
      </ScrollView>
    </BottomSheetModalProvider>
  );
};

export default Home;
