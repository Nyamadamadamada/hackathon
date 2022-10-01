import { createBrowserRouter } from "react-router-dom";

import Home from "./page/Home";
import UserList from "./page/UserList";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "user-list",
    element: <UserList />,
  },
]);

export default router;
