import React from 'react'
import AuthSwitch from "./AuthSwitch"
import ShopSwitch from "./ShopSwitch"
import Header from "../components/header/Header"
import {useSelector} from "react-redux";

const MainSwitchs = () => {
    const {isAuth} = useSelector((state: any) => ({
        isAuth: state.auth.isAuth
    }))

    return (
        <div>
            {isAuth ?
                (
                    <>
                       <Header type={"shop"} />
                       <ShopSwitch />
                    </>
                )
                :
                (
                    <>
                        <Header type={"auth"} />
                        <AuthSwitch />
                    </>
                )
            }
        </div>
    )
}

export default MainSwitchs