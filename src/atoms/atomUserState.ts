import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const initState = {
  uid: '',
  email: '',
};

export const atomLoginState = atom({
  key: 'atomLoginState',
  default: initState,
  effects_UNSTABLE: [persistAtom],
});

export const atomIsLogin = atom({
  key: 'atomIsLogin',
  default: false,
  effects_UNSTABLE: [persistAtom],
});
