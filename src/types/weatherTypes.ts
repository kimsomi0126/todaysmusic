export type Weather = {
  description: string;
  name: string;
  temp: number;
  temp_min: number;
  temp_max: number;
  date: string;
  icon: string;
};

export type WeatherGetProps = {
  lat: number;
  lng: number;
  successFn: any;
};

export type WeatherInfoProps = {
  weather: Weather;
  lat: number;
};
