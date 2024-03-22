import { createBrowserRouter } from 'react-router-dom';
import Loading from '../components/Loading';
import { Suspense, lazy } from 'react';

// 메인패스 컴포넌트
const LazyMainPage = lazy(() => import('../pages/Main'));
const LazyMypagePage = lazy(() => import('../pages/Mypage'));
const LazyNoticePage = lazy(() => import('../pages/Notice'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Loading />}>
        <LazyMainPage />
      </Suspense>
    ),
  },
  {
    path: '/mypage',
    element: (
      <Suspense fallback={<Loading />}>
        <LazyMypagePage />
      </Suspense>
    ),
  },
  {
    path: '/notice',
    element: (
      <Suspense fallback={<Loading />}>
        <LazyNoticePage />
      </Suspense>
    ),
  },
  {
    path: '*',
    element: <h1>404</h1>,
  },
]);

export default router;
