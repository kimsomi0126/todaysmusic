import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const initMusic = [
  {
    album: '',
    artist: '',
    image: '',
    title: '',
    link: { youtube: '', melon: '' },
  },
];

export const atomMusicList = atom({
  key: 'atomMusicList',
  default: initMusic,
  effects_UNSTABLE: [persistAtom],
});

export const atomHeartList = atom({
  key: 'atomHeartList',
  default: initMusic,
  effects_UNSTABLE: [persistAtom],
});

export const atomFbList = atom({
  key: 'atomFbList',
  default: initMusic,
  effects_UNSTABLE: [persistAtom],
});
