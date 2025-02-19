
//TODO: добавить аутентификацию и контекст для нее
//import { useContext } from 'react';
//import { AuthContext } from '../context/AuthContext';

import { Navigate, Outlet } from 'react-router-dom';
import { isAuth } from "@/router/routes";
import {LOGIN_ROUTE} from "@/utils/constants/RouteNames";
import {ReactNode} from "react";

interface PrivateRouteProps {
    children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
    return isAuth ? children : <Navigate to={LOGIN_ROUTE} />;
};

export default PrivateRoute;