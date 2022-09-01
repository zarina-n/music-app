import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ redirectPath = "/login", isAllowed }) {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace={true} />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
