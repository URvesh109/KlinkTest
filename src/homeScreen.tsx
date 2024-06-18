import React from 'react';
import {fetchCoinList} from './apis';
import {Portfolio} from './components';
import {ScrollView, Text} from './theme';

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
    <ScrollView nestedScrollEnabled={false}>
      <Text variant={'coinTitle'} color={'daiColor'}>
        USDC
      </Text>
      <Portfolio />
    </ScrollView>
  );
};

export default Home;
