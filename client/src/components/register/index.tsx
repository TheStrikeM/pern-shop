import React from 'react'
import './register.sass'
import RegisterForm from "./RegisterForm"
import registerImg from '../../assets/Register.svg'
import { Link } from 'react-router-dom';

const Register = ({onRegister}: {onRegister: Function}) => {
    return (
        <div>
            <div className="reg">
                <img src={registerImg} alt=""/>
                <RegisterForm onRegister={onRegister} />
                <p className={"reg__message"}>
                    Already registered?
                    <Link to={"login"} className={"default-link"}>Log in</Link>
                </p>
            </div>
        </div>
    );
};

export default Register