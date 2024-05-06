/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { atomIsLogin } from '../../atoms/atomUserState';
import { useLogin } from '../../hooks/useLogin';
import { useState } from 'react';
import { HeaderMenuList } from '../../styles/common/headerStyle';

const HeaderMenu = () => {
  const [isOn, setIsOn] = useState(false);
  const [isLogin, setIsLogin] = useRecoilState(atomIsLogin);
  const { getLogOut } = useLogin();
  return (
    <HeaderMenuList>
      <Link to={'/notice'}>
        <p>공지사항</p>
      </Link>
      {isLogin ? (
        <Link to={'/mypage'}>
          <p>내 음악</p>
        </Link>
      ) : null}
      {isLogin ? (
        <button
          onClick={() => {
            getLogOut();
            setIsOn(false);
          }}
        >
          <p>로그아웃</p>
        </button>
      ) : (
        <Link to={'/login'}>
          <p>로그인</p>
        </Link>
      )}
    </HeaderMenuList>
  );
};

export default HeaderMenu;
