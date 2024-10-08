// src/App.js (React.js)
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

function App() {
    return (
        <div>
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
