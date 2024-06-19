import React from 'react';
// import {fetchCoinList} from './apis';
import {Portfolio} from './components';
import {ScrollView, Text} from './theme';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

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
        <Portfolio />
      </ScrollView>
    </BottomSheetModalProvider>
  );
};

export default Home;
