import { initializeApp } from 'firebase/app';
import { Timestamp, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// 초기화
const app = initializeApp(firebaseConfig);
// FB 데이터 베이스 사용을 위한 변수저장
const appFireStore = getFirestore(app);
const timeStamp = Timestamp;
// 외부에서 활용
export { app, appFireStore, timeStamp };
