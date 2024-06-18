import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Fonts} from './assets';
import {fetchCoinList} from './apis';
import {Portfolio} from './components';

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
    <SafeAreaView style={styles.container}>
      <Portfolio />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontFamily: Fonts.Medium,
    fontSize: 16,
  },
});

export default Home;
