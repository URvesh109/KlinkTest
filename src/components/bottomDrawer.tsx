import React, {
  ForwardRefRenderFunction,
  PropsWithChildren,
  forwardRef,
} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';
import {scale} from 'react-native-size-matters';
import {Box, palette, Text} from '../theme';

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

  const snapPoints = React.useMemo(() => ['1%', '34%'], []);

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
      backgroundStyle={styles.backgroundStyle}
      backdropComponent={null}
      containerStyle={styles.containerStyle}
      stackBehavior="replace"
      handleIndicatorStyle={styles.handleIndicatorStyle}
      snapPoints={snapPoints}>
      <BottomSheetView>
        <Pressable onPress={() => bottomSheetModalRef.current?.close()}>
          <Box alignItems="center" marginTop={'m'}>
            <Text color="white" variant={'sortBy'}>
              Sort by
            </Text>
          </Box>
        </Pressable>
      </BottomSheetView>
    </BottomSheetModal>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
  },
  backgroundStyle: {
    backgroundColor: palette.bottomBarColor,
  },

  handleIndicatorStyle: {
    backgroundColor: palette.disabledBulletColor,
    width: scale(50),
    height: scale(6),
  },
});

export default forwardRef(BottomDrawer);
