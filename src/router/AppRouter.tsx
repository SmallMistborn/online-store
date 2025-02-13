import React, {ReactNode} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes";
import {ERROR_ROUTE, LOGIN_ROUTE} from "../utils/constants/RouteNames";
//import { useTypedSelector } from "../hooks/useTypedSelector.ts";

const AppRouter = () => {

    //const { isAuth } = useTypedSelector((state) => state.auth);
    const isAuth = false;

    return (
        <Switch>
            {publicRoutes.map((route) => (
                <Route
                    component={route.component}
                    path={route.path}
                    exact={route.exact}
                    key={route.path}
                />
            ))}

            {isAuth &&
                privateRoutes.map((route) => (
                    <Route
                        component={route.component}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                ))}

            <Redirect to={isAuth ? "/home" : "/error"} />
        </Switch>
    );
};

export default AppRouter;
