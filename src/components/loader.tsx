import * as React from 'react';
import {ViewStyle, ActivityIndicator} from 'react-native';
import {Text, Box, palette} from '../theme';
import {useRecoilValue} from 'recoil';
import {loadingState} from '../atoms';
import {scale} from 'react-native-size-matters';

const loadingViewStyle: ViewStyle = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  zIndex: 100,
};

const indicatorbar: ViewStyle = {
  height: scale(70),
  width: '80%',
  borderRadius: 10,
  backgroundColor: palette.lightBlack,
  justifyContent: 'center',
  alignItems: 'center',
};

const indicatorView: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  paddingHorizontal: 20,
};

export const Loader = ({children}: {children: any}) => {
  const isLoading = useRecoilValue(loadingState);
  return (
    <>
      {isLoading && (
        <Box backgroundColor="loaderBackgroundColor" style={[loadingViewStyle]}>
          <Box flex={1} justifyContent="center" alignItems="center">
            <Box style={indicatorbar}>
              <Box style={indicatorView}>
                <ActivityIndicator size={'large'} color={palette.lightWhite} />
                <Text color="lightWhite" paddingLeft="l">
                  Please wait...
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
      {children}
    </>
  );
};
