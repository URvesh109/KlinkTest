import React, {
  ForwardRefRenderFunction,
  PropsWithChildren,
  forwardRef,
} from 'react';
import {StyleSheet} from 'react-native';
import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';
import {scale} from 'react-native-size-matters';
import {Box, palette, Text} from '../theme';
import {SortByFlatList} from './sortByFlatList';

export type BottomDrawerHandle = {
  present: () => void;
};

const BottomDrawer: ForwardRefRenderFunction<
  BottomDrawerHandle,
  PropsWithChildren
> = (props, forwardedRef) => {
  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);

  const snapPoints = React.useMemo(() => ['1%', '40%'], []);

  const handleSheetChanges = React.useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const onClose = () => {
    bottomSheetModalRef.current?.close();
  };

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
      backgroundStyle={styles.backgroundStyle}
      handleIndicatorStyle={styles.handleIndicatorStyle}
      stackBehavior="replace"
      enableDismissOnClose
      snapPoints={snapPoints}>
      <BottomSheetView>
        <Box alignItems="center" marginTop={'m'}>
          <Text color="white" variant={'sortBy'}>
            Sort by
          </Text>
        </Box>
        <SortByFlatList onClose={onClose} />
      </BottomSheetView>
    </BottomSheetModal>
  );
};

const styles = StyleSheet.create({
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
