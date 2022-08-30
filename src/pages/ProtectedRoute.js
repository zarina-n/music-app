import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ redirectPath = "/login", isAllowed }) {
  if (isAllowed === false) {
    return <Navigate to={redirectPath} replace={true} />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
