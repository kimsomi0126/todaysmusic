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
  div {
    font-size: 1.4rem;
    margin: 1rem 0 2rem;
  }
  button {
    background: rgba(75, 93, 255, 0.9);
    color: #fff;
    padding: 0.5rem 3rem;
    border-radius: 2rem;
    transition: 0.2s;
    :hover {
      background: rgba(75, 93, 255, 1);
    }
  }
`;
