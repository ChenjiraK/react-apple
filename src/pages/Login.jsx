import React, { Component } from "react";
import InputTextHover from '../components/Input/InputTextHover.jsx';

class Login extends Component {
  render() {
    return (
        <div>
            <h1 className="text-center">Login</h1>
            <div className="flex justify-center">
                <div className="w-full max-w-screen-sm h-auto">
                    <InputTextHover label="Username"/>
                </div>
            </div>
        </div>
        
    );
  }
}

export default Login;