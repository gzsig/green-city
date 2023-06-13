import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "./auth-context";

function PrivateRoute() {
  const auth = useAuth();

  return auth.user ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
