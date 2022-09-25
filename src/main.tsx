import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import "./index.css";
import "./App.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
