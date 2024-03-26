import React, { useState, useEffect } from 'react';
import { Heart } from '../../styles/main/musicListStyle';
import { useRecoilState } from 'recoil';
import { atomHeartList } from '../../atoms/atomMusicListState';
import { MusicAddItem } from '../../types/musicTypes';
import { useFirebase } from '../../hooks/useFirebase';

type Props = {
  item: MusicAddItem;
  check?: boolean;
};

const HeartBtn = ({ item }: Props) => {
  // 하트 상태
  const [heartCheck, setHeartCheck] = useState(false);
  // 음악 리스트
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [heartList, setHeartList] = useRecoilState(atomHeartList);
  // firebase
  const { addDocument, deleteDocument } = useFirebase('mylist');

  // 랜더링 후 실행
  //
  useEffect(() => {
    if (heartList !== null) {
      setHeartCheck(
        heartList.some((heartItem: MusicAddItem) => isEqual(item, heartItem)),
      );
    }
  }, []);

  const handleClickHeart = () => {
    if (heartCheck) {
      setHeartCheck(false);
      console.log(typeof item.musicid);
      deleteDocument(item.musicid);
    } else {
      setHeartCheck(true);
      addMusic(item);
    }
  };
  const isEqual = (item1: MusicAddItem, item2: MusicAddItem) => {
    return (
      item1.album === item2.album &&
      item1.artist === item2.artist &&
      item1.title === item2.title
    );
  };

  // 선택 음악리스트
  const addMusic = (item: MusicAddItem) => {
    const musicItem: MusicAddItem = {
      album: item.album,
      artist: item.artist,
      image: item.image,
      title: item.title,
      link: item.link,
      uid: 1,
      musicid: Date.now(),
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
