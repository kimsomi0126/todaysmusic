import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const atomVideoOpen = atom({
  key: 'atomVideoOpen',
  default: false,
  effects_UNSTABLE: [persistAtom],
});
export const atomVideoId = atom({
  key: 'atomVideoId',
  default: '',
  effects_UNSTABLE: [persistAtom],
});
