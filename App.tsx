import React from 'react';
import {StyleSheet, StatusBar, SafeAreaView} from 'react-native';
// import {SafeAreaView} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {RecoilRoot} from 'recoil';
import Home from './src/homeScreen';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {palette} from './src/theme';

const App = () => {
  return (
    <RecoilRoot>
      <GestureHandlerRootView style={styles.container}>
        <SafeAreaView style={styles.container}>
          <ThemeProvider theme={theme}>
            <StatusBar barStyle={'light-content'} />
            <Home />
          </ThemeProvider>
        </SafeAreaView>
      </GestureHandlerRootView>
    </RecoilRoot>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.black,
  },
});

export default App;
