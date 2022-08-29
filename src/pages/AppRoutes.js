import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import MyTracks from "./MyTracks";
import Compilations from "./Compilations";
import ProtectedRoute from "./ProtectedRoute";
import Signup from "./Signup";
import NotFound from "./NotFound";
import Login from "./Login";

function AppRoutes({ user }) {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/" element={<Home />} />
        <Route path="/my-tracks" element={<MyTracks />} />
        <Route path="/compilations/:name" element={<Compilations />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
