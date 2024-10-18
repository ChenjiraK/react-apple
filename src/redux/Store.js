// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
import Home from './Home';

// กำหนด store โดยเพิ่ม counterReducer เข้ามา
const store = configureStore({
  reducer: {
    home: Home,
  },
//   middleware: [thunk],
});

export default store;