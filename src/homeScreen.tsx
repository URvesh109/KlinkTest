import React from 'react';
import {StyleSheet} from 'react-native';
import {Fonts, Icons} from './assets';
import {fetchCoinList} from './apis';
import {Portfolio} from './components';
import {Box, CoinIcon} from './theme';
import {scale} from 'react-native-size-matters';

const {InverArrowIcon} = Icons;

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
    <Box style={styles.container} backgroundColor="mainBackground">
      <Portfolio />
      <CoinIcon iconName="polkadot" />
      <InverArrowIcon
        width={scale(48)}
        height={scale(48)}
        style={{transform: [{rotate: '180deg'}]}}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
