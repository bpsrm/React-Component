import { Fragment } from "react";

//router
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";

//pages
import NotFoundPage from "@/views/NotFoundPage";
import MainLayout from "@/views/MainLayout";
import HomePage from "@/views/Homepage";
// form
import FormTS from "@/components/forms/FormTS";

//types
const element = createRoutesFromElements(
  <Fragment>
    <Route element={<MainLayout />}>
      <Route path="*" element={<NotFoundPage />} />
      <Route index path="/" element={<HomePage />} />
      <Route path="/forms" element={<FormTS />} />
    </Route>
  </Fragment>
);

export const router = createBrowserRouter(element);