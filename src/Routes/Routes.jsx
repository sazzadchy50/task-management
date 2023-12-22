import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home/Home";

import Dashboard from "../Dashboard/Dashboard";
import DashboardLayout from "../Layout/DashboardLayout";
import AddTask from "../Dashboard/AddTask";
import PreviousTask from "../Dashboard/PreviousTask/PreviousTask";
import Login from "../Components/Login/Login";
import SignUp from "../Components/SignUp/SignUp";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"/login",
        element: <Login/>
      },
      {
        path: "/signUp",
        element: <SignUp/>
      }
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard/add-task",
        element: <AddTask />,
      },
      {
        path: "/dashboard/previous-task",
        element: <PreviousTask/>
      }
    ],
  },
  {},
]);
