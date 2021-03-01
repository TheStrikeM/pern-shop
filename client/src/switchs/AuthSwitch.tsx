import React from 'react';
import {publicRoutes} from "../utils/routes";
import {Switch, Route, Redirect} from "react-router-dom";

const AuthSwitch = () => {
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