import React from 'react';
import {privateRoutes} from "../utils/routes";
import {Switch, Route, Redirect} from "react-router-dom";

const AuthSwitch = () => {
    return (
        <Switch>
            {privateRoutes.map(el => (
                <Route path={el.path} component={el.component} />
            ))}
            <Redirect to={"login"} />
        </Switch>
    )
}

export default AuthSwitch;