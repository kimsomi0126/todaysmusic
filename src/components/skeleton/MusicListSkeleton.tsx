import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { LoadingMusic } from '../../styles/common/loading';

const MusicListSkeleton = () => {
  return (
    <div>
      <SkeletonTheme
        baseColor="#072045"
        highlightColor="rgba(150, 150, 150, 0.1)"
      >
        <LoadingMusic>
          <Skeleton width="6rem" height="6rem" className="loading-image" />
          <div>
            <Skeleton width="30vw" />
            <Skeleton width="28vw" />
            <Skeleton width="38vw" />
          </div>
        </LoadingMusic>
        <LoadingMusic>
          <Skeleton width="6rem" height="6rem" className="loading-image" />
          <div>
            <Skeleton width="30vw" />
            <Skeleton width="28vw" />
            <Skeleton width="38vw" />
          </div>
        </LoadingMusic>
        <LoadingMusic>
          <Skeleton width="6rem" height="6rem" className="loading-image" />
          <div>
            <Skeleton width="30vw" />
            <Skeleton width="28vw" />
            <Skeleton width="38vw" />
          </div>
        </LoadingMusic>
      </SkeletonTheme>
    </div>
  );
};

export default MusicListSkeleton;
