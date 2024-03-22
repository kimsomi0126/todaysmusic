import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { LoadingWeather } from '../../styles/common/loading';

const WeatherSkeleton = () => {
  return (
    <>
      <SkeletonTheme
        baseColor="rgba(24, 24, 24, 0.8)"
        highlightColor="rgba(150, 150, 150, 0.1)"
      >
        <LoadingWeather className="loading-weather">
          <Skeleton width="20rem" />
          <Skeleton width="10rem" />
          <Skeleton width="15rem" height="8rem" />
          <Skeleton width="20rem" />
        </LoadingWeather>
      </SkeletonTheme>
    </>
  );
};

export default WeatherSkeleton;
