import React from 'react';
import BasicLayout from '../layouts/BasicLayout';
import { PageTitle } from '../styles/common/basic';
import {
  NoticeCon,
  NoticeItem,
  NoticeTitle,
  NoticeWrap,
} from '../styles/sub/NoticeStyle';

const Notice = () => {
  return (
    <BasicLayout>
      <PageTitle>
        <h4>Notice</h4>
        {/* <button>글쓰기</button> */}
      </PageTitle>
      <NoticeWrap>
        <NoticeItem>
          <NoticeTitle>
            <p>제목입니다.</p>
            <span>2024.03.28</span>
          </NoticeTitle>
          <NoticeCon>내용</NoticeCon>
        </NoticeItem>
        <NoticeItem>
          <NoticeTitle>
            <p>제목입니다.</p>
            <span>2024.03.28</span>
          </NoticeTitle>
          <NoticeCon>내용</NoticeCon>
        </NoticeItem>
      </NoticeWrap>
    </BasicLayout>
  );
};

export default Notice;
