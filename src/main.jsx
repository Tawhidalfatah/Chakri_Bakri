import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./components/Home/Home";
import App from "./App";
import Statistics from "./components/Statistics/Statistics";
import Applied from "./components/Applied/Applied";
import Blog from "./components/Blog/Blog";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import JobDetails from "./components/JobDetails/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/jobs.json"),
      },
      {
        path: "job/:id",
        element: <JobDetails></JobDetails>,
        loader: ({ params }) => fetch("/jobs.json"),
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "applied_jobs",
        element: <Applied></Applied>,
        loader: () => fetch("/jobs.json"),
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
