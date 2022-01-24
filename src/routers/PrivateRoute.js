
import { Navigate, useLocation } from "react-router";


export const PrivateRoute = ({ children, isAuthenticated }) => {

    const location =  useLocation();

    localStorage.setItem('lastPath', location.pathname);

    return (isAuthenticated)
        ? children
        : <Navigate to="/login" />
}
