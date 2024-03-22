import styled from '@emotion/styled';

export const MainWrap = styled.div`
  position: relative;
  max-width: 798px;
  margin: 0 auto;
  padding: 1rem 10%;
  color: #fff;
  overflow-x: hidden;

  a {
    color: #fff;
  }
`;

export const RecommendBtn = styled.button`
  background: rgba(0, 0, 0, 0.2);
  width: 100%;
  border: 0;
  padding: 1rem;
  color: #fff;
`;

export const YtModalWrap = styled.div`
  position: fixed;
  right: 5%;
  bottom: 5%;

  iframe {
    border: 0;
  }
`;

export const BtnWrap = styled.div`
  position: absolute;
  right: 0;
  top: -3rem;
  color: #fff;
  display: flex;
  gap: 1rem;

  button {
    color: #fff;
  }
`;