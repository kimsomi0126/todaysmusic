import React from 'react';
import {
  BgObject,
  WeatherImg,
  WeatherInfo,
  WeatherText,
} from '../styles/main/weatherStyle';
import WeatherSkeleton from './skeleton/WeatherSkeleton';
import { WeatherInfoProps } from '../types/weatherTypes';

const WeatherBox = ({ weather, lat }: WeatherInfoProps) => {
  return (
    <WeatherInfo>
      <BgObject className="obj01" />
      <BgObject className="obj02" />
      <BgObject className="obj03" />
      <WeatherImg className="weather-icon">
        <img src={weather.icon} alt={weather.description} />
      </WeatherImg>
      {lat === 0 ? (
        <WeatherSkeleton />
      ) : (
        <WeatherText>
          <ul>
            <li className="date">{weather.date.split(' ')[0]}</li>
            <li className="name">{weather.name}</li>
            <li className="temp">
              <h2>
                {weather.temp}
                <span>˚</span>
              </h2>
              <span>{weather.description}</span>
            </li>
            <li className="temp-desc">
              최저 <b>{weather.temp_min}</b> 도 | 최고 <b>{weather.temp_max}</b>{' '}
              도
            </li>
          </ul>
        </WeatherText>
      )}
    </WeatherInfo>
  );
};

export default WeatherBox;
