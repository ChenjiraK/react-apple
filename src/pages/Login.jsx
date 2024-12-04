import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import InputTextHover from '../components/Input/InputTextHover.jsx';
import MainButton from "../components/Button/MainButton.jsx";
import { login } from "../redux/actions/AuthAction.js";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    // const { loading, error } = useSelector((state) => state.auth);

    function handleSubmit() {
        console.log(email);
        console.log(password);
        dispatch(login({ email, password }));
    }
    return (
        <div>
            <h1 className="text-center pt-10 pb-5">Log In</h1>
            <div className="flex justify-center">
                <div className="w-full max-w-[500px] h-auto">
                    <div>
                        <InputTextHover 
                            label="Email" 
                            type="email" 
                            onChange={setEmail} 
                        />
                    </div>
                    <div className="mt-4">
                        <InputTextHover 
                            label="Password" 
                            type="password" 
                            onChange={setPassword}
                        />
                    </div>
                    <p className="text-12 pt-3 text-blue-600 cursor-pointer">
                        Forgot your password?
                    </p>
                    <div className="flex justify-center mt-5">
                        <MainButton onClick={handleSubmit}>
                            Sign In
                        </MainButton>
                    </div>
                    <div className="flex items-center my-4 text-gray-500">
                        <div className="flex-grow border-t-2 border-gray-200"></div>
                        <span className="px-4 text-sm font-bold">Or</span>
                        <div className="flex-grow border-t-2 border-gray-200"></div>
                    </div>
                    <div className="text-md font-semibold text-center">Don't have an account? <span className="text-18 text-btn-0071e3">Sign up</span></div>
                </div>
            </div>
        </div>
    );
}

export default Login;