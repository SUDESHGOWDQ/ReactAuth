import React from "react";
import { useAuth } from "../../hooks/AuthContext";

const Index = () => {
  const { token, logout } = useAuth();
  return (
    <div className="Home">
      <h2>Welcome! You are logged in.</h2>
      <p>Your token: {token}</p>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
};

export default Index;
