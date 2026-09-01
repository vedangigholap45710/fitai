import { ArrowRight, Brain, Dumbbell, HeartPulse, Sparkles, TrendingUp, Utensils } from "lucide-react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Onboarding from "./pages/Onboarding";
import Login from "./pages/login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import Workout from "./pages/Workout";
import "./App.css";
import Nutrition from "./pages/Nutrition";

function LandingPage() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">
          <div className="logo-icon">
            <HeartPulse size={22} />
          </div>
          <span>Fit<span>AI</span></span>
        </div>

        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#about">About</a>
        </div>

        <div className="nav-actions">
        <Link to="/login" className="login-btn">
  Log In
</Link>
<Link to="/signup" className="signup-btn">
  Get Started
</Link>
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-content">
            <div className="badge">
              <Sparkles size={16} />
              AI-powered personal fitness
            </div>

            <h1>
              Your Personal
              <span> AI Fitness Coach</span>
            </h1>

            <p>
              Get personalized workouts, nutrition recommendations,
              and intelligent wellness guidance designed around your goals.
            </p>

            <div className="hero-buttons">
            <Link to="/signup" className="primary-btn">
              Start Your Journey
              <ArrowRight size={18} />
            </Link>

              <button className="secondary-btn">
                Explore Features
              </button>
            </div>

            <div className="hero-stats">
              <div>
                <strong>100%</strong>
                <span>Personalized</span>
              </div>

              <div>
                <strong>24/7</strong>
                <span>AI Assistance</span>
              </div>

              <div>
                <strong>∞</strong>
                <span>Progress Tracking</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="glow"></div>

            <div className="fitness-card main-card">
              <div className="card-top">
                <div>
                  <span className="small-label">TODAY'S PROGRESS</span>
                  <h3>Great work! 🔥</h3>
                </div>

                <div className="progress-circle">
                  <span>78%</span>
                </div>
              </div>

              <div className="progress-bar">
                <div></div>
              </div>

              <div className="mini-stats">
                <div>
                  <Dumbbell size={18} />
                  <div>
                    <strong>4 / 5</strong>
                    <span>Workouts</span>
                  </div>
                </div>

                <div>
                  <TrendingUp size={18} />
                  <div>
                    <strong>8,420</strong>
                    <span>Steps</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="floating-card calories-card">
              <span>🔥</span>
              <div>
                <strong>1,840</strong>
                <small>Calories</small>
              </div>
            </div>

            <div className="floating-card ai-card">
              <Brain size={20} />
              <div>
                <strong>AI Insight</strong>
                <small>You're on track!</small>
              </div>
            </div>
          </div>
        </section>

        <section className="features" id="features">
          <div className="section-heading">
            <span>POWERED BY AI</span>
            <h2>Everything you need to become your best self.</h2>
            <p>
              One intelligent platform for your workouts, nutrition,
              progress and wellness.
            </p>
          </div>

          <div className="feature-grid">
            <Feature
              icon={<Dumbbell />}
              title="AI Workout Planner"
              text="Get workouts personalized to your fitness level, goals, equipment and available time."
            />

            <Feature
              icon={<Utensils />}
              title="Smart Nutrition"
              text="Receive personalized meal recommendations and track your calories and macros."
            />

            <Feature
              icon={<Brain />}
              title="AI Fitness Assistant"
              text="Ask questions about exercise, nutrition and recovery and get instant guidance."
            />

            <Feature
              icon={<TrendingUp />}
              title="Progress Tracking"
              text="Track weight, workouts, steps and other metrics with clear visual insights."
            />
          </div>
        </section>

        <section className="how-it-works" id="how-it-works">
          <div className="section-heading">
            <span>SIMPLE & PERSONALIZED</span>
            <h2>Your fitness journey, simplified.</h2>
          </div>

          <div className="steps">
            <Step number="01" title="Tell us about you" text="Set your goals, fitness level, preferences and routine." />
            <Step number="02" title="Get your AI plan" text="FitAI creates personalized workouts and nutrition recommendations." />
            <Step number="03" title="Track your progress" text="Monitor your habits, achievements and improvements over time." />
          </div>
        </section>

        <section className="cta" id="about">
          <Sparkles size={28} />
          <h2>Ready to transform your fitness journey?</h2>
          <p>Start building healthier habits with your personal AI coach.</p>
          <Link to="/signup" className="primary-btn">
              Get Started Free
             <ArrowRight size={18} />
         </Link>
        </section>
      </main>

      <footer>
        <div className="logo">
          <div className="logo-icon">
            <HeartPulse size={20} />
          </div>
          <span>Fit<span>AI</span></span>
        </div>

        <p>© 2026 FitAI. Your intelligent fitness companion.</p>
      </footer>
    </div>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
      <ArrowRight size={18} className="feature-arrow" />
    </div>
  );
}

function Step({ number, title, text }) {
  return (
    <div className="step">
      <span>{number}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/nutrition" element={<Nutrition />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;