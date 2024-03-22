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
  min-height: 30rem;
  color: #222;
  text-align: center;
  z-index: 9;
`;
export const YtBtn = styled.button`
  position: relative;
`;
export const MelonBtn = styled.button`
  position: relative;
`;
