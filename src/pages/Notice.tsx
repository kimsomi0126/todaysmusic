import React, { useEffect, useState } from 'react';
import BasicLayout from '../layouts/BasicLayout';
import { PageTitle } from '../styles/common/basic';
import {
  NoticeCon,
  NoticeItem,
  NoticeTitle,
  NoticeWrap,
} from '../styles/sub/NoticeStyle';
import { getNotice } from '../api/noticeApi';
import { NoticeData } from '../types/noticeTypes';

const initNotice = [
  {
    date: '2024.00.00',
    title: 'title',
    contents: 'contents',
  },
];

const Notice = () => {
  // 공지 리스트 선택 state
  const [selectedIndex, setSelectedIndex] = useState<null | number>(null);
  const [isShowContents, setIsShowContents] = useState(false);
  // 공지 내용
  const [noticeData, setNoticeData] = useState<NoticeData[]>(initNotice);
  // 리스트 클릭 시 내용 노출
  const handleMapInfoClick = (index: number) => {
    if (selectedIndex === index && isShowContents) {
      setSelectedIndex(null);
      setIsShowContents(false);
    } else {
      setSelectedIndex(index);
      setIsShowContents(true);
    }
  };
  useEffect(() => {
    getNotice(successFn);
  }, []);

  const successFn = (res: any) => {
    setNoticeData(res);
    console.log(res);
  };

  return (
    <BasicLayout>
      <PageTitle>
        <h4>Notice</h4>
        {/* <button>글쓰기</button> */}
      </PageTitle>
      <NoticeWrap>
        {Array.isArray(noticeData) &&
          noticeData.map((item, index) => (
            <NoticeItem key={index}>
              <NoticeTitle
                onClick={() => {
                  handleMapInfoClick(index);
                }}
              >
                <p>{item.title}</p>
                <span>{item.date}</span>
              </NoticeTitle>
              <NoticeCon
                className={
                  selectedIndex === index && isShowContents ? 'on' : ''
                }
              >
                {item.contents}
              </NoticeCon>
            </NoticeItem>
          ))}

        <NoticeItem>
          <NoticeTitle
            onClick={() => {
              handleMapInfoClick(100);
            }}
          >
            <p>👩🏻‍💻 만든사람</p>
          </NoticeTitle>
          <NoticeCon
            className={selectedIndex === 100 && isShowContents ? 'on' : ''}
          >
            <p>김소미 (Front-End Developer)</p>
            <a href="https://github.com/kimsomi0126" target="_blank">
              GitHub
            </a>
            <a
              href="https://kimsomi.notion.site/2edb5c8ab3d745fabb7f021e24d4d5e5"
              target="_blank"
            >
              Notion
            </a>
          </NoticeCon>
        </NoticeItem>
      </NoticeWrap>
    </BasicLayout>
  );
};

export default Notice;
