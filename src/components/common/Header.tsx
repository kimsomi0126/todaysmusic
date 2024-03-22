import React, { useState } from 'react';
import {
  HeaderInner,
  HeaderWrap,
  MenuBar,
  MenuInner,
  MenuWrap,
} from '../../styles/common/headerStyle';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <HeaderWrap>
      <HeaderInner>
        <Link to="/" className="logo">
          <img src="/images/logo_w.svg" alt="" />
        </Link>
        <MenuBar
          className={isOn ? 'on' : ''}
          onClick={() => {
            setIsOn(!isOn);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </MenuBar>
      </HeaderInner>
      <MenuWrap className={isOn ? 'on' : ''}>
        <MenuInner>
          <ul>
            <li>
              <Link to={'/mypage'}>
                <img src="/images/headphone_icon.svg" alt="" />
                <p>내 음악</p>
              </Link>
            </li>
            <li>
              <Link to={'/notice'}>
                <img src="/images/notice_icon.svg" alt="" />
                <p>공지사항</p>
              </Link>
            </li>
            <li>
              <button>
                <img src="/images/logout_icon.svg" alt="" />
                <p>로그아웃</p>
              </button>
            </li>
          </ul>
        </MenuInner>
      </MenuWrap>
    </HeaderWrap>
  );
};

export default Header;
