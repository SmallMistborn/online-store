
import { Navigate} from 'react-router-dom';
import {LOGIN_ROUTE} from "@/utils/constants/RouteNames";
import {ReactNode} from "react";
import {useTypedSelector} from "@/hooks/useTypedSelector";

interface PrivateRouteProps {
    children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const { isAuth } = useTypedSelector((state) => state.auth);
    return isAuth ? children : <Navigate to={LOGIN_ROUTE} />;
};

export default PrivateRoute;