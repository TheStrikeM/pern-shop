import React from 'react'
import AuthSwitch from "./AuthSwitch"
import ShopSwitch from "./ShopSwitch"
import Header from "../components/header/Header"
import {useSelector} from "react-redux";
import Footer from "../components/footer/Footer";
import { Switch } from 'react-router-dom';

const MainSwitchs = () => {
    const {isAuth} = useSelector((state: any) => ({
        isAuth: state.auth.isAuth
    }))
    console.log(`${isAuth} это MainSwitch`)

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