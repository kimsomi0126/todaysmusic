import styled from '@emotion/styled';

export const NoticeWrap = styled.div``;
export const NoticeItem = styled.div``;
export const NoticeTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  :hover {
    background: rgba(255, 255, 255, 0.1);
  }
  span {
    color: #888;
    font-size: 1.4rem;
  }
`;
export const NoticeCon = styled.pre`
  padding: 0 2rem;
  white-space: pre-wrap;
  background: rgba(0, 0, 0, 0.3);
  font-size: 1.4rem;
  overflow: hidden;
  height: 0;
  transition: 0.3s;
  line-height: 1.8;
  p {
    margin-bottom: 1rem;
  }
  a {
    display: inline-block;
    background: rgba(255, 255, 255, 0.2);
    margin-right: 2rem;
    padding: 0.25rem 1rem;
    transition: 0.2s;
    :hover {
      background: rgba(255, 255, 255, 0.5);
    }
  }
  &.on {
    padding: 2rem;
    height: auto;
    overflow: auto;
  }
`;
