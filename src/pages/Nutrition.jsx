import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Utensils,
  Flame,
  Droplets,
  Beef,
  Wheat,
  CircleDot,
  Plus,
  Check,
} from "lucide-react";

import "./Nutrition.css";

function Nutrition() {
  const [water, setWater] = useState(4);
  const [meals, setMeals] = useState([]);

  const calorieGoal = 1850;
  const caloriesConsumed = 1240;
  const caloriePercentage = Math.min(
    (caloriesConsumed / calorieGoal) * 100,
    100
  );

  const mealList = [
    {
      id: 1,
      type: "BREAKFAST",
      name: "Oats & Banana Bowl",
      calories: 320,
      protein: "12g",
    },
    {
      id: 2,
      type: "LUNCH",
      name: "Paneer Rice Bowl",
      calories: 480,
      protein: "24g",
    },
    {
      id: 3,
      type: "SNACK",
      name: "Greek Yogurt & Nuts",
      calories: 180,
      protein: "10g",
    },
    {
      id: 4,
      type: "DINNER",
      name: "Vegetable Paneer Wrap",
      calories: 260,
      protein: "18g",
    },
  ];

  const toggleMeal = (id) => {
    setMeals((prev) =>
      prev.includes(id)
        ? prev.filter((mealId) => mealId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="nutrition-page">

      {/* HEADER */}

      <header className="nutrition-header">
        <a href="/dashboard" className="nutrition-back">
          <ArrowLeft size={17} />
          Dashboard
        </a>

        <div className="nutrition-logo">
          <div className="nutrition-logo-icon">
            <Utensils size={16} />
          </div>
          Fit<span>AI</span>
        </div>

        <span className="nutrition-label">
          DAILY NUTRITION
        </span>
      </header>


      {/* MAIN */}

      <main className="nutrition-main">

        {/* INTRO */}

        <section className="nutrition-intro">

          <div>
            <span className="nutrition-eyebrow">
              YOUR DAILY NUTRITION
            </span>

            <h1>
              Fuel your
              <span> progress.</span>
            </h1>

            <p>
              Keep your meals balanced and stay on track
              with your daily nutrition targets.
            </p>
          </div>

          <div className="nutrition-date">
            <span>TODAY</span>
            <strong>
              {new Date().toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "short",
              })}
            </strong>
          </div>

        </section>


        {/* CALORIE SUMMARY */}

        <section className="nutrition-summary">

          <div className="calorie-main">

            <div className="calorie-icon">
              <Flame size={20} />
            </div>

            <div>
              <span>CALORIES CONSUMED</span>

              <div className="calorie-number">
                {caloriesConsumed}
                <small> / {calorieGoal} kcal</small>
              </div>
            </div>

          </div>

          <div className="calorie-bar">

            <div
              style={{
                width: `${caloriePercentage}%`,
              }}
            />

          </div>

          <div className="calorie-footer">
            <span>{calorieGoal - caloriesConsumed} kcal remaining</span>
            <strong>{Math.round(caloriePercentage)}%</strong>
          </div>

        </section>


        {/* MACROS */}

        <section className="macro-grid">

          <div className="macro-card">
            <div className="macro-icon">
              <Beef size={18} />
            </div>

            <span>PROTEIN</span>
            <strong>64g</strong>
            <small>of 110g</small>
          </div>


          <div className="macro-card">
            <div className="macro-icon">
              <Wheat size={18} />
            </div>

            <span>CARBS</span>
            <strong>142g</strong>
            <small>of 220g</small>
          </div>


          <div className="macro-card">
            <div className="macro-icon">
              <CircleDot size={18} />
            </div>

            <span>FATS</span>
            <strong>38g</strong>
            <small>of 60g</small>
          </div>


          <div className="macro-card water-card">

            <div className="macro-icon">
              <Droplets size={18} />
            </div>

            <span>WATER</span>

            <strong>{water} / 8</strong>

            <small>glasses</small>

            <button
              className="water-add"
              onClick={() =>
                setWater((prev) => Math.min(prev + 1, 8))
              }
            >
              <Plus size={13} />
            </button>

          </div>

        </section>


        {/* MEALS */}

        <section className="meals-section">

          <div className="meals-heading">

            <div>
              <span>RECOMMENDED MEALS</span>
              <h2>Today's meals</h2>
            </div>

            <span className="meal-note">
              Personalized for you
            </span>

          </div>


          <div className="meal-list">

            {mealList.map((meal) => {

              const completed = meals.includes(meal.id);

              return (
                <div
                  className={`meal-card ${
                    completed ? "meal-completed" : ""
                  }`}
                  key={meal.id}
                >

                  <div className="meal-type">
                    {meal.type}
                  </div>

                  <div className="meal-info">
                    <h3>{meal.name}</h3>

                    <div>
                      <span>{meal.calories} kcal</span>
                      <span>{meal.protein} protein</span>
                    </div>
                  </div>

                  <button
                    className="meal-check"
                    onClick={() => toggleMeal(meal.id)}
                  >
                    {completed ? (
                      <Check size={17} />
                    ) : (
                      <Plus size={17} />
                    )}
                  </button>

                </div>
              );

            })}

          </div>

        </section>


        {/* BOTTOM ACTION */}

        <div className="nutrition-bottom">

          <div>
            <strong>Small choices add up.</strong>
            <span>
              Stay consistent with your meals and hydration today.
            </span>
          </div>

          <a href="/dashboard" className="nutrition-dashboard-btn">
            Back to Dashboard
            <ArrowRight size={16} />
          </a>

        </div>

      </main>

    </div>
  );
}

export default Nutrition;