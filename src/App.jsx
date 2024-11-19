import { useAuth } from "./hooks/AuthContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";

const App = () => {
  const { token, login, logout } = useAuth();

  const handleLoginSuccess = (token) => {
    login(token);
  };

  return (
    <Router>
      <div className="App">
        {!token ? (
          <Routes>
            <Route
              path="/"
              element={<Login onLoginSuccess={handleLoginSuccess} />}
            />
          </Routes>
        ) : (
          <Home />
        )}
      </div>
    </Router>
  );
};

export default App;
