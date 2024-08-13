import "./Login.css";

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from './authService';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await login(email, password);
      console.log("Login successful:", data);
      navigate('/');
    } catch (err) {
      console.error("Login failed:", err.message);
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
    <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <fieldset>
            <legend htmlFor="email">Email</legend>
            <input
                type="email"
                id="email"
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
        </fieldset>
        <fieldset>
            <legend htmlFor="password">Password</legend>
            <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
        </fieldset>
        <div className="form-actions">
            <button type="button" className="cancel">Cancel</button>
            <button type="submit" className="submit">Login</button>
        </div>
        {error && <p>{error}</p>}
    </form>
    </div>
  );
};

export default Login;