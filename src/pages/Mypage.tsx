import React from 'react';
import { useRecoilState } from 'recoil';
import MusicList from '../components/MusicList';
import BasicLayout from '../layouts/BasicLayout';
import { MyMusicList, MyPageWrap } from '../styles/sub/mypageStyle';
import { PageTitle } from '../styles/common/basic';
import { atomHeartList } from '../atoms/atomMusicListState';

const Mypage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [heartList, setHeartList] = useRecoilState(atomHeartList);
  return (
    <BasicLayout>
      <MyPageWrap>
        <PageTitle>
          <h4>My Music</h4>
        </PageTitle>
        <MyMusicList>
          <MusicList music={heartList} />
        </MyMusicList>
      </MyPageWrap>
    </BasicLayout>
  );
};

export default Mypage;
