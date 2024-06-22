import {atom, AtomEffect, selector} from 'recoil';
import {CoinData, MessageType} from '../src/types';
import {addEventListener} from '@react-native-community/netinfo';
import {Sortkey} from './components';

const KEYS = {
  COLLAPSE: 'collaspseKey',
  DURATION_BTN: 'durationBtnKey',
  POINTER_DATE: 'pointerDateKey',
  LOADER: 'loaderKey',
  MESSAGE: 'messageKey',
  NETWORK_STATE: 'networkStateKey',
  COIN_LIST: 'coinListKey',
  SORT_SELECTION: 'sortSelection',
  SORTED_COIN_LIST: 'sortedCoinList',
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

export const networkState = atom<boolean>({
  key: KEYS.NETWORK_STATE,
  default: true,
  effects: [networkStatusEffect()],
});

export const coinListState = atom<Array<CoinData>>({
  key: KEYS.COIN_LIST,
  default: [],
});

export const sortSelectionState = atom<Sortkey>({
  key: KEYS.SORT_SELECTION,
  default: 'Value',
});

export const sortedCoinListState = selector({
  key: KEYS.SORTED_COIN_LIST,
  get: ({get}) => {
    const sort = get(sortSelectionState);
    const old = get(coinListState) || [];
    const newCoinList = [...old];

    switch (sort) {
      case 'Value':
        return newCoinList.sort(
          (item_a, item_b) => item_b.current_price - item_a.current_price,
        );
      case 'A-Z':
        return newCoinList.sort(
          (item_a, item_b) =>
            item_a.name.toUpperCase().charCodeAt(0) -
            item_b.name.toUpperCase().charCodeAt(0),
        );
      case 'Z-A':
        return newCoinList.sort(
          (item_a, item_b) =>
            item_b.name.toUpperCase().charCodeAt(0) -
            item_a.name.toUpperCase().charCodeAt(0),
        );
      default:
        return [];
    }
  },
});
