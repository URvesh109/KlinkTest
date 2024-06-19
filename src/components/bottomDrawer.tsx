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

  const snapPoints = React.useMemo(() => ['1%', '40%'], []);

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
      stackBehavior="replace"
      handleIndicatorStyle={styles.handleIndicatorStyle}
      snapPoints={snapPoints}>
      <BottomSheetView>
        <Box alignItems="center" marginTop={'m'}>
          <Text color="white" variant={'sortBy'}>
            Sort by
          </Text>
        </Box>
        <SortByFlatList />
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
