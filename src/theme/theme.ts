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
    loaderBackgroundColor: palette.loaderBackground,
  },
  spacing: {
    vs: scale(3),
    s: scale(5),
    sm: scale(7),
    m: scale(10),
    l: scale(15),
    xl: scale(20),
    xxl: scale(30),
    xxxl: scale(45),
  },
  textVariants: {
    header: {
      fontWeight: 900,
      fontSize: scale(18),
      lineHeight: scale(23),
      fontFamily: Fonts.Regular,
    },
    coinTitle: {
      fontWeight: 600,
      fontSize: scale(16),
      lineHeight: scale(20),
      fontFamily: Fonts.Regular,
    },
    coinBody: {
      fontWeight: 400,
      fontSize: scale(12),
      lineHeight: scale(16),
      fontFamily: Fonts.Regular,
    },
    body: {
      fontWeight: 600,
      fontSize: scale(12),
      lineHeight: scale(16),
      fontFamily: Fonts.Regular,
    },
    notification: {
      fontWeight: 600,
      fontSize: scale(14),
      lineHeight: scale(18),
      fontFamily: Fonts.Regular,
    },
    sortBy: {
      fontWeight: 600,
      fontSize: scale(21),
      lineHeight: scale(27),
      fontFamily: Fonts.Regular,
    },
    sortTitle: {
      fontWeight: 400,
      fontSize: scale(16),
      lineHeight: scale(21),
      fontFamily: Fonts.Regular,
    },
    dollarAndDecimal: {
      fontWeight: 800,
      fontSize: scale(21),
      lineHeight: scale(27),
      fontFamily: Fonts.Regular,
    },
    balance: {
      fontWeight: 800,
      fontSize: scale(48),
      lineHeight: scale(58),
      fontFamily: Fonts.Regular,
    },
    defaults: {
      color: 'white',
    },
  },
  scrollViewVariants: {
    defaults: {},
  },
});

export type Theme = typeof theme;
export default theme;
