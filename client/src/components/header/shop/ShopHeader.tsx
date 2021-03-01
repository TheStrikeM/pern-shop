import React from 'react'
import {logoutUser} from "../../../reducers/authReducer"
import {setKey} from "../../../reducers/headerReducer"
import { Link } from 'react-router-dom'

const ShopHeader = ({dispatch, activeItem}: {dispatch: any, activeItem: string}) => {

    const isDevices = activeItem === "devices" ? "-active" : ""
    const isBrands = activeItem === "brands" ? "-active" : ""
    const isTypes = activeItem === "types" ? "-active" : ""

    return (
        <header className={"shop-header"}>
            <p>STRIKE SHOP</p>
            <div className="links">
                <Link
                    to={"home"}
                    className={"links__link" + isDevices}
                    onClick={() => dispatch(setKey("devices"))}
                >
                    Devices
                </Link>
                <Link
                    to={"brands"}
                    onClick={() => dispatch(setKey("brands"))}
                    className={"links__link" + isBrands}
                >
                    Brands
                </Link>
                <Link
                    to={"types"}
                    onClick={() => dispatch(setKey("types"))}
                    className={"links__link" + isTypes}
                >
                    Types
                </Link>
                <Link
                    to={"types"}
                    onClick={() => dispatch(logoutUser())}
                    className="links__link"
                >
                    Logout
                </Link>

                <div className="links__basket">Basket</div>
            </div>
        </header>
    );
};

export default ShopHeader;