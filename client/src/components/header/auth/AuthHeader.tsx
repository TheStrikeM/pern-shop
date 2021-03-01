import React from 'react'
import { Link } from 'react-router-dom'
import {setKey} from "../../../reducers/headerReducer"

const AuthHeader = ({dispatch, activeItem}: {dispatch: any, activeItem: string}) => {
    const isLogin = activeItem === "shop" ? '-active' : ''
    const isRegister = activeItem === "register" ? '-active' : ''
    return (
        <header className={"auth"}>
            <Link
                to={"shop"}
                onClick={() => dispatch(setKey('shop'))}
                className={"auth-link" + isLogin}
            >
                Log in
            </Link>

            <Link
                to={"register"}
                onClick={() => dispatch(setKey('register'))}
                className={"reg-link" + isRegister}
            >
                Register
            </Link>
        </header>
    )
}

export default AuthHeader