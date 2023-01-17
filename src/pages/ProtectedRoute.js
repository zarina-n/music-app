import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = () => {
  const token = useSelector((state) => state.auth.access)
  const location = useLocation()

  if (token === null)
    return <Navigate to="/login" state={{ from: location }} replace />

  return <Outlet />
}
export default ProtectedRoute
