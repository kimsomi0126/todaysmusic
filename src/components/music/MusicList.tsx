/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { useState } from 'react';
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

const initDetail = {
  album: '',
  artist: '',
  image: '',
  title: '',
  link: { youtube: '', melon: '' },
};
const MusicList = ({ music }: MusicProps) => {
  //상세정보
  const [detail, setDetail] = useState<Music>(initDetail);
  const [isOpen, setIsOpen] = useState(false);
  //유튜브영상
  const [ytOpen, setYtOpen] = useRecoilState(atomVideoOpen);
  const [ytData, setYtData] = useRecoilState(atomVideoId);

  const handleMoreClick = (item: MusicAddItem) => {
    setDetail(item);
    setIsOpen(true);
  };
  const handlePlayClick = async (item: MusicAddItem) => {
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
            <HeartBtn item={item} />
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
