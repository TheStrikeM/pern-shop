import React from 'react'
import Register from "../components/register"
import {useDispatch} from "react-redux";
import {registerUser} from "../actions/authActions";

const RegisterPage = () => {
    const dispatch = useDispatch()

    const onRegister = (user: any) => {
        return dispatch(registerUser(user))
    }

    return (
        <div>
            <Register onRegister={onRegister} dispatch={dispatch} />
        </div>
    )
}

export default RegisterPage