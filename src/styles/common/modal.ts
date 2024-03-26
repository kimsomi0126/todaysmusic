import styled from '@emotion/styled';

export const AlertModalWrap = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem;
  border-radius: 1.5rem;
  background: rgba(255, 255, 255, 1);
  min-width: 25rem;
  color: #222;
  text-align: center;
  z-index: 9;
  p {
    font-size: 1.4rem;
    margin: 1rem 0 2rem;
  }
  button {
    background: #222;
    color: #fff;
    padding: 0.5rem 3rem;
    border-radius: 2rem;
  }
`;
