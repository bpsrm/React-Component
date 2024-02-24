import ReactDOM from "react-dom/client";
import "@/styles/global.css";

//router
import { RouterProvider } from "react-router-dom";
import { router } from "@/routers/Router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
