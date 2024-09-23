import React, {useEffect} from 'react';
import { useRoutes, useLocation } from 'react-router-dom';
/** pages */
import Landing from '../pages/Landing';

const routes = [
  {
      path: '/',
      element: <Landing />,
  },
];

const Routes = () => {
  const location = useLocation();

  useEffect(() => {
      window.scrollTo(0, 0);
  }, [location]);

  const routing = useRoutes(routes);
  return routing;
};

export default Routes;