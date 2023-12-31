import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

import Landingpage from "../pages/landingpage";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import Booking from "../pages/booking";
import Profile from "../pages/profile";
import Admin from "../pages/admin";
import Recipt from "../pages/recipt";
import Consult from "../pages/consult";
import { useState } from "react";
import { useEffect } from "react";

export default function Router() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      setIsLogin(true)
    }
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landingpage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "booking",
      element: <Booking />,
    },
    {
      path: "/booking/recipt",
      element: isLogin ? <Recipt /> : <Navigate to="/login" />
    },
    {
      path: "profile",
      element: <Profile />,
    },
    {
      path: "admin",
      element: <Admin />,
    },
    {
      path: "consult",
      element: <Consult />
    },
    {
      path: "*",
      element: <div>404 Not Found</div>,
    },
  ]);
  return <RouterProvider router={router} />;
}
