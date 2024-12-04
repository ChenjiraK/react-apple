// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
import Home from './Home';
import ProductLOB from './ProductLOB';
import authStore from './store/AuthStore';

// กำหนด store โดยเพิ่ม counterReducer เข้ามา
const store = configureStore({
  reducer: {
    home: Home,
    productLOB: ProductLOB,
    auth: authStore,
  },
//   middleware: [thunk],
});

export default store;