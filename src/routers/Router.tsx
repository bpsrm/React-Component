//router
import { createRoutesFromElements, createBrowserRouter, Route } from "react-router-dom";

//pages
import NotFoundPage from "@/views/NotFoundPage";
import MainLayout from "@/views/MainLayout";
import HomePage from "@/views/Homepage";

// form
import MainFormTS from "@/components/forms/MainFormTS";
//date-picker
import DatePicker from "@/components/datePicker/MainDatePicker";
//pagination
import Pagination from "@/components/pagination/MainPagination";

//types
const element = createRoutesFromElements(
  <Route element={<MainLayout />}>
    <Route path="*" element={<NotFoundPage />} />
    <Route index path="/" element={<HomePage />} />
    <Route path="/forms" element={<MainFormTS />} />
    <Route path="/date-picker" element={<DatePicker />} />
    <Route path="/pagination" element={<Pagination />} />
  </Route>
);

export const router = createBrowserRouter(element);
