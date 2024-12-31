import React, { useEffect } from "react";
import { useRoutes, useLocation, RouteObject } from "react-router-dom";
/** pages */
import Landing from "../pages/Landing";
import ProductLOB from "../pages/LOBPage";
import Login from "../pages/Login";
import Register from "../pages/Register.tsx";
import Profile from '../pages/Profile.tsx';

const routes: RouteObject[] = [
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/",
        element: <Landing />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/profile",
        element: <Profile />,
    },
    {
        path: "/view-all/:slug",
        element: <ProductLOB />,
    },
];

const Routes: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const routing = useRoutes(routes);
  return routing;
};

export default Routes;
