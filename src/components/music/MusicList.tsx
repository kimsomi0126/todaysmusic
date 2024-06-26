/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { useEffect, useRef, useState } from 'react';
import {
  MusicContent,
  MusicImage,
  MusicInfo,
  MusicItem,
  MusicMore,
} from '../../styles/main/musicListStyle';
import {
  Music,
  MusicAddItem,
  MusicProps,
  VideoType,
} from '../../types/musicTypes';
import MusicInfoModal from './MusicInfoModal';
import { getYoutube } from '../../api/musicApi';
import { useRecoilState } from 'recoil';
import { atomVideoId, atomVideoOpen } from '../../atoms/atomVideoState';
import HeartBtn from './HeartBtn';
import { atomIsLogin } from '../../atoms/atomUserState';
import Modal from '../common/Modal';
import { useNavigate } from 'react-router-dom';

const initDetail = {
  album: '',
  artist: '',
  image: '',
  title: '',
  link: { youtube: '', melon: '' },
};
const MusicList = ({ music, heart }: MusicProps) => {
  const navigate = useNavigate();
  //로그인체크
  const [isLogin, setIsLogin] = useRecoilState(atomIsLogin);
  //모달창
  const [modalTitle, setModalTitle] = useState('');
  const [modalDesc, setModalDesc] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsNav, setModalIsNav] = useState('');
  //상세정보
  const [detail, setDetail] = useState<Music>(initDetail);
  const [isOpen, setIsOpen] = useState(false);
  //유튜브영상
  const [ytOpen, setYtOpen] = useRecoilState(atomVideoOpen);
  const [ytData, setYtData] = useRecoilState(atomVideoId);
  // 모달창 영역
  const modalRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);
  const alertRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // 더보기 아이콘 클릭
  const handleMoreClick = (item: MusicAddItem) => {
    setDetail(item);
    setIsOpen(true);
  };
  // 음악 리스트 클릭
  const handlePlayClick = async (item: MusicAddItem) => {
    if (!isLogin) {
      setModalIsOpen(true);
      setModalTitle('로그인 전용');
      setModalDesc('로그인하면 유튜브 영상으로 \n음악을 재생할 수 있습니다.');
      return;
    }
    const artist = item.artist;
    const track = item.title;
    const data: VideoType = await getYoutube({ artist, track });
    setYtOpen(true);
    setYtData(data.items[0].id.videoId);
  };
  // 닫기 클릭
  const handleClickClose = () => {
    setIsOpen(false);
  };
  // 확인버튼 클릭
  const handleOk = () => {
    setModalIsOpen(false);
    if (modalIsNav) {
      navigate(modalIsNav);
    }
  };

  useEffect(() => {
    // 모달창 외 영역 클릭 시 창 닫기
    const handleClickOutside = (e: MouseEvent) => {
      const isOutside = (ref: React.RefObject<HTMLDivElement>) =>
        ref.current && !ref.current.contains(e.target as Node);
      // 더보기버튼 & 상세정보
      if (isOutside(modalRef) && isOutside(moreRef)) {
        setIsOpen(false);
      }
      // 리스트 & 로그인 안내
      if (isOutside(alertRef) && isOutside(listRef)) {
        setModalIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      {Array.isArray(music) &&
        music.map((item, index) => (
          <MusicItem key={index}>
            <HeartBtn item={item} heart={heart} />
            <MusicContent>
              <MusicImage>
                <img src={item.image} alt={item.album} />
              </MusicImage>
              <MusicInfo
                ref={listRef}
                onClick={e => {
                  e.stopPropagation();
                  handlePlayClick(item);
                }}
              >
                <p className="title">{item.title}</p>
                <p className="artist">{item.artist}</p>
              </MusicInfo>
            </MusicContent>
            <MusicMore
              ref={moreRef}
              onClick={e => {
                e.stopPropagation();
                handleMoreClick(item);
              }}
            ></MusicMore>
          </MusicItem>
        ))}
      {isOpen ? (
        <MusicInfoModal
          ref={modalRef}
          item={detail}
          handleClickClose={handleClickClose}
        />
      ) : null}
      <Modal
        ref={alertRef}
        title={modalTitle}
        desc={modalDesc}
        onClick={handleOk}
        isOpen={modalIsOpen}
      />
    </>
  );
};

export default MusicList;
