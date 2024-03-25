import React, { useEffect } from 'react';
import MusicVideo from '../components/music/MusicVideo';
import Header from '../components/common/Header';
import { PageWrap, Wrap } from '../styles/common/basic';
import { useColletion } from '../hooks/useColletion';
import { useRecoilState } from 'recoil';
import { atomHeartList } from '../atoms/atomMusicListState';

const BasicLayout = ({ children }: React.PropsWithChildren) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [heartList, setHeartList] = useRecoilState(atomHeartList);
  const { documents } = useColletion('mylist');
  useEffect(() => {
    setHeartList(documents);
  }, [documents]);
  console.log(documents);
  return (
    <Wrap>
      <Header />
      <PageWrap>{children}</PageWrap>
      <MusicVideo />
    </Wrap>
  );
};

export default BasicLayout;
