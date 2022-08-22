import { Outlet } from "react-router-dom";
import Login from "./Login";

function ProtectedRoute({ isAllowed }) {
  return isAllowed ? <Outlet /> : <Login />;
}

export default ProtectedRoute;
