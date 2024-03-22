'use client';
import { useState } from 'react';
import {
  MusicContent,
  MusicImage,
  MusicInfo,
  MusicItem,
  MusicMore,
} from '../styles/main/musicListStyle';
import { Music, MusicProps, VideoType } from '../types/musicTypes';
import HeartIcon from './HeartIcon';
import MusicInfoModal from './music/MusicInfoModal';
import { getYoutube } from '../api/musicApi';
import { useRecoilState } from 'recoil';
import { atomVideoId, atomVideoOpen } from '../atoms/atomVideoState';

const initDetail = {
  album: '',
  artist: '',
  image: '',
  title: '',
  link: { youtube: '', melon: '' },
};
const MusicList = ({ music }: MusicProps) => {
  //상세정보 모달
  const [detail, setDetail] = useState<Music>(initDetail);
  const [isOpen, setIsOpen] = useState(false);
  //유튜브영상오픈
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [ytOpen, setYtOpen] = useRecoilState(atomVideoOpen);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [ytData, setYtData] = useRecoilState(atomVideoId);

  const handleMoreClick = (item: Music) => {
    setDetail(item);
    setIsOpen(true);
  };
  const handlePlayClick = async (item: Music) => {
    const artist = item.artist;
    const track = item.title;
    const data: VideoType = await getYoutube({ artist, track });
    setYtOpen(true);
    setYtData(data.items[0].id.videoId);
  };
  const handleClickClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      {Array.isArray(music) &&
        music.map((item, index) => (
          <MusicItem key={index}>
            <HeartIcon />
            <MusicContent>
              <MusicImage>
                <img src={item.image} alt={item.album} />
              </MusicImage>
              <MusicInfo
                onClick={() => {
                  handlePlayClick(item);
                }}
              >
                <p className="title">{item.title}</p>
                <p className="artist">{item.artist}</p>
              </MusicInfo>
            </MusicContent>
            <MusicMore
              onClick={() => {
                handleMoreClick(item);
              }}
            />
          </MusicItem>
        ))}
      {isOpen ? (
        <MusicInfoModal item={detail} handleClickClose={handleClickClose} />
      ) : null}
    </>
  );
};

export default MusicList;
