import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/Store';
import './index.css';
import './index.scss';
import './style/main.scss';
import './style/slide.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import App from './App.tsx';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
library.add(fas, fab, far);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
