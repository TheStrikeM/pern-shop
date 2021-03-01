import React from 'react'
import Register from "../components/register"
import {useDispatch} from "react-redux";
import {registerUser} from "../actions/authActions";

const RegisterPage = () => {
    const dispatch = useDispatch()

    const onRegister = (user: any) => {
        registerUser(user, dispatch)
    }

    return (
        <div>
            <Register onRegister={onRegister} />
        </div>
    )
}

export default RegisterPage