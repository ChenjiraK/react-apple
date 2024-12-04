// actions/authActions.js
import { loginStart, loginSuccess, loginFailure } from '../store/AuthStore';
import { apiLogin } from '../../services/api/login.api';

export const login = (params) => async (dispatch) => {
    dispatch(loginStart());
    await apiLogin(params).then((response) => {
        console.log(response);
        // const { user, token } = response.data;
        dispatch(loginSuccess({}));
    }).catch((error) => {
        console.log(error);
        // dispatch(loginFailure(error.response.data.message));
    });
};
