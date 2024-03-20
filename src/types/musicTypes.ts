export type Music = {
  album: string;
  artist: string;
  image: string;
  title: string;
  link: { youtube: string; melon: string };
};

export type MusicProps = {
  music: any;
};

export type OpenAiProps = {
  keyword: string;
  successFn: any;
};
