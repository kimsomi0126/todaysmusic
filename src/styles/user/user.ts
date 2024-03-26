import styled from '@emotion/styled';

export const FormWrap = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 3rem;
  background: rgba(255, 255, 255, 0.7);
  width: 30rem;
  text-align: center;
  color: #222;
  border-radius: 1.5rem;
  a {
    font-size: 1.4rem;
    font-weight: 300;
    display: block;
    color: #222;
    margin-top: 2rem;
    :hover {
      font-weight: 500;
    }
  }
`;
export const IptItem = styled.input`
  position: relative;
  width: 100%;
  padding: 0.5rem;
  font-size: 1.6rem;
  margin: 0.25rem 0;
  background: rgba(255, 255, 255, 0.8);
  transition: 0.2s;
  border: 0;
  &:focus,
  &:active {
    background: rgba(255, 255, 255, 1);
  }
`;
export const SubmitBtn = styled.button`
  position: relative;
  width: 100%;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.8);
  margin-top: 2rem;
`;
export const IdWrap = styled.div`
  position: relative;
  small {
    width: 100%;
    display: block;
    color: #b70000;
    text-align: left;
    margin-bottom: 0.5rem;
  }
`;
