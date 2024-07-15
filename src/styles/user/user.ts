import styled from '@emotion/styled';

export const FormWrap = styled.div`
  padding-top: 10vh;
  h3 {
    max-width: 50rem;
  }
  form {
    max-width: 50rem;
    margin: 3rem auto;
  }
  /* position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 3rem;
  background: rgba(255, 255, 255, 0.7);
  width: 30rem;
  text-align: center;
  color: #222;
  border-radius: 1.5rem;
  
  } */
  a {
    text-align: right;
    font-size: 1.6rem;
    font-weight: 300;
    display: block;
    margin-top: 2rem;
    color: rgba(255, 255, 255, 0.5);

    :hover {
      font-weight: 400;
    }
    span {
      color: rgba(255, 255, 255, 1);
    }
  }
`;
export const BgInner = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: url(/images/user_bg.jpg) no-repeat center / cover;
`;

export const IptItem = styled.input`
  position: relative;
  width: 100%;
  padding: 1.5rem 2.5rem;
  font-size: 1.8rem;
  margin: 0.5rem 0;
  background: rgba(255, 255, 255, 0.8);
  transition: 0.2s;
  border: 0;
  border-radius: 5rem;

  &:focus,
  &:active {
    background: rgba(255, 255, 255, 1);
  }
`;
export const SubmitBtn = styled.button`
  position: relative;
  width: 100%;
  padding: 1.5rem;
  background: rgba(75, 93, 255, 0.8);
  margin-top: 2rem;
  color: #fff;
  border-radius: 5rem;
`;
export const IdWrap = styled.div`
  position: relative;
  small {
    width: 100%;
    padding-left: 2rem;
    display: block;
    color: #ff0000;
    text-align: left;
    margin-bottom: 0.5rem;
  }
`;
