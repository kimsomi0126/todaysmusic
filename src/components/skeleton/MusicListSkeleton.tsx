import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { LoadingMusic } from '../../styles/common/loading';

const MusicListSkeleton = () => {
  return (
    <div>
      <SkeletonTheme baseColor="#3d3d3d" highlightColor="#444">
        <LoadingMusic>
          <Skeleton width="6rem" height="6rem" className="loading-image" />
          <div>
            <Skeleton width="15rem" />
            <Skeleton width="15rem" />
            <Skeleton width="10.5rem" />
          </div>
        </LoadingMusic>
        <LoadingMusic>
          <Skeleton width="6rem" height="6rem" className="loading-image" />
          <div>
            <Skeleton width="15rem" />
            <Skeleton width="15rem" />
            <Skeleton width="10.5rem" />
          </div>
        </LoadingMusic>
        <LoadingMusic>
          <Skeleton width="6rem" height="6rem" className="loading-image" />
          <div>
            <Skeleton width="15rem" />
            <Skeleton width="15rem" />
            <Skeleton width="10.5rem" />
          </div>
        </LoadingMusic>
      </SkeletonTheme>
    </div>
  );
};

export default MusicListSkeleton;
