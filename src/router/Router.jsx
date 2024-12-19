import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/jobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";
import MyApplications from "../pages/MyApplications/MyApplications";
import AddJob from "../pages/AddJob/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import ViewApplications from "../pages/viewApplications/ViewApplications";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <h2>Route not found</h2>,
      },
      {
        path: "/jobs/:id",
        element: (
          <PrivateRoute>
            <JobDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
      },
      {
        path: "/jobApply/:id",
        element: (
          <PrivateRoute>
            <JobApply />
          </PrivateRoute>
        ),
      },
      {
        path: "/myApplications",
        element: (
          <PrivateRoute>
            <MyApplications />
          </PrivateRoute>
        ),
      },
      {
        path: "/addjob",
        element: (
          <PrivateRoute>
            <AddJob />
          </PrivateRoute>
        ),
      },
      {
        path: "/myPostedJobs",
        element: (
          <PrivateRoute>
            <MyPostedJobs />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/ViewApplications/:job_id",
        element: (
          <PrivateRoute>
            <ViewApplications />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/job-applications/jobs/${params.job_id}`),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
    ],
  },
]);

export default router;
