import {atom} from 'recoil';

const KEYS = {
  COLLAPSE: 'collaspse',
  DURATION_BTN: 'durationBtn',
};

export const collapseState = atom<boolean>({
  key: KEYS.COLLAPSE,
  default: true,
});

export const durationBtnState = atom<string>({
  key: KEYS.DURATION_BTN,
  default: '3M',
});
