import { useState } from "react";
import {
  Home,
  Dumbbell,
  Utensils,
  TrendingUp,
  Bot,
  LogOut,
  Flame,
  Target,
  Clock,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

import "./Dashboard.css";

function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(false);

  const savedData = JSON.parse(
    localStorage.getItem("fitaiOnboarding") || "{}"
  );

  const name =
    savedData.name ||
    JSON.parse(localStorage.getItem("fitaiUser") || "{}").name ||
    "there";

  const goals = savedData.goals || [];

  const goalNames = {
    "weight-loss": "Lose Weight",
    "build-muscle": "Build Muscle",
    "get-stronger": "Get Stronger",
    "improve-fitness": "Improve Fitness",
    maintain: "Maintain Weight",
  };

  const formattedGoals = goals.map(
    (goal) => goalNames[goal] || goal
  );

  const handleLogout = () => {
    localStorage.removeItem("fitaiUser");
    localStorage.removeItem("fitaiOnboarding");
    window.location.href = "/login";
  };

  return (
    <div className="dashboard-page">

      {/* SIDEBAR */}

      <aside className={`dashboard-sidebar ${menuOpen ? "open" : ""}`}>

        <div className="dashboard-brand">
          <div className="dashboard-brand-icon">
            <Flame size={18} />
          </div>

          <span>
            Fit<span>AI</span>
          </span>
        </div>

        <nav className="dashboard-nav">

          <a href="/dashboard" className="active">
            <Home size={18} />
            Dashboard
          </a>

          <a href="#workout">
            <Dumbbell size={18} />
            Workout
          </a>

          <a href="#nutrition">
            <Utensils size={18} />
            Nutrition
          </a>

          <a href="#progress">
            <TrendingUp size={18} />
            Progress
          </a>

          <a href="#assistant">
            <Bot size={18} />
            AI Assistant
          </a>

        </nav>

        <button
          className="dashboard-logout"
          onClick={handleLogout}
        >
          <LogOut size={17} />
          Logout
        </button>

      </aside>


      {/* MOBILE MENU */}

      <button
        className="mobile-menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={21} /> : <Menu size={21} />}
      </button>


      {/* MAIN CONTENT */}

      <main className="dashboard-main">

        {/* HEADER */}

        <header className="dashboard-header">

          <div>
            <span className="dashboard-eyebrow">
              YOUR FITNESS DASHBOARD
            </span>

            <h1>
              Good to see you,{" "}
              <span>{name}.</span>
            </h1>

            <p>
              Here's what your fitness journey looks like today.
            </p>
          </div>

          <div className="dashboard-date">
            <span>TODAY</span>
            <strong>
              {new Date().toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </strong>
          </div>

        </header>


        {/* GOALS */}

        <section className="dashboard-goals">

          <div className="section-label">
            YOUR CURRENT GOALS
          </div>

          <div className="goal-tags">

            {formattedGoals.length > 0 ? (
              formattedGoals.map((goal) => (
                <div className="goal-tag" key={goal}>
                  <Target size={14} />
                  {goal}
                </div>
              ))
            ) : (
              <div className="goal-tag">
                <Target size={14} />
                Build a healthier lifestyle
              </div>
            )}

          </div>

        </section>


        {/* STAT CARDS */}

        <section className="dashboard-stats">

          <div className="stat-card">

            <div className="stat-icon">
              <Flame size={19} />
            </div>

            <div>
              <span>CALORIES</span>
              <strong>420 kcal</strong>
              <small>of 1,850 kcal</small>
            </div>

          </div>


          <div className="stat-card">

            <div className="stat-icon">
              <Dumbbell size={19} />
            </div>

            <div>
              <span>WORKOUT</span>
              <strong>0 / 1</strong>
              <small>Today's session</small>
            </div>

          </div>


          <div className="stat-card">

            <div className="stat-icon">
              <TrendingUp size={19} />
            </div>

            <div>
              <span>WEEKLY PROGRESS</span>
              <strong>68%</strong>
              <small>Great consistency</small>
            </div>

          </div>

        </section>


        {/* MAIN GRID */}

        <section className="dashboard-grid">


          {/* TODAY'S WORKOUT */}

          <div className="dashboard-card workout-card" id="workout">

            <div className="card-top">

              <div>
                <span className="card-eyebrow">
                  TODAY'S WORKOUT
                </span>

                <h2>
                  Full Body Strength
                </h2>
              </div>

              <div className="card-number">
                01
              </div>

            </div>


            <p className="card-description">
              A balanced full-body session designed to
              build strength and improve your fitness.
            </p>


            <div className="workout-details">

              <div>
                <Clock size={16} />
                <span>35 min</span>
              </div>

              <div>
                <Dumbbell size={16} />
                <span>6 exercises</span>
              </div>

              <div>
                <Flame size={16} />
                <span>Moderate</span>
              </div>

            </div>


            <a href="/workout" className="card-button">
                Start Workout
             <ArrowRight size={17} />
            
            </a>

          </div>


          {/* NUTRITION */}

          <div
            className="dashboard-card nutrition-card"
            id="nutrition"
          >

            <div className="card-top">

              <div>
                <span className="card-eyebrow">
                  NUTRITION
                </span>

                <h2>
                  Today's intake
                </h2>
              </div>

              <Utensils size={21} />

            </div>


            <div className="nutrition-progress">

              <div className="nutrition-progress-ring">

                <strong>420</strong>
                <span>kcal</span>

              </div>

              <div className="nutrition-info">

                <div>
                  <span>Protein</span>
                  <strong>32g</strong>
                </div>

                <div>
                  <span>Carbs</span>
                  <strong>48g</strong>
                </div>

                <div>
                  <span>Fats</span>
                  <strong>14g</strong>
                </div>

              </div>

            </div>


            <a href="/nutrition" className="card-button secondary">
               View Nutrition
               <ArrowRight size={17} />
            </a>

          </div>


          {/* PROGRESS */}

          <div
            className="dashboard-card progress-card"
            id="progress"
          >

            <div className="card-top">

              <div>
                <span className="card-eyebrow">
                  PROGRESS
                </span>

                <h2>
                  This week
                </h2>
              </div>

              <TrendingUp size={21} />

            </div>


            <div className="progress-bars">

              {[65, 82, 45, 90, 70, 0, 0].map(
                (value, index) => (

                  <div className="progress-day" key={index}>

                    <div className="bar-container">

                      <div
                        className="bar-fill"
                        style={{
                          height: `${value}%`,
                        }}
                      />

                    </div>

                    <span>
                      {
                        ["M", "T", "W", "T", "F", "S", "S"][
                          index
                        ]
                      }
                    </span>

                  </div>

                )
              )}

            </div>


            <div className="progress-footer">

              <div>
                <CheckCircle2 size={16} />
                4 workouts completed
              </div>

              <strong>
                +12%
              </strong>

            </div>

          </div>


          {/* AI ASSISTANT */}

          <div
            className="dashboard-card ai-card"
            id="assistant"
          >

            <div className="ai-card-content">

              <div className="ai-icon">
                <Bot size={24} />
              </div>

              <span className="card-eyebrow">
                FITAI ASSISTANT
              </span>

              <h2>
                Need some guidance?
              </h2>

              <p>
                Ask FitAI about workouts, nutrition,
                recovery or your fitness goals.
              </p>

              <button className="card-button">
                Chat with FitAI
                <ArrowRight size={17} />
              </button>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;