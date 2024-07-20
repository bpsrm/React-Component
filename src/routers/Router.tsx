//router
import * as DOM from "react-router-dom";
// import { createRoutesFromElements, createBrowserRouter, Route } from "react-router-dom";

//pages
import NotFoundPage from "@/views/NotFoundPage";
import MainLayout from "@/views/MainLayout";
import HomePage from "@/views/Homepage";

//components
import MainFormTS from "@/components/forms/MainFormTS";
import DatePicker from "@/components/datePicker/MainDatePicker";
import Pagination from "@/components/pagination/MainPagination";

const element = DOM.createRoutesFromElements(
  <DOM.Route element={<MainLayout />}>
    <DOM.Route path="*" element={<NotFoundPage />} />
    <DOM.Route index path="/" element={<HomePage />} />
    <DOM.Route path="/forms" element={<MainFormTS />} />
    <DOM.Route path="/date-picker" element={<DatePicker />} />
    <DOM.Route path="/pagination" element={<Pagination />} />
  </DOM.Route>
);

export const router = DOM.createBrowserRouter(element);
