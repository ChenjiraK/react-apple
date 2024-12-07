import React, { useEffect } from "react";
import { useRoutes, useLocation, RouteObject } from "react-router-dom";
/** pages */
import Landing from "../pages/Landing";
import ProductLOB from "../pages/LOBPage";
import Login from "../pages/Login";

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
