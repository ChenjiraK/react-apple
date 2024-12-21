import React, { useEffect } from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import { ToastContainer } from './components/Alert/Alert.tsx';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import { setToken } from './redux/store/LoginStore';

const App: React.FC = () => {
   useEffect(() => {
      setToken();
   }, []);
   return (
      <div className="font-medium">
         <Router>
            <ToastContainer />
            <Header />
            <Routes />
            <hr className="my-5" />
            <div className="px-20">
               <Footer />
            </div>
         </Router>
      </div>
   );
};

export default App;
