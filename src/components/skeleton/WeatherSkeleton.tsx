import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { LoadingWeather } from '../../styles/common/loading';

const WeatherSkeleton = () => {
  return (
    <>
      <SkeletonTheme baseColor="#3d3d3d" highlightColor="#444">
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
