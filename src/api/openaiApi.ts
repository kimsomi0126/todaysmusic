import axios from 'axios';
import { OpenAiProps } from '../types/musicTypes';

const api_key = process.env.REACT_APP_OPENAI_API_KEY;

export const getAi = async ({ keyword, successFn }: OpenAiProps) => {
  try {
    const messages = [
      {
        role: 'system',
        content:
          '키워드 날씨에 어울리는 음악 최소 5곡을 [{album:"앨범명",artist:"가수이름", title:"음악이름"},{album:"앨범명", artist:"가수이름", title:"음악이름"}] 이 양식에 맞춰서 json으로 제출, 반드시 다른말 없이 json만 대답해야함.',
      },
      {
        role: 'user',
        content: keyword,
      },
    ];

    const config = {
      headers: {
        Authorization: `Bearer ${api_key}`,
        'Content-Type': 'application/json',
      },
    };
    const data = {
      model: 'gpt-3.5-turbo',
      temperature: 0.5,
      messages: messages,
    };

    const res: any = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      data,
      config,
    );
    const songList = JSON.parse(res.data.choices[0].message.content);
    successFn(songList);
  } catch (err) {
    console.error(err);
    throw err; // 에러를 다시 던짐
  }
};
