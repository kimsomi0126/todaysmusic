import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { atomVideoId, atomVideoOpen } from '../../atoms/atomVideoState';
import { BtnWrap, YtModalWrap } from '../../styles/main/mainStyle';

const MusicVideo = () => {
  const [ytOpen, setYtOpen] = useRecoilState(atomVideoOpen);
  const [ytData, setYtData] = useRecoilState(atomVideoId);
  const [isSmall, setIsSmall] = useState(false);
  return (
    <>
      {ytOpen ? (
        <YtModalWrap>
          <iframe
            className={isSmall ? 'on' : ''}
            src={`https://www.youtube-nocookie.com/embed/${ytData}?autoplay=1&loop=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
          />
          <BtnWrap>
            <button
              onClick={() => {
                setIsSmall(!isSmall);
              }}
            >
              {isSmall ? '크게보기' : '작게보기'}
            </button>
            <button
              onClick={() => {
                setYtOpen(false);
                setYtData('');
              }}
            >
              닫기
            </button>
          </BtnWrap>
        </YtModalWrap>
      ) : null}
    </>
  );
};

export default MusicVideo;
