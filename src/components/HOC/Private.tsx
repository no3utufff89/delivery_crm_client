import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../../hooks";

type PrivateProps = {
    children: ReactNode;
}
export const Private:React.FC<PrivateProps> = ({children}) => {
    const location = useLocation();
    const isAuth = useAppSelector(state => state.user.isAuthenticated);
    if (!isAuth) {
       return <Navigate to={'/sign-in'} state={{from: location}} replace/>
       
    }
    return children
}