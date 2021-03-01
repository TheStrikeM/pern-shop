import React from 'react';
import {privateRoutes} from "../utils/routes";
import {Switch, Route, Redirect} from "react-router-dom";

const ShopSwitch = () => {
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