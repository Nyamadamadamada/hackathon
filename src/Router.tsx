import { createBrowserRouter } from "react-router-dom";

import App from "./page/App";
import UserList from "./page/UserList";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "user-list",
    element: <UserList />,
  },
]);

export default router;
