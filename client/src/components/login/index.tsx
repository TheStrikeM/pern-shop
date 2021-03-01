import React from 'react'
import './auth.sass'
import LoginForm from "./LoginForm"
import loginImg from '../../assets/Login.svg'

const Login = () => {
    return (
        <div>
            <div className="login">
                <img src={loginImg} alt=""/>
                <LoginForm />
                <p className={"login__message"}>Not registered yet? <span className={"default-link"}>Sign up</span></p>
            </div>
        </div>
    );
};

export default Login