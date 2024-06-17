import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {Fonts} from './src/assets';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {RecoilRoot} from 'recoil';

function App(): React.JSX.Element {
  return (
    <RecoilRoot>
      <GestureHandlerRootView style={styles.gestureView}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.textStyle}>Klink Test</Text>
        </SafeAreaView>
      </GestureHandlerRootView>
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  gestureView: {
    flex: 1,
  },
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

export default App;
