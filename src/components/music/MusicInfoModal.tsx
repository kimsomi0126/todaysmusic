import { forwardRef } from 'react';
import {
  CloseBtn,
  DetailAlbum,
  DetailArtist,
  DetailImage,
  DetailInfo,
  DetailList,
  DetailTrack,
  MelonBtn,
  ModalWrap,
  SearchWrap,
  YtBtn,
} from '../../styles/main/musicListStyle';
import { Music } from '../../types/musicTypes';

type Modal = {
  item: Music;
  handleClickClose: () => void;
  ref?: any;
};

const MusicInfoModal = forwardRef<HTMLDivElement, Modal>(
  ({ item, handleClickClose }, modalRef) => {
    return (
      <ModalWrap ref={modalRef}>
        <h3>상세정보</h3>
        <CloseBtn onClick={handleClickClose} />
        <DetailList>
          <DetailImage>
            <img src={item.image} alt={item.album} />
          </DetailImage>
          <DetailInfo>
            <DetailTrack>{item.title}</DetailTrack>
            <DetailAlbum>
              <dt>앨범 | </dt>
              <dd>{item.album}</dd>
            </DetailAlbum>
            <DetailArtist>
              <dt>가수 | </dt>
              <dd>{item.artist}</dd>
            </DetailArtist>
          </DetailInfo>
        </DetailList>
        <p>
          <span>음악사이트 검색</span>
        </p>
        <SearchWrap>
          <YtBtn
            onClick={() => {
              window.open(`${item.link.youtube}`);
            }}
          >
            <img src="/images/yt_music_icon.svg" alt="유튜브뮤직 아이콘" />
          </YtBtn>
          <MelonBtn
            onClick={() => {
              window.open(`${item.link.melon}`);
            }}
          >
            <img src="/images/logo_melon.png" alt="멜론 아이콘" />
          </MelonBtn>
        </SearchWrap>
      </ModalWrap>
    );
  },
);

export default MusicInfoModal;
