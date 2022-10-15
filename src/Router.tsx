import { createBrowserRouter } from "react-router-dom";

import Top from "./page/Top";
import Info from "./page/Info";
import Favorite from "./page/Favorite";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Top />,
  },
  {
    path: "info",
    element: <Info />,
  },
  {
    path: "favorite",
    element: <Favorite />,
  },
]);

export default router;
