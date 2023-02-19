import { useLocation, Navigate } from "react-router-dom";
import { useAppSelector } from "../selector";


export function RequireAuth({ children }: { children: JSX.Element }) {
  const {user} =useAppSelector(state=>state.registerUser)
  let location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  } else {
    return children;
  }
}