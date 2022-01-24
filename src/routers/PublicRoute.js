
import { Navigate } from "react-router";


export const PublicRoute = ({ children, isAuthenticated }) => {

    const lastPath = localStorage.getItem('lastPath') || '/dashboard';

    return (isAuthenticated)
        ? <Navigate to={lastPath} />
        : children
}
