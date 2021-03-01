import React from 'react'
import './login.sass'
import LoginForm from "./LoginForm"
import loginImg from '../../assets/Login.svg'
import { Link } from 'react-router-dom';

const Login = ({onLogin, dispatch}: {onLogin: Function, dispatch: any}) => {
    return (
        <div>
            <div className="login">
                <img src={loginImg} alt=""/>
                <LoginForm onLogin={onLogin} dispatch={dispatch} />
                <p className={"login__message"}>
                    Not registered yet?
                    <Link to={"register"} className={"default-link"}>Sign up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login