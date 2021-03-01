import React from 'react'
import './shop-header.sass'
import {logoutUser} from "../../../reducers/authReducer";
import { Link } from 'react-router-dom';

const ShopHeader = ({dispatch, activeItem}: {dispatch: any, activeItem: string}) => {
    return (
        <header>
            <p>STRIKE SHOP</p>
            <div className="links">
                <Link
                    to={"shop"}
                    className="login-link-active"
                >
                    Devices
                </Link>
                <Link
                    to={"brands"}
                    onClick={() => dispatch(logoutUser())}
                    className="reg-link"
                >
                    Brands
                </Link>
                <Link
                    to={"types"}
                    onClick={() => dispatch(logoutUser())}
                    className="reg-link"
                >
                    Types
                </Link>

                <div className="links__basket">Basket</div>
            </div>
        </header>
    );
};

export default ShopHeader;