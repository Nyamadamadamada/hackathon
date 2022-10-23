import { createBrowserRouter } from "react-router-dom";

import Top from "./page/Top";
import Info from "./page/Info";
import History from "./page/History";
import Detail from "./page/Detail";
import App from "./App";
import SafeDetail from "./page/SafeDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Top />,
      },
      {
        path: "info",
        element: <Info />,
      },
      {
        path: "history",
        element: <History />,
      },
      {
        path: "detail/:itemId",
        element: <Detail />,
      },
      {
        path: "detail/ok/:itemId",
        element: <SafeDetail />,
      },
    ],
  },

  {
    path: "*",
    element: (
      <div>
        <p>ページが見つかりません</p>
        <p>404</p>
      </div>
    ),
  },
]);

export default router;
