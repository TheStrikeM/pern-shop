import React from 'react'
import './register.sass'
import RegisterForm from "./RegisterForm"
import registerImg from '../../assets/Register.svg'

const Register = ({onRegister}: {onRegister: Function}) => {
    return (
        <div>
            <div className="reg">
                <img src={registerImg} alt=""/>
                <RegisterForm onRegister={onRegister} />
                <p className={"reg__message"}>Already registered? <span className={"default-link"}>Log in</span></p>
            </div>
        </div>
    );
};

export default Register