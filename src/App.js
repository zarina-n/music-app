import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyTracks from "./pages/MyTracks";
import Compilations from "./pages/Compilations";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./pages/ProtectedRoute";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = () => setUser({ login: "name" });

  const handleLogout = () => setUser(null);

  return (
    <Routes>
      <Route
        path="/login"
        element={
          <Login
            user={user}
            onButtonClick={user ? handleLogin : handleLogout}
          />
        }
      />
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

export default App;
