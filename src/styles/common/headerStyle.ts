import styled from '@emotion/styled';

export const HeaderWrap = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  z-index: 999;
  padding: 1rem 0;
  .logo img {
    /* opacity: 0.8; */
    width: 5.4rem;
    aspect-ratio: 23/11;
    transition: 0.2s;
  }
  .logo:hover img {
    /* opacity: 1; */
  }
`;
export const HeaderInner = styled.div`
  position: relative;
  max-width: 798px;
  margin: 0 auto;
  padding: 1rem 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// 햄버거메뉴 아이콘
export const MenuBar = styled.button`
  position: relative;
  width: 3rem;
  height: 3rem;
  border: 1px solid rgba(255, 255, 255, 1);
  padding: 0.8rem 0.5rem;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  z-index: 999;
  span {
    position: absolute;
    width: calc(100% - 1rem);
    height: 2px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10rem;
    background: #fff;
    transition: 0.3s;
    &:nth-of-type(1) {
      top: 30%;
    }
    &:nth-of-type(2) {
      width: 45%;
      left: 58%;
    }
    &:nth-of-type(3) {
      top: 70%;
    }
  }

  &.on {
    span {
      position: absolute;
      width: 70%;
      left: 50%;
      top: 50%;
      &:nth-of-type(1) {
        transform: translate(-50%, -50%) rotate(45deg);
      }
      &:nth-of-type(3) {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
      &:nth-of-type(2) {
        opacity: 0;
      }
    }
  }
`;

//헤더 메뉴

export const HeaderMenuList = styled.div`
  display: flex;
  gap: 3vw;
  margin-left: auto;
  padding-right: 3vw;
  a,
  button {
    color: #fff;
  }
`;

// 전체메뉴
export const MenuWrap = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  transition: 0.2s;
  display: none;
  text-align: center;
  &.on {
    display: block;
  }
  ul {
    display: flex;
  }
  li {
    background: rgba(0, 0, 0, 0.8);
    min-width: 10rem;
    margin: 0 0.5rem;
    border-radius: 1rem;
    font-size: 1.6rem;
    opacity: 0.8;
    transition: 0.2s;
    :hover {
      opacity: 1;
    }
    img {
      margin-bottom: 1rem;
    }
    a {
      display: block;
      padding: 2rem;
      color: #fff;
    }
    button {
      width: 100%;
      padding: 2rem;
      color: #fff;
    }
  }
`;
export const MenuInner = styled.div`
  max-width: 798px;
  height: 100%;
  margin: 0 auto;
  padding: 1rem 5%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
