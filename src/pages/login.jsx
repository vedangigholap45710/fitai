import { useState } from "react";
import { HeartPulse, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    // Temporary frontend authentication.
    // We will connect this to the backend later.
    localStorage.setItem("fitaiUser", JSON.stringify({ email }));

    navigate("/dashboard");
  };

  return (
    <div className="auth-page">
      <div className="auth-brand">
        <Link to="/" className="auth-logo">
          <div className="auth-logo-icon">
            <HeartPulse size={22} />
          </div>
          Fit<span>AI</span>
        </Link>
      </div>

      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <span className="auth-badge">WELCOME BACK</span>
            <h1>Welcome back 👋</h1>
            <p>Log in to continue your fitness journey.</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Email address</label>
              <div className="input-wrapper">
                <Mail size={18} />
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="input-group">
              <div className="label-row">
                <label>Password</label>
                <a href="#forgot">Forgot password?</a>
              </div>

              <div className="input-wrapper">
                <Lock size={18} />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button className="auth-submit" type="submit">
              Log In
              <ArrowRight size={18} />
            </button>
          </form>

          <div className="auth-divider">
            <span>OR</span>
          </div>

          <p className="auth-switch">
            Don't have an account?{" "}
            <Link to="/signup">Create one</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;