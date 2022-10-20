import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './Home'
import ProtectedRoute from './ProtectedRoute'
import Signup from './Signup'
import Login from './Login'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/*" element={<Home />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default AppRoutes
