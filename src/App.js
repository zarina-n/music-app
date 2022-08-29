// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import MyTracks from "./pages/MyTracks";
// import Compilations from "./pages/Compilations";
// import Signup from "./pages/Signup";
// import NotFound from "./pages/NotFound";
// import ProtectedRoute from "./pages/ProtectedRoute";
// import { useState } from "react";

import AppRoutes from "./pages/AppRoutes";

function App() {
  const cookieValue = document.cookie.replace(
    /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  );

  return (
    <>
      <AppRoutes user={cookieValue} />
    </>
  );
}

export default App;
