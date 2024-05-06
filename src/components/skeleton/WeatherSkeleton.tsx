import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { LoadingWeather } from '../../styles/common/loading';

const WeatherSkeleton = () => {
  return (
    <>
      <SkeletonTheme
        baseColor="#072045"
        highlightColor="rgba(150, 150, 150, 0.1)"
      >
        <LoadingWeather className="loading-weather">
          <Skeleton width="30vw" height="2rem" />
          <Skeleton width="20vw" height="2rem" />
          <Skeleton width="25vw" height="12rem" />
          <Skeleton width="30vw" height="2rem" />
        </LoadingWeather>
      </SkeletonTheme>
    </>
  );
};

export default WeatherSkeleton;
