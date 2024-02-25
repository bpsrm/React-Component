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
import MainFormTS from "@/components/forms/MainFormTS";
//date-picker
import DatePicker from "@/components/datePicker/DatePicker";

//types
const element = createRoutesFromElements(
  <Fragment>
    <Route element={<MainLayout />}>
      <Route path="*" element={<NotFoundPage />} />
      <Route index path="/" element={<HomePage />} />
      <Route path="/forms" element={<MainFormTS />} />
      <Route path="/date-picker" element={<DatePicker />} />
    </Route>
  </Fragment>
);

export const router = createBrowserRouter(element);
