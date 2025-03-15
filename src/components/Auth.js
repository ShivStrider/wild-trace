import React, { useState } from "react";
import { FaKey } from "react-icons/fa";
import "../styles/Auth.css";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    alert("Sign Up clicked");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login clicked");
  };

  return (
    
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">
          <FaKey /> Login / Sign Up
        </h2>

        <form className="auth-form">
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

          <div className="auth-buttons">
            <button className="auth-button signup" onClick={handleSignUp}>
              Sign Up
            </button>
            <button className="auth-button login" onClick={handleLogin}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
