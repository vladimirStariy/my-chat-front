import { ReactNode } from 'react'
import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"
import { selectCurrentToken } from "../../../store/slices/authSlice";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const auth = useSelector(selectCurrentToken);
    let location = useLocation();

    console.log(auth)

    if(!auth) return <Navigate to="/auth" state={{ from: location }} replace />
    return children;
};

export default ProtectedRoute;