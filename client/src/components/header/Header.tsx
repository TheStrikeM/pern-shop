import React from 'react'
import './header.sass'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from "react-redux";
import {setKey} from "../../reducers/headerReducer";
import {logoutUser} from "../../reducers/authReducer";

const Header = ({type}: any) => {
    const {activeItem} = useSelector((state: any) => ({
        activeItem: state.header.active
    }))
    const dispatch = useDispatch()

    if(type === "auth") {
        const isLogin = activeItem === "login" ? '-active' : ''
        const isRegister = activeItem === "register" ? '-active' : ''
        return (
            <header>
                <Link
                    to={"login"}
                    onClick={() => dispatch(setKey('login'))}
                    className={"login-link" + isLogin}
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
        );
    }

    return (
        <header>
            <Link to={"shop"} className="login-link-active">Sex in</Link>
            <Link to={"shop"} onClick={() => dispatch(logoutUser())} className="reg-link">Logout</Link>
        </header>
    );
};

export default Header;