import React from 'react';
import { MelonBtn, ModalWrap, YtBtn } from '../../styles/main/musicListStyle';
import { Music } from '../../types/musicTypes';

type Modal = {
  item: Music;
  handleClickClose: () => void;
};

const MusicInfoModal = ({ item, handleClickClose }: Modal) => {
  return (
    <ModalWrap>
      <h3>상세정보</h3>
      <ul>
        <li>
          <img src={item.image} alt={item.album} />
        </li>
        <li>
          <b>{item.title}</b>
        </li>
        <li>
          <p>{item.album}</p>
        </li>
        <li>
          <p>{item.artist}</p>
        </li>
      </ul>
      <YtBtn
        onClick={() => {
          window.open(`${item.link.youtube}`);
        }}
      >
        유튜브뮤직
      </YtBtn>
      <MelonBtn
        onClick={() => {
          window.open(`${item.link.melon}`);
        }}
      >
        <img src="/images/logo_melon.png" alt="멜론 아이콘" />
      </MelonBtn>
      <br />
      <button
        onClick={() => {
          handleClickClose();
        }}
      >
        닫기
      </button>
    </ModalWrap>
  );
};

export default MusicInfoModal;
