import React from 'react'
import {privateRoutes} from "../utils/routes"
import {Switch, Route, Redirect} from "react-router-dom"
import ShopPage from "../pages/ShopPage"

const ShopSwitch = () => {
    console.log("Shop switch")
    return (
        <Switch>
            {privateRoutes.map(el => (
                <Route path={el.path} exact component={el.component} />
            ))}
            <Redirect to={"home"} />
        </Switch>
    )
}

export default ShopSwitch;