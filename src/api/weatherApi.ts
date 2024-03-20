import axios from 'axios';
import { WeatherGetProps } from '../types/weatherTypes';

const api_key = process.env.REACT_APP_API_KEY;

export const getWeather = async ({ lat, lng, successFn }: WeatherGetProps) => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&cnt=1&appid=${api_key}&units=metric&lang=kr`,
    );
    // console.log(res.data);
    successFn(res.data);
  } catch (err) {
    console.error(err);
    throw err; // 에러를 다시 던짐
  }
};
