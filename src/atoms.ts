import {atom} from 'recoil';

const KEYS = {
  COLLAPSE: 'collaspse',
};

export const collapseState = atom<boolean>({
  key: KEYS.COLLAPSE,
  default: true,
});
