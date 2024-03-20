import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/Loading";
import { Suspense, lazy } from "react";

// 메인패스 컴포넌트
const LazyMainPage = lazy(() => import("../pages/Main"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <LazyMainPage />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: <h1>404</h1>,
  },
]);

export default router;
