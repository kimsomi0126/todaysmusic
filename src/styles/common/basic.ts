import styled from '@emotion/styled';

export const Wrap = styled.div`
  position: relative;
  min-height: 100vh;
`;
export const PageWrap = styled.div`
  position: relative;
  max-width: 798px;
  margin: 0 auto;
  padding: 8rem 5% 0;
  color: #fff;
  overflow-x: hidden;

  a {
    color: #fff;
  }
`;

export const PageTitle = styled.div`
  margin: 0 0 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.8);
  padding: 0 3% 1rem;
  display: flex;
  justify-content: space-between;

  h4 {
    font-size: 1.8rem;
    font-weight: 300;
  }
`;
