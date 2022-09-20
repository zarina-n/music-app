import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../features/auth/authSlice";

const ProtectedRoute = () => {
  const token = useSelector(selectCurrentToken);
  const location = useLocation();

  return token !== null && token.access ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
export default ProtectedRoute;
