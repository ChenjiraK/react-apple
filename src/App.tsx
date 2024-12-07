
import React from 'react';
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

const App : React.FC = () => {
    return (
        <div className='font-medium'>
            <Header />
            <Router>
                <Routes />
            </Router>
            <hr className='my-5'/>
            <div className='px-20'>
                <Footer />
            </div>
        </div>
    );
}

export default App;

