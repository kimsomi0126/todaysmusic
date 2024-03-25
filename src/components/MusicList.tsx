'use client';
import { useState } from 'react';
import {
  MusicContent,
  MusicImage,
  MusicInfo,
  MusicItem,
  MusicMore,
} from '../styles/main/musicListStyle';
import {
  Music,
  MusicAddItem,
  MusicProps,
  VideoType,
} from '../types/musicTypes';
import MusicInfoModal from './music/MusicInfoModal';
import { getYoutube } from '../api/musicApi';
import { useRecoilState } from 'recoil';
import { atomVideoId, atomVideoOpen } from '../atoms/atomVideoState';
import HeartBtn from './music/HeartBtn';

const initDetail = {
  album: '',
  artist: '',
  image: '',
  title: '',
  link: { youtube: '', melon: '' },
};
const MusicList = ({ music, check }: MusicProps) => {
  //상세정보 모달
  const [detail, setDetail] = useState<Music>(initDetail);
  const [isOpen, setIsOpen] = useState(false);
  //유튜브영상오픈
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [ytOpen, setYtOpen] = useRecoilState(atomVideoOpen);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [ytData, setYtData] = useRecoilState(atomVideoId);

  const handleMoreClick = (item: MusicAddItem) => {
    setDetail(item.music);
    setIsOpen(true);
  };
  const handlePlayClick = async (item: MusicAddItem) => {
    const artist = item.music.artist;
    const track = item.music.title;
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
            <HeartBtn item={item} check={check ? true : false} />
            <MusicContent>
              <MusicImage>
                <img src={item.music.image} alt={item.music.album} />
              </MusicImage>
              <MusicInfo
                onClick={() => {
                  handlePlayClick(item);
                }}
              >
                <p className="title">{item.music.title}</p>
                <p className="artist">{item.music.artist}</p>
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
