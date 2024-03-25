export type Music = {
  album: string;
  artist: string;
  image: string;
  title: string;
  link: { youtube: string; melon: string };
};

export type MusicProps = {
  music: any;
  check?: boolean;
};

export type OpenAiProps = {
  keyword: string;
  successFn: any;
};

export type VideoType = {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: [
    {
      kind: string;
      etag: string;
      id: {
        kind: string;
        videoId: string;
      };
      snippet: {
        publishedAt: string;
        channelId: string;
        title: string;
        description: string;
        thumbnails: {
          default: {
            url: string;
            width: number;
            height: number;
          };
          medium: {
            url: string;
            width: number;
            height: number;
          };
          high: {
            url: string;
            width: number;
            height: number;
          };
        };
        channelTitle: string;
        liveBroadcastContent: string;
        publishTime: string;
      };
    },
  ];
};

export type MusicAddItem = {
  uid: number;
  musicid: string;
  music: Music;
};
