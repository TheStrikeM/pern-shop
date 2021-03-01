import React from 'react'
import './shop-header.sass'
import {logoutUser} from "../../../reducers/authReducer";
import { Link } from 'react-router-dom';

const ShopHeader = ({dispatch, activeItem}: {dispatch: any, activeItem: string}) => {
    return (
        <header>
            <Link to={"shop"} className="login-link-active">Sex in</Link>
            <Link to={"shop"} onClick={() => dispatch(logoutUser())} className="reg-link">Logout</Link>
        </header>
    );
};

export default ShopHeader;