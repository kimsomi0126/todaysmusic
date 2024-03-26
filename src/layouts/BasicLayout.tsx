/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import MusicVideo from '../components/music/MusicVideo';
import Header from '../components/common/Header';
import { PageWrap, Wrap } from '../styles/common/basic';
import { useColletion } from '../hooks/useColletion';
import { useRecoilState } from 'recoil';
import { atomHeartList } from '../atoms/atomMusicListState';
import { useLogin } from '../hooks/useLogin';

const BasicLayout = ({ children }: React.PropsWithChildren) => {
  const { documents } = useColletion('mylist');
  const [heartList, setHeartList] = useRecoilState(atomHeartList);
  const { loginCheck } = useLogin();

  useEffect(() => {
    getList();
    loginCheck();
  }, [documents]);

  // fb에 저장된 내 음악 리스트
  const getList = async () => {
    try {
      await setHeartList(documents);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrap>
      <Header />
      <PageWrap>{children}</PageWrap>
      <MusicVideo />
    </Wrap>
  );
};

export default BasicLayout;
