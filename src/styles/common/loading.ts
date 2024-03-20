import styled from '@emotion/styled';

export const LoadingWrap = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadingWeather = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  span {
    margin-top: 0.5rem;
  }
`;

export const LoadingMusic = styled.div`
  position: relative;
  display: flex;
  gap: 1rem;
  margin-top: 3rem;
`;
