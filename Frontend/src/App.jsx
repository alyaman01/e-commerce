import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./Components/Navbar";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Kids from "./Pages/Kids";
import Cart from "./Pages/Cart";

const isLoggedIn = () => {
  return localStorage.getItem("isLoggedIn") === "true";
};

function App() {
  return (
    <Router>
      {/* Navbar sirf login ke baad */}
      {isLoggedIn() && <Navbar />}

      <Routes>
        {/* Login / Register */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Pages */}
        <Route path="/home" element={isLoggedIn() ? <Home /> : <Navigate to="/login" />} />
        <Route path="/men" element={isLoggedIn() ? <Men /> : <Navigate to="/login" />} />
        <Route path="/women" element={isLoggedIn() ? <Women /> : <Navigate to="/login" />} />
        <Route path="/kids" element={isLoggedIn() ? <Kids /> : <Navigate to="/login" />} />
        <Route path="/cart" element={isLoggedIn() ? <Cart /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
