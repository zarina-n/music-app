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
  const [isAllowed, setIsAllowed] = useState(null);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route element={<ProtectedRoute isAllowed={true} />}>
        <Route path="/" element={<Home />} />
        <Route path="/my-tracks" element={<MyTracks />} />
        <Route path="/compilations/:name" element={<Compilations />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
