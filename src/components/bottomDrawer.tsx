import React, {
  ForwardRefRenderFunction,
  PropsWithChildren,
  forwardRef,
} from 'react';
import {StyleSheet, Text} from 'react-native';
import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';

export type BottomDrawerPresentHandle = {
  present: () => void;
};

type BottomDrawerProps = PropsWithChildren & {
  selected: string;
};

const BottomDrawer: ForwardRefRenderFunction<
  BottomDrawerPresentHandle,
  BottomDrawerProps
> = (props, forwardedRef) => {
  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);

  const snapPoints = React.useMemo(() => ['25%', '50%'], []);

  const handleSheetChanges = React.useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  React.useImperativeHandle(forwardedRef, () => ({
    present: () => {
      bottomSheetModalRef.current?.present();
    },
  }));

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      index={1}
      onChange={handleSheetChanges}
      enablePanDownToClose
      snapPoints={snapPoints}>
      <BottomSheetView style={styles.contentContainer}>
        <Text>Awesome 🎉</Text>
      </BottomSheetView>
    </BottomSheetModal>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default forwardRef(BottomDrawer);
