import { useEffect, useRef, useState } from 'react';
import useGeolocation from '../hooks/useGeolocation';
import { getWeather } from '../api/weatherApi';
import Loading from '../components/Loading';
import MusicList from '../components/music/MusicList';
import { getTrackInfo } from '../api/musicApi';
import { getAi } from '../api/openaiApi';
import { WeatherWrap } from '../styles/main/weatherStyle';
import { MusicAddItem } from '../types/musicTypes';
import { Weather } from '../types/weatherTypes';
import { useGSAP } from '@gsap/react';
import { MainWrap, RecommendBtn } from '../styles/main/mainStyle';
import gsap from 'gsap';
import 'react-loading-skeleton/dist/skeleton.css';
import MusicListSkeleton from '../components/skeleton/MusicListSkeleton';
import { MusicWrap, RefreshBtn } from '../styles/main/musicListStyle';
import WeatherBox from '../components/WeatherBox';
import { useRecoilState } from 'recoil';
import { atomMusicList } from '../atoms/atomMusicListState';
import BasicLayout from '../layouts/BasicLayout';
import { useLogin } from '../hooks/useLogin';

const initWeather = {
  description: '',
  name: '',
  temp: 0,
  temp_min: 0,
  temp_max: 0,
  date: '',
  icon: '',
};
gsap.registerPlugin(useGSAP);

const Main = () => {
  // 날씨정보
  const [weather, setWeather] = useState<Weather>(initWeather);
  // 음악 정보
  const [music, setMusic] = useRecoilState(atomMusicList);
  // 로딩체크
  const [loading, setLoding] = useState(false);
  const [countdown, setCountdown] = useState(0);
  // 로그인 체크
  const { loginState } = useLogin();
  // 현재 좌표
  const location = useGeolocation();
  const coordinates = location.coordinates || { lat: 0, lng: 0 };
  const lat = coordinates.lat;
  const lng = coordinates.lng;
  // GSAP 실행
  gsap.registerPlugin(useGSAP);
  const container: any = useRef();

  // 랜더링 완료 후 화면출력
  useEffect(() => {
    // 구름 애니메이션
    const clouds = (num: string) => {
      gsap
        .timeline()
        .to('.obj' + num, { y: 0, duration: 1, repeat: -1, yoyo: true })
        .to('.obj' + num, { y: 5, duration: 1, repeat: -1, yoyo: true });
    };
    clouds('01');
    clouds('02');
    clouds('03');

    // 좌표값이 있을때 날씨정보 가져오기
    if (lat !== 0) {
      getWeather({ lat, lng, successFn });
      gsap.to('.weather-icon', { x: 0, opacity: 1, duration: 1 });
    }
    // contdown 설정되면 20초 제한
    if (countdown > 0) {
      // 음악추천 시간제한
      const timer = setInterval(() => {
        setCountdown(prevCountdown => {
          if (prevCountdown === 0) {
            clearInterval(timer);
          }
          return prevCountdown - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [lat, music]);
  // 추천받기 클릭
  const handleClickRecommend = () => {
    getAi({ keyword: weather.description, successFn: successAiFn });
    setLoding(true);
    setCountdown(20);
  };
  // 날씨정보 가져오기 성공
  const successFn = (res: any) => {
    // 날씨 아이콘 가져오기
    const weatherIcon = res.list[0].weather[0].icon;
    const date = res.list[0].dt_txt;
    const weatherIconAdrs = `https://openweathermap.org/img/wn/${weatherIcon}@4x.png`;
    // 소수점 버리기
    const temp = Math.round(res.list[0].main.temp);
    const temp_min = Math.round(res.list[0].main.temp_min);
    const temp_max = Math.round(res.list[0].main.temp_max);

    setWeather({
      description: res.list[0].weather[0].description,
      name: res.city.name,
      temp,
      temp_min,
      temp_max,
      date,
      icon: weatherIconAdrs,
    });
  };
  // 음악 추천받기 성공
  const successAiFn = async (res: any) => {
    const arr: MusicAddItem[] = [];
    console.log('결과값', res);
    setLoding(false);

    // 음악추천 가수 + 노래명으로 앨범커버 가져오기
    // 비동기 작업이 완료되면 실행
    await Promise.all(
      res.map(async (item: any) => {
        const artist = item.artist;
        const track = item.title;
        const data = await getTrackInfo({ artist, track });
        const imageUrl =
          data.error ||
          !data.track.album ||
          data.track.album.image[1]['#text'] === ''
            ? process.env.PUBLIC_URL + '/images/no_image.jpg'
            : data.track.album.image[1]['#text'];

        const obj = {
          ...item,
          image: imageUrl,
          link: {
            youtube: `https://music.youtube.com/search?q=${item.artist}+${item.title}`,
            melon: `https://www.melon.com/search/song/index.htm?q=${item.artist}+${item.title}`,
          },
          uid: loginState.uid,
          musicid: 0,
        };
        // arr 배열에 추가
        arr.push(obj);
        console.log(obj);
      }),
    );

    setMusic(arr);
  };

  // console.log(music);

  return (
    <>
      <BasicLayout>
        <MainWrap ref={container}>
          {/* 날씨정보 */}
          <WeatherWrap>
            <WeatherBox weather={weather} lat={lat} />
          </WeatherWrap>
          {/* 음악리스트 */}
          <MusicWrap>
            {lat === 0 ? (
              <MusicListSkeleton />
            ) : music.length === 1 ? (
              <>
                <RecommendBtn onClick={handleClickRecommend}>
                  음악 추천 받기
                </RecommendBtn>
                {loading ? <Loading /> : null}
              </>
            ) : (
              <>
                <h4>
                  Music Recommend
                  {countdown > 0 ? (
                    <p>{countdown}</p>
                  ) : (
                    <RefreshBtn onClick={handleClickRecommend}>
                      다시 추천받기
                    </RefreshBtn>
                  )}
                </h4>
                <MusicList music={music} />
              </>
            )}
          </MusicWrap>
        </MainWrap>
      </BasicLayout>
    </>
  );
};

export default Main;
