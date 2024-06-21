import {atom} from 'recoil';
import {MessageType} from '../src/types';

const KEYS = {
  COLLAPSE: 'collaspseKey',
  DURATION_BTN: 'durationBtnKey',
  POINTER_DATE: 'pointerDateKey',
  LOADER: 'loaderKey',
  MESSAGE: 'messageKey',
};

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
