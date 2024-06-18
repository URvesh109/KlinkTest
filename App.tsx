import React from 'react';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {RecoilRoot} from 'recoil';
import Home from './src/homeScreen';

const App = () => {
  return (
    <RecoilRoot>
      <GestureHandlerRootView style={styles.gestureView}>
        <Home />
      </GestureHandlerRootView>
    </RecoilRoot>
  );
};

const styles = StyleSheet.create({
  gestureView: {
    flex: 1,
  },
});

export default App;
