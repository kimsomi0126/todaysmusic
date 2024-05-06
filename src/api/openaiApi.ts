import axios from 'axios';
import { OpenAiProps } from '../types/musicTypes';

const api_key = process.env.REACT_APP_OPENAI_API_KEY;

export const getAi = async ({ keyword, successFn }: OpenAiProps) => {
  try {
    const messages = [
      {
        role: 'system',
        content:
          'Provide a JSON with at least 5 songs that match the keyword "weather-appropriate music" in the following format: [{album:"Album Title", artist:"Artist Name", title:"Song Title"}, {album:"Album Title", artist:"Artist Name", title:"Song Title"}]. Responses must be in JSON format only without any additional text.',
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
