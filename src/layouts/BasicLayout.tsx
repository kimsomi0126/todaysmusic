import React, { useEffect } from 'react';
import MusicVideo from '../components/music/MusicVideo';
import Header from '../components/common/Header';
import { PageWrap, Wrap } from '../styles/common/basic';
import { useColletion } from '../hooks/useColletion';
import { useRecoilState } from 'recoil';
import { atomHeartList } from '../atoms/atomMusicListState';

const BasicLayout = ({ children }: React.PropsWithChildren) => {
  const { documents } = useColletion('mylist');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [heartList, setHeartList] = useRecoilState(atomHeartList);
  useEffect(() => {
    getList();
  }, [documents]);
  const getList = async () => {
    try {
      await setHeartList(documents);
    } catch (error) {
      console.log(error);
    }
  };
  console.log('좋아요 음악', heartList);
  console.log('좋아요 document', documents);

  return (
    <Wrap>
      <Header />
      <PageWrap>{children}</PageWrap>
      <MusicVideo />
    </Wrap>
  );
};

export default BasicLayout;
