import {atom} from 'recoil';

const KEYS = {
  COLLAPSE: 'collaspseKey',
  DURATION_BTN: 'durationBtnKey',
};

export const collapseState = atom<boolean>({
  key: KEYS.COLLAPSE,
  default: true,
});

export const durationBtnState = atom<string>({
  key: KEYS.DURATION_BTN,
  default: '3M',
});
