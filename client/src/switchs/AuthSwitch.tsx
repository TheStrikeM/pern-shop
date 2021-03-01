import React from 'react';
import {publicRoutes} from "../utils/routes";
import {Route, Redirect, Switch} from "react-router-dom";

const AuthSwitch = () => {
    console.log("Auth switch")
    return (
        <Switch>
            {publicRoutes.map(el => (
                <Route path={el.path} exact component={el.component} />
            ))}
            <Redirect to={"login"} />
        </Switch>
    )
}

export default AuthSwitch;