import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import AuthHeader from "./auth/AuthHeader"
import ShopHeader from "./shop/ShopHeader"

const Header = ({type}: any) => {
    const {activeItem} = useSelector((state: any) => ({
        activeItem: state.header.active
    }))
    const dispatch = useDispatch()


    if(type === "auth") {
        return (<AuthHeader dispatch={dispatch} activeItem={activeItem} />)
    }
    return (<ShopHeader dispatch={dispatch} activeItem={activeItem} />)
}

export default Header