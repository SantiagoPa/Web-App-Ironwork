import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../authorize/authContext";

export const PrivateRoute = ({ children }) => {

    const { user } = useContext(AuthContext);

    const location =  useLocation();

    localStorage.setItem('lastPath', location.pathname);

    return user.logged
        ? children
        : <Navigate to="/login" />
}
