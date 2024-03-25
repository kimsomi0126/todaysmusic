import React from 'react';
import { useRecoilState } from 'recoil';
import { atomHeartList } from '../atoms/atomMusicListState';
import MusicList from '../components/MusicList';
import BasicLayout from '../layouts/BasicLayout';
import { MyMusicList, MyPageWrap } from '../styles/sub/mypageStyle';
import { PageTitle } from '../styles/common/basic';

const Mypage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [heartList, setHeartList] = useRecoilState(atomHeartList);
  console.log(heartList);

  return (
    <BasicLayout>
      <MyPageWrap>
        <PageTitle>
          <h4>My Music</h4>
        </PageTitle>
        <MyMusicList>
          <MusicList music={heartList} check={true} />
        </MyMusicList>
      </MyPageWrap>
    </BasicLayout>
  );
};

export default Mypage;
