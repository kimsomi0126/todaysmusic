// collectin 에 데이터들을 가져와서 출력
import { useState, useEffect } from 'react';
import { appFireStore } from '../fb/fbconfig';
import {
  onSnapshot,
  collection,
  QuerySnapshot,
  query,
  Query,
  orderBy,
} from 'firebase/firestore';

// FB 문서들을 모아 놓은 배열의 인터페이스
interface Document {
  id: string;
  [key: string]: any;
}

export const useColletion = (transaction: string) => {
  // collectin 의 내용을 state 에 보관
  const [documents, setDocuments] = useState<Document[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  // collection 이 변경된 경우 실행하도록 설정
  useEffect(() => {
    const q: Query = query(
      collection(appFireStore, transaction),
      orderBy('createdTime', 'desc'),
    );

    // 참조 = collection(FB프로젝트, collection 폴더명 )
    const unsubscribe = onSnapshot(
      q,

      (snapshot: QuerySnapshot) => {
        const result: Document[] = [];
        snapshot.docs.forEach(doc => {
          result.push({ ...doc.data(), id: doc.id });
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
