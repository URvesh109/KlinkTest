import React from 'react';
import {Portfolio} from './components';
import CryptoActivity from './components/cryptoActivity';
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
        <CryptoActivity />
        <Portfolio />
      </ScrollView>
    </BottomSheetModalProvider>
  );
};

export default Home;
