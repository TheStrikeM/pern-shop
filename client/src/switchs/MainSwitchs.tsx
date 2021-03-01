import React from 'react'
import AuthSwitch from "./AuthSwitch"
import ShopSwitch from "./ShopSwitch"
import Header from "../components/header/Header"
import {useSelector} from "react-redux";
import Footer from "../components/footer/Footer";

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
                        <Footer />
                    </>
                )
            }
        </div>
    )
}

export default MainSwitchs