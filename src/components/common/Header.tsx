/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
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
import HeaderMenu from './HeaderMenu';

const Header = () => {
  const [isOn, setIsOn] = useState(false);
  const [isLogin, setIsLogin] = useRecoilState(atomIsLogin);
  const { getLogOut, modalTitle, modalDesc, handleOk, modalIsOpen } =
    useLogin();

  const menuBarRef = useRef(null);
  const menuRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const isOutside = (ref: React.RefObject<HTMLDivElement>) =>
        ref.current && !ref.current.contains(e.target as Node);

      if (isOutside(menuBarRef) && isOutside(menuRef)) {
        setIsOn(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <HeaderWrap>
        <HeaderInner>
          <Link to="/" className="logo">
            <img src="/images/logo_w.svg" alt="" />
          </Link>
          <HeaderMenu />
          <MenuBar
            ref={menuBarRef}
            className={isOn ? 'on' : ''}
            onClick={e => {
              e.stopPropagation;
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
            <ul ref={menuRef}>
              <li>
                <Link to={'/notice'}>
                  <img src="/images/notice_icon.svg" alt="" />
                  <p>공지사항</p>
                </Link>
              </li>
              {isLogin ? (
                <>
                  <li>
                    <Link to={'/mypage'}>
                      <img src="/images/headphone_icon.svg" alt="" />
                      <p>내 음악</p>
                    </Link>
                  </li>
                </>
              ) : null}

              {isLogin ? (
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
              ) : (
                <li>
                  <Link to={'/login'}>
                    <img src="/images/login_icon.svg" alt="" />
                    <p>로그인</p>
                  </Link>
                </li>
              )}
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
