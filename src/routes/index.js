import React, {useEffect} from 'react';
import { useRoutes, useLocation } from 'react-router-dom';
/** pages */
import Landing from '../pages/Landing';
import ProductLOB from '../pages/LOBPage.jsx';

const routes = [
    {
        path: '/',
        element: <Landing />,
    },
    {
        path: '/view-all/:slug',
        element: <ProductLOB />
    }
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