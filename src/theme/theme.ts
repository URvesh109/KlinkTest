import {createTheme} from '@shopify/restyle';
import {scale} from 'react-native-size-matters';
import {palette} from './palette';
import {Fonts} from '../assets';

export const theme = createTheme({
  colors: {
    mainBackground: palette.black,
    solidButton: palette.lightBlue,
    white: palette.white,
    voilet: palette.voilet,
    green: palette.green,
    grey: palette.grey,
    black: palette.black,
    lightGrey: palette.lightGrey,
    lightBlack: palette.lightBlack,
    lightBlue: palette.lightBlue,
    lightWhite: palette.lightWhite,
    usdcColor: palette.usdcColor,
    usdtColor: palette.usdcColor,
    daiColor: palette.daiColor,
    dotColor: palette.dotColor,
    polygonColor: palette.polygonColor,
    bitcoinColor: palette.bitcoinColor,
    solanaColor: palette.solanaColor,
    cardanoColor: palette.cardanoColor,
    bottomBarColor: palette.bottomBarColor,
    disabledBulletColor: palette.disabledBulletColor,
  },
  spacing: {
    vs: scale(3),
    s: scale(5),
    m: scale(10),
    l: scale(15),
    xl: scale(20),
    xxl: scale(30),
    xxxl: scale(45),
  },
  textVariants: {
    header: {
      fontWeight: 'bold',
      fontSize: scale(34),
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
    },
    defaults: {
      // We can define a default text variant here.
      fontWeight: '400',
      fontSize: scale(12),
      lineHeight: scale(15),
      color: 'white',
      fontFamily: Fonts.Regular,
    },
  },
  scrollViewVariants: {},
});

export type Theme = typeof theme;
export default theme;
