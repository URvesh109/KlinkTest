import React from 'react';
import {StyleSheet, Text} from 'react-native';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';

export const BottomDrawer = () => {
  const bottomSheetModalRef = React.useRef<BottomSheet>(null);

  const snapPoints = React.useMemo(() => ['25%', '50%'], []);

  const handleSheetChanges = React.useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
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
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
