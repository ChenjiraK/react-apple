import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './index.scss';
import './style/main.scss';
import './style/slide.scss';
import App from './App';
import store from './redux/Store';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

const root = ReactDOM.createRoot(document.getElementById('root'));
library.add(fas, fab, far);

root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
);

reportWebVitals();
