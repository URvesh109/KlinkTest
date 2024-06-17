import React from 'react';
import {SafeAreaView, StyleSheet, Image, Text} from 'react-native';
import {Fonts, Images, Icons} from './src/assets';
import {useNetInfo} from '@react-native-community/netinfo';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';

const {Chart} = Icons;

function App(): React.JSX.Element {
  const netInfo = useNetInfo();
  console.log('netInfo', netInfo.isConnected);

  const bottomSheetModalRef = React.useRef<BottomSheet>(null);

  const snapPoints = React.useMemo(() => ['25%', '50%'], []);

  const handleSheetChanges = React.useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <GestureHandlerRootView style={styles.gestureView}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.textStyle}>Klink Test</Text>
        <Image source={Images.hexoNav} />
        <Chart width={20} height={20} />
        <BottomSheet
          ref={bottomSheetModalRef}
          index={1}
          onChange={handleSheetChanges}
          enablePanDownToClose
          snapPoints={snapPoints}>
          <BottomSheetView style={styles.contentContainer}>
            <Text>Awesome 🎉</Text>
          </BottomSheetView>
        </BottomSheet>
      </SafeAreaView>
    </GestureHandlerRootView>
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
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default App;
