import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  HeartPulse,
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";
import "./Auth.css";

function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      alert("Please fill in all fields.");
      return;
    }

    // Temporary frontend registration.
    // Backend authentication will be added later.
    localStorage.setItem("fitaiUser", JSON.stringify(formData));

    navigate("/onboarding");
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
            <span className="auth-badge">START YOUR JOURNEY</span>
            <h1>Create your account</h1>
            <p>
              Tell us a little about yourself and we'll personalize your
              fitness journey.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Full name</label>

              <div className="input-wrapper">
                <User size={18} />

                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="input-group">
              <label>Email address</label>

              <div className="input-wrapper">
                <Mail size={18} />

                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="input-group">
              <label>Password</label>

              <div className="input-wrapper">
                <Lock size={18} />

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
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

            <div className="terms">
              By creating an account, you agree to our Terms of Service and
              Privacy Policy.
            </div>

            <button className="auth-submit" type="submit">
              Create Account
              <ArrowRight size={18} />
            </button>
          </form>

          <div className="auth-divider">
            <span>OR</span>
          </div>

          <p className="auth-switch">
            Already have an account?{" "}
            <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;