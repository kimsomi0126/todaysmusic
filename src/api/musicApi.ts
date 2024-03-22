import axios from 'axios';
const api_key = process.env.REACT_APP_MUSIC_API_KEY;
const yt_key = process.env.REACT_APP_YOUTUBE_API_KEY;
type Props = {
  artist: string;
  track: string;
};
// Params
// limit (Optional) : 최대 갯수
// page (Optional) : 페이지수
// album (Required) : 앨범이름
// api_key (Required) : 발급받은 api 키

const url = `https://ws.audioscrobbler.com/2.0/`;

export const getTrackInfo = async ({ artist, track }: Props) => {
  try {
    const res = await axios.get(
      `${url}/?method=track.getInfo&api_key=${api_key}&artist=${artist}&track=${track}&format=json`,
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getYoutube = async ({ artist, track }: Props) => {
  //youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=검색어&type=video&key=API키
  try {
    const res = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${artist}+${track}&type=video&key=${yt_key}`,
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
