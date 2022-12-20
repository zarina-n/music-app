import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCurrentToken } from '../features/auth/authSlice'

const ProtectedRoute = () => {
  const token = useSelector(selectCurrentToken)
  const location = useLocation()

  if (token === null && !token?.access)
    return <Navigate to="/login" state={{ from: location }} replace />

  return <Outlet />
}
export default ProtectedRoute
