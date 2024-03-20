'use client';
import {
  MusicImage,
  MusicInfo,
  MusicItem,
  MusicMore,
} from '../styles/main/musicListStyle';
import { MusicProps } from '../types/musicTypes';
import HeartIcon from './HeartIcon';

const MusicList = ({ music }: MusicProps) => {
  return (
    <>
      {Array.isArray(music) &&
        music.map((item, index) => (
          <MusicItem key={index}>
            <HeartIcon item={item} />
            <MusicImage>
              <img src={item.image} alt={item.album} />
            </MusicImage>
            <MusicInfo>
              <p className="title">{item.title}</p>
              <p className="artist">{item.artist}</p>
            </MusicInfo>
            <MusicMore />
          </MusicItem>
        ))}
    </>
  );
};

export default MusicList;
