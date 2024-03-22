import React from 'react';
import {
  LoadingBox,
  LoadingBoxWrap,
  LoadingWrap,
} from '../styles/common/loading';

const Loading = () => {
  return (
    <LoadingWrap>
      음악 추천 중
      <LoadingBoxWrap>
        <LoadingBox
          animate={{
            scale: [1, 1.2, 1.5, 1, 1],
            borderRadius: ['0%', '0%', '50%', '50%', '0%'],
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        >
          <img src="/images/logo_small_w.svg" alt="logo" />
        </LoadingBox>
      </LoadingBoxWrap>
    </LoadingWrap>
  );
};

export default Loading;
