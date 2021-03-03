import React from 'react'
import Login from "../components/login"
import {loginUser} from "../actions/authActions";
import {useDispatch} from "react-redux";

const LoginPage = () => {
    const dispatch = useDispatch()

    const onLogin = (user: any) => {
        return dispatch(loginUser(user))
    }

    return (
        <div>
            <Login dispatch={dispatch} onLogin={onLogin} />
        </div>
    )
}

export default LoginPage