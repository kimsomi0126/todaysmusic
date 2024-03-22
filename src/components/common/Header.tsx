import React from 'react';
import { HeaderInner, HeaderWrap } from '../../styles/common/headerStyle';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderWrap>
      <HeaderInner>
        <Link to="/">
          <img src="/images/logo_w.svg" alt="" />
        </Link>
      </HeaderInner>
    </HeaderWrap>
  );
};

export default Header;
