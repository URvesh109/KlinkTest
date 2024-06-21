import {atom} from 'recoil';

const KEYS = {
  COLLAPSE: 'collaspseKey',
  DURATION_BTN: 'durationBtnKey',
  POINTER_DATE: 'pointerDateKey',
  LOADER: 'loaderKey',
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
