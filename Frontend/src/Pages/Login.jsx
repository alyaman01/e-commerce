import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert("No account found, please register ❌");
      return;
    }

    if (
      email === savedUser.email &&
      password === savedUser.password
    ) {
      localStorage.setItem("isLoggedIn", "true");
      alert("Login successful ✅");
      navigate("/home");
    } else {
      alert("Invalid credentials ❌");
    }
  };

  return (
    <div className="login-signup">
      <div className="loginsignup-container">
        <h1>Login</h1>

        <form onSubmit={handleLogin}>
          <div className="loginsignup-field">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit">Login</button>

          <p>
            Don’t have an account?{" "}
            <Link to="/register">Create Account</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
