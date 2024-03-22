import React from 'react';
import { useRecoilState } from 'recoil';
import { atomVideoId, atomVideoOpen } from '../../atoms/atomVideoState';
import { BtnWrap, YtModalWrap } from '../../styles/main/mainStyle';

const MusicVideo = () => {
  const [ytOpen, setYtOpen] = useRecoilState(atomVideoOpen);
  const [ytData, setYtData] = useRecoilState(atomVideoId);
  return (
    <>
      {ytOpen ? (
        <YtModalWrap>
          <iframe
            width="300"
            height="200"
            src={`https://www.youtube-nocookie.com/embed/${ytData}?autoplay=1&loop=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
          />
          <BtnWrap>
            <button>작게보기</button>
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
