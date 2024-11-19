import { useState } from "react";
import mockJson from "../../mock-login.json";
import "./Login.css";

const Login = ({ onLoginSuccess }) => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (mockJson.email === userEmail && mockJson.password === password) {
      onLoginSuccess(mockJson.token);
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>UserEmail</label>
          <br />
          <input
            type="email"
            value={userEmail}
            placeholder="Enter Your UserEmail"
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <br />
          <input
            type="password"
            value={password}
            placeholder="Enter Your UserPassword"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
