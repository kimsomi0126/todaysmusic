import React, { useState, useEffect } from 'react';
import { Heart } from '../../styles/main/musicListStyle';
import { useRecoilState } from 'recoil';
import { atomHeartList } from '../../atoms/atomMusicListState';
import { MusicAddItem } from '../../types/musicTypes';
import { useFirebase } from '../../hooks/useFirebase';
import { useColletion } from '../../hooks/useColletion';

type Props = {
  item: MusicAddItem;
  check?: boolean;
};

const HeartBtn = ({ item, check }: Props) => {
  // 하트 상태
  const [heartCheck, setHeartCheck] = useState(false);
  // 음악 리스트
  const [heartList, setHeartList] = useRecoilState(atomHeartList);
  // firebase
  // FB Hook 가져오기
  const { addDocument, deleteDocument } = useFirebase('mylist');
  const { documents } = useColletion('mylist');

  useEffect(() => {
    if (check) {
      setHeartCheck(true);
    } else if (heartList !== null) {
      setHeartCheck(
        heartList.some((heartItem: MusicAddItem) => isEqual(item, heartItem)),
      );
    }
  }, [documents]);

  const handleClickHeart = () => {
    if (heartCheck) {
      deleteDocument(item.musicid);
    } else {
      setHeartList([...heartList, item]);
      addMusic(item);
    }
  };
  const isEqual = (
    item1: MusicAddItem | undefined,
    item2: MusicAddItem | undefined,
  ) => {
    if (!item1?.music || !item2?.music) {
      return false;
    }

    return (
      item1.music.album === item2.music.album &&
      item1.music.artist === item2.music.artist &&
      item1.music.title === item2.music.title
    );
  };

  // 선택 음악리스트
  const addMusic = (item: MusicAddItem) => {
    const musicItem: MusicAddItem = {
      uid: 1,
      musicid: Date.now().toString(),
      music: item.music,
    };
    addDocument(musicItem);
  };

  return (
    <>
      {/* <button
        onClick={() => {
          setHeartList([]);
        }}
      >
        리셋
      </button> */}
      <Heart className={heartCheck ? 'on' : ''} onClick={handleClickHeart} />
    </>
  );
};

export default HeartBtn;
