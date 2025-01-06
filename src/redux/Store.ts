import { configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
import Home from './Home';
import ProductLOB from './ProductLOB';
import loginStore from './store/LoginStore';
import registerStore from './store/RegisterStore';
import profileStore from './store/ProfileStore'

// กำหนด store โดยเพิ่ม counterReducer เข้ามา
const store = configureStore({
  reducer: {
    home: Home,
    productLOB: ProductLOB,
    login: loginStore,
    register: registerStore,
    profile: profileStore,
  },
//   middleware: [thunk],
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;