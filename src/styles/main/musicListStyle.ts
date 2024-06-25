import styled from '@emotion/styled';

export const MusicWrap = styled.div`
  position: relative;
  min-height: 50vh;
  h4 {
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    font-size: 1.8rem;
    margin: 0 0 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.8);
    padding: 0 3% 1rem;
  }
`;

export const MusicItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 3%;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;
export const MusicContent = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  padding-left: 2rem;
  width: calc(100% - 6rem);
`;
export const MusicImage = styled.div`
  width: 5rem;
  height: 5rem;
  margin-right: 1rem;
  overflow: hidden;
  img {
    width: 100%;
  }
`;
export const MusicInfo = styled.div`
  width: calc(100% - 6rem);
  .artist {
    font-size: 1.4rem;
    font-weight: 200;
    color: rgba(255, 255, 255, 0.5);
    margin-top: 0.5rem;
  }
`;
export const Heart = styled.div`
  width: 3rem;
  height: 3rem;
  background: url(/images/heart_icon.svg) no-repeat center;
  &.on {
    background: url(/images/heart_icon_on.svg) no-repeat center;
  }
`;
export const MusicMore = styled.div`
  width: 3rem;
  height: 3rem;
  margin-left: auto;
  background: url(/images/more_icon.svg) no-repeat center;
`;

export const RefreshBtn = styled.button`
  font-size: 0;
  width: 2rem;
  height: 2rem;
  background: url(/images/refresh_icon.svg) no-repeat center/100%;
`;
export const ModalWrap = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem;
  border-radius: 1.5rem;
  background: rgba(255, 255, 255, 1);
  min-width: 30rem;
  /* min-height: 30rem; */
  color: #222;
  text-align: center;
  z-index: 9;
  button {
    color: #fff;
    border-radius: 5rem;
    padding: 1rem 2rem;
  }

  p {
    position: relative;
    font-weight: 500;
    font-size: 1.4rem;
    margin-bottom: 1rem;
    color: rgba(0, 0, 0, 0.5);
    span {
      display: inline-block;
      background: #fff;
      padding: 0 1.5rem;
    }
    :before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      width: 100%;
      height: 1px;
      background: rgba(0, 0, 0, 0.1);
      z-index: -1;
    }
  }
`;

export const DetailList = styled.div`
  text-align: left;
  display: flex;
  background: #fafafa;
  padding: 2rem;
  margin: 1rem 0;
  dl {
    width: 100%;
    display: flex;
    font-weight: 500;
    color: #888;
    margin: 2px 0;
  }
  dt {
    margin-right: 0.5rem;
  }
`;
export const DetailImage = styled.div`
  width: 7rem;
  margin-right: 1rem;
  img {
    max-width: 100%;
  }
`;
export const DetailInfo = styled.div`
  width: calc(100% - 8rem);
`;
export const DetailTrack = styled.div`
  font-weight: 700;
  font-size: 1.8rem;
  margin-bottom: 0.25rem;
`;
export const DetailAlbum = styled.dl`
  font-size: 1.4rem;
`;
export const DetailArtist = styled.dl`
  font-size: 1.4rem;
`;

export const SearchWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* padding: 1rem 0; */
`;
export const YtBtn = styled.button`
  position: relative;
  background: #fafafa;
  width: 48%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  img {
    height: 1.5rem;
    vertical-align: -7%;
  }
`;
export const MelonBtn = styled.button`
  position: relative;
  width: 48%;
  background: #fff;
  border: 1px solid #ddd;
  img {
    height: 1.3rem;
    vertical-align: 0%;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  right: 2rem;
  top: 1.6rem;
  background: #fff;
  width: 3rem;
  height: 3rem;
  border-radius: 0 !important;
  padding: 0 !important;
  opacity: 0.5;
  :hover {
    opacity: 1;
  }
  :before,
  :after {
    content: '';
    position: absolute;
    width: 70%;
    height: 2px;
    background: rgba(0, 0, 0, 1);
  }
  :before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  :after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;
