import { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../authorize/authContext";

export const PublicRoute = ({ children }) => {

    const { user } = useContext(AuthContext);

    return user.logged
        ? <Navigate to="/dashboard" />
        : children
}
