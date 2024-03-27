/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Heart } from '../../styles/main/musicListStyle';
import { useRecoilState } from 'recoil';
import { atomHeartList } from '../../atoms/atomMusicListState';
import { MusicAddItem } from '../../types/musicTypes';
import { useFirebase } from '../../hooks/useFirebase';
import { useLogin } from '../../hooks/useLogin';
import { atomIsLogin } from '../../atoms/atomUserState';
import Modal from '../common/Modal';
import { useNavigate } from 'react-router-dom';

type Props = {
  item: MusicAddItem;
  heart?: boolean;
};

const HeartBtn = ({ item, heart }: Props) => {
  const navigate = useNavigate();
  //로그인체크
  const [isLogin, setIsLogin] = useRecoilState(atomIsLogin);
  // 하트 상태
  const [heartCheck, setHeartCheck] = useState(false);
  // 음악 리스트
  const [heartList, setHeartList] = useRecoilState(atomHeartList);
  // firebase
  const { addDocument, deleteDocument } = useFirebase('mylist');
  const { loginState } = useLogin();

  //모달창
  const [modalTitle, setModalTitle] = useState('');
  const [modalDesc, setModalDesc] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsNav, setModalIsNav] = useState('');

  const isHeart = heart ? heartCheck : item.heart;

  // 랜더링 후 실행
  useEffect(() => {
    if (heartList) {
      setHeartCheck(
        heartList.some((heartItem: MusicAddItem) => isEqual(item, heartItem)),
      );
    }
  }, []);
  // 하트버튼 클릭
  const handleClickHeart = () => {
    if (!isLogin) {
      setModalIsOpen(true);
      setModalTitle('로그인 전용');
      setModalDesc('로그인하면 마음에 드는 음악을 \n 보관할 수 있습니다.');
      setModalIsNav('/login');
      return;
    }
    if (heartCheck || item.heart) {
      console.log(typeof item.musicid);
      deleteDocument(item.musicid);
      setHeartCheck(false);
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
      heart: true,
      image: item.image,
      title: item.title,
      link: item.link,
      uid: loginState.uid,
      musicid: Date.now(),
    };
    addDocument(musicItem);
  };

  const handleOk = () => {
    setModalIsOpen(false);
    if (modalIsNav) {
      navigate(modalIsNav);
    }
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
      <Heart className={isHeart ? 'on' : ''} onClick={handleClickHeart} />

      <Modal
        title={modalTitle}
        desc={modalDesc}
        onClick={handleOk}
        isOpen={modalIsOpen}
      />
    </>
  );
};

export default HeartBtn;
