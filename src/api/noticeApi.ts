import axios from 'axios';

export const getNotice = async (successFn: any) => {
  try {
    const res = await axios.get('/noticeContents.json');
    successFn(res.data);
  } catch (err) {
    console.error(err);
  }
};
