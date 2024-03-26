/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import {
  HeaderInner,
  HeaderWrap,
  MenuBar,
  MenuInner,
  MenuWrap,
} from '../../styles/common/headerStyle';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { atomIsLogin } from '../../atoms/atomUserState';
import { useLogin } from '../../hooks/useLogin';
import Modal from './Modal';

const Header = () => {
  const [isOn, setIsOn] = useState(false);
  const [isLogin, setIsLogin] = useRecoilState(atomIsLogin);
  const { getLogOut, modalTitle, modalDesc, handleOk, modalIsOpen } =
    useLogin();

  return (
    <>
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
              {isLogin ? (
                <>
                  <li>
                    <Link to={'/mypage'}>
                      <img src="/images/headphone_icon.svg" alt="" />
                      <p>내 음악</p>
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        getLogOut();
                        setIsOn(false);
                      }}
                    >
                      <img src="/images/logout_icon.svg" alt="" />
                      <p>로그아웃</p>
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <Link to={'/login'}>
                    <img src="/images/login_icon.svg" alt="" />
                    <p>로그인</p>
                  </Link>
                </li>
              )}

              <li>
                <Link to={'/notice'}>
                  <img src="/images/notice_icon.svg" alt="" />
                  <p>공지사항</p>
                </Link>
              </li>
            </ul>
          </MenuInner>
        </MenuWrap>
      </HeaderWrap>
      <Modal
        title={modalTitle}
        desc={modalDesc}
        onClick={handleOk}
        isOpen={modalIsOpen}
      />
    </>
  );
};

export default Header;
