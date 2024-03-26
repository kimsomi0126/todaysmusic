// collectin 에 데이터들을 가져와서 출력
import { useState, useEffect } from 'react';
import { appFireStore } from '../fb/fbconfig';
import {
  onSnapshot,
  collection,
  QuerySnapshot,
  query,
  Query,
  where,
} from 'firebase/firestore';
import { useLogin } from './useLogin';

// FB 문서들을 모아 놓은 배열의 인터페이스
interface Document {
  [key: string]: any;
}

// useCollection("feedback")
// useCollection("user")
export const useColletion = (transaction: string) => {
  const [documents, setDocuments] = useState<Document[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { loginState } = useLogin();

  useEffect(() => {
    const q: Query = query(
      collection(appFireStore, transaction),
      where('uid', '==', loginState.uid),
    );

    const unsubscribe = onSnapshot(
      q,

      (snapshot: QuerySnapshot) => {
        const result: Document[] = [];
        snapshot.docs.forEach(doc => {
          result.push({ ...doc.data(), musicid: doc.id });
        });
        // 전체 FB 문서를 보관합니다.
        setDocuments(result);
        setError(null);
      },
      error => {
        setError(error.message);
      },
    );
    // 클린업 함수
    return unsubscribe;
  }, [transaction]);

  return { documents, error };
};
