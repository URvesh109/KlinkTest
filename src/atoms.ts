import {atom, AtomEffect} from 'recoil';
import {CoinData, MessageType} from '../src/types';
import {addEventListener} from '@react-native-community/netinfo';

const KEYS = {
  COLLAPSE: 'collaspseKey',
  DURATION_BTN: 'durationBtnKey',
  POINTER_DATE: 'pointerDateKey',
  LOADER: 'loaderKey',
  MESSAGE: 'messageKey',
  COIN_SELECTION: 'coinSelectionKey',
  NETWORK_STATE: 'networkState',
  COIN_LIST: 'coinList',
};

//---------- ATOM EFFECT----------------

const networkStatusEffect: () => AtomEffect<boolean> =
  () =>
  ({setSelf}) => {
    const unsubscribe = addEventListener(state => {
      setSelf(state.isConnected as boolean);
    });
    return () => {
      unsubscribe();
    };
  };

//---------- ATOM----------------

export const collapseState = atom<boolean>({
  key: KEYS.COLLAPSE,
  default: true,
});

export const durationBtnState = atom<string>({
  key: KEYS.DURATION_BTN,
  default: '3M',
});

export const pointerDateState = atom<string>({
  key: KEYS.POINTER_DATE,
  default: '',
});

export const loadingState = atom<boolean>({
  key: KEYS.LOADER,
  default: false,
});

export const messageState = atom<MessageType>({
  key: KEYS.MESSAGE,
  default: {visible: false, info: '', type: null},
});

export const coinSelectionState = atom<string>({
  key: KEYS.COIN_SELECTION,
  default: '',
});

export const networkState = atom<boolean>({
  key: KEYS.NETWORK_STATE,
  default: true,
  effects: [networkStatusEffect()],
});

export const coinListState = atom<Array<CoinData>>({
  key: KEYS.COIN_LIST,
  default: [],
});
