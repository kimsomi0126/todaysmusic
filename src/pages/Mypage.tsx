/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useRecoilState } from 'recoil';
import MusicList from '../components/music/MusicList';
import BasicLayout from '../layouts/BasicLayout';
import { MyMusicList, MyPageWrap } from '../styles/sub/mypageStyle';
import { PageTitle } from '../styles/common/basic';
import { atomHeartList } from '../atoms/atomMusicListState';
import { atomIsLogin } from '../atoms/atomUserState';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/common/Modal';

const Mypage = () => {
  const navigate = useNavigate();
  const [heartList, setHeartList] = useRecoilState(atomHeartList);
  //로그인체크
  const [isLogin, setIsLogin] = useRecoilState(atomIsLogin);

  return (
    <BasicLayout>
      {!isLogin ? (
        <Modal
          title={'회원전용'}
          desc={'로그인한 회원만 사용가능합니다.'}
          onClick={() => {
            navigate('/login');
          }}
          isOpen={true}
        />
      ) : (
        <MyPageWrap>
          <PageTitle>
            <h4>My Music</h4>
          </PageTitle>
          <MyMusicList>
            <MusicList music={heartList} />
          </MyMusicList>
        </MyPageWrap>
      )}
    </BasicLayout>
  );
};

export default Mypage;
