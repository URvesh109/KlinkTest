import {ViewStyle} from 'react-native';

/**
 * LineChart is missing left and marginLeft alignment style and props, so
 * added marginLeft to fit it nicely in the box.
 */
export const marginLeft: ViewStyle = {
  marginLeft: -30,
};

export const loadingViewStyle: ViewStyle = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  zIndex: 100,
};
