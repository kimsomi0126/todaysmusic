import React from 'react';
import BasicLayout from '../layouts/BasicLayout';
import { PageTitle } from '../styles/common/basic';

const Notice = () => {
  return (
    <BasicLayout>
      <PageTitle>
        <h4>Notice</h4>
        <button>글쓰기</button>
      </PageTitle>
    </BasicLayout>
  );
};

export default Notice;
