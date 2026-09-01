import { useState } from "react";

import {
  ArrowRight,
  ArrowLeft,
  User,
  Calendar,
  Ruler,
  Weight,
  Flame,
  Dumbbell,
  Trophy,
  Heart,
  Scale,
  Activity,
  Home,
  Building2,
  TreePine,
  Clock,
  CalendarDays,
  CircleOff,
} from "lucide-react";

import "./Onboarding.css";

function Onboarding() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    height: "",
    weight: "",
  
    goals: [],
  
    fitnessLevel: "",
    workoutLocation: "",
    workoutDays: "",
    workoutDuration: "",
    equipment: [],
  
    dietType: "",
    nutritionPreference: "",
    allergies: "",
    mealsPerDay: "",
    waterIntake: "",
    foodPreference: "",
  });

  // ================= STEP 1 =================

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleStepOne = (e) => {
    e.preventDefault();

    setStep(2);
  };

  // ================= STEP 2 =================

  const handleGoalSelect = (goal) => {
    setFormData((prev) => {
      const alreadySelected = prev.goals.includes(goal);

      return {
        ...prev,
        goals: alreadySelected
          ? prev.goals.filter((item) => item !== goal)
          : [...prev.goals, goal],
      };
    });
  };

  const handleStepTwo = (e) => {
    e.preventDefault();

    if (formData.goals.length === 0) {
      alert("Please select at least one goal.");
      return;
    }

    console.log("Step 2 data:", formData);

    setStep(3);
  };

  // ================= STEP 3 =================

  const handleSingleSelect = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleEquipmentSelect = (equipment) => {
    setFormData((prev) => {
      const alreadySelected = prev.equipment.includes(equipment);

      return {
        ...prev,
        equipment: alreadySelected
          ? prev.equipment.filter((item) => item !== equipment)
          : [...prev.equipment, equipment],
      };
    });
  };

  const handleStepThree = (e) => {
    e.preventDefault();

    if (
      !formData.fitnessLevel ||
      !formData.workoutLocation ||
      !formData.workoutDays ||
      !formData.workoutDuration
    ) {
      alert("Please complete all lifestyle selections.");
      return;
    }

    console.log("Step 3 data:", formData);

    setStep(4);
  };
  const handleStepFour = (e) => {
    e.preventDefault();
  
    if (
      !formData.dietType ||
      !formData.nutritionPreference ||
      !formData.allergies ||
      !formData.mealsPerDay ||
      !formData.waterIntake ||
      !formData.foodPreference
    ) {
      alert("Please complete all nutrition selections.");
      return;
    }
  
    console.log("Complete onboarding data:", formData);
  
    localStorage.setItem(
      "fitaiOnboarding",
      JSON.stringify(formData)
    );
  
    setStep(5);
  };
  // ================= GOALS =================

  const goals = [
    {
      id: "weight-loss",
      title: "Lose Weight",
      description: "Burn fat and reach a healthier weight.",
      icon: Flame,
    },
    {
      id: "build-muscle",
      title: "Build Muscle",
      description: "Increase muscle mass and improve definition.",
      icon: Dumbbell,
    },
    {
      id: "get-stronger",
      title: "Get Stronger",
      description: "Build strength and improve performance.",
      icon: Trophy,
    },
    {
      id: "improve-fitness",
      title: "Improve Fitness",
      description: "Become more active and feel healthier.",
      icon: Heart,
    },
    {
      id: "maintain",
      title: "Maintain Weight",
      description: "Stay at your current weight and stay fit.",
      icon: Scale,
    },
  ];

  return (
    <div className="onboarding-page">

      {/* ================= HEADER ================= */}

      <header className="onboarding-header">

        <div className="onboarding-logo">

          <div className="onboarding-logo-icon">
            <User size={18} />
          </div>

          <span>
            Fit<span>AI</span>
          </span>

        </div>

        <div className="step-indicator">
          STEP <span>0{step}</span> / 04
        </div>

      </header>

      {/* ================= PROGRESS ================= */}

      <div className="onboarding-progress">

        <div
          className="onboarding-progress-fill"
          style={{
            width: `${step * 25}%`,
          }}
        />

      </div>

      {/* =====================================================
          STEP 1 — ABOUT YOU
          ===================================================== */}

      {step === 1 && (

        <main className="onboarding-content">

          <div className="onboarding-intro">

            <span className="onboarding-eyebrow">
              LET'S GET STARTED
            </span>

            <h1>
              First, tell us
              <span> about yourself.</span>
            </h1>

            <p>
              We'll use this information to create a fitness
              experience that's personalized to you.
            </p>

          </div>

          <form
            className="onboarding-form"
            onSubmit={handleStepOne}
          >

            {/* Name */}

            <div className="onboarding-field full-width">

              <label>
                WHAT SHOULD WE CALL YOU?
              </label>

              <div className="onboarding-input">

                <User size={18} />

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>

            {/* Age */}

            <div className="onboarding-field">

              <label>AGE</label>

              <div className="onboarding-input">

                <Calendar size={18} />

                <input
                  type="number"
                  name="age"
                  placeholder="e.g. 20"
                  min="13"
                  max="100"
                  value={formData.age}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>

            {/* Height */}

            <div className="onboarding-field">

              <label>HEIGHT (CM)</label>

              <div className="onboarding-input">

                <Ruler size={18} />

                <input
                  type="number"
                  name="height"
                  placeholder="e.g. 165"
                  min="100"
                  max="250"
                  value={formData.height}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>

            {/* Weight */}

            <div className="onboarding-field full-width">

              <label>
                CURRENT WEIGHT (KG)
              </label>

              <div className="onboarding-input">

                <Weight size={18} />

                <input
                  type="number"
                  name="weight"
                  placeholder="e.g. 65"
                  min="25"
                  max="300"
                  step="0.1"
                  value={formData.weight}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>

            {/* Continue */}

            <button
              type="submit"
              className="onboarding-next"
            >
              Continue
              <ArrowRight size={18} />
            </button>

          </form>

          <p className="onboarding-note">
            You can change these details later from your profile.
          </p>

        </main>

      )}

      {/* =====================================================
          STEP 2 — GOALS
          ===================================================== */}

      {step === 2 && (

        <main className="onboarding-content goal-content">

          <div className="onboarding-intro">

            <span className="onboarding-eyebrow">
              YOUR FITNESS GOAL
            </span>

            <h1>
              What are you
              <span> working towards?</span>
            </h1>

            <p>
              Choose all that apply. FitAI will use your goals
              to personalize your fitness plan.
            </p>

          </div>

          <form
            className="onboarding-form goal-form"
            onSubmit={handleStepTwo}
          >

            <div className="goals-grid">

              {goals.map((goal) => {

                const Icon = goal.icon;

                const isSelected =
                  formData.goals.includes(goal.id);

                return (

                  <button
                    type="button"
                    key={goal.id}
                    className={`goal-card ${
                      isSelected ? "selected" : ""
                    }`}
                    onClick={() =>
                      handleGoalSelect(goal.id)
                    }
                  >

                    <div className="goal-icon">
                      <Icon size={21} />
                    </div>

                    <div className="goal-text">

                      <h3>
                        {goal.title}
                      </h3>

                      <p>
                        {goal.description}
                      </p>

                    </div>

                    <div className="goal-check">
                      {isSelected ? "✓" : ""}
                    </div>

                  </button>

                );
              })}

            </div>

            <div className="goal-actions">

              <button
                type="button"
                className="onboarding-back"
                onClick={() => setStep(1)}
              >
                <ArrowLeft size={17} />
                Back
              </button>

              <button
                type="submit"
                className="onboarding-next"
              >
                Continue
                <ArrowRight size={18} />
              </button>

            </div>

          </form>

          <p className="onboarding-note">
            You can change your goals later from your profile.
          </p>

        </main>

      )}

      {/* =====================================================
          STEP 3 — LIFESTYLE
          ===================================================== */}

      {step === 3 && (

        <main className="onboarding-content lifestyle-content">

          <div className="onboarding-intro">

            <span className="onboarding-eyebrow">
              YOUR LIFESTYLE
            </span>

            <h1>
              Let's understand
              <span> your routine.</span>
            </h1>

            <p>
              Tell us how you normally train so FitAI can create
              workouts that actually fit into your life.
            </p>

          </div>

          <form
            className="onboarding-form lifestyle-form"
            onSubmit={handleStepThree}
          >

            {/* ================= FITNESS LEVEL ================= */}

            <div className="lifestyle-section full-width">

              <div className="section-heading">

                <span>01</span>

                <div>

                  <h3>
                    What's your fitness level?
                  </h3>

                  <p>
                    Choose the level that best describes you.
                  </p>

                </div>

              </div>

              <div className="option-grid three-columns">

                {[
                  [
                    "beginner",
                    "Beginner",
                    "I'm just getting started.",
                  ],
                  [
                    "intermediate",
                    "Intermediate",
                    "I exercise regularly.",
                  ],
                  [
                    "advanced",
                    "Advanced",
                    "Training is a serious part of my life.",
                  ],
                ].map(([id, title, description]) => (

                  <button
                    type="button"
                    key={id}
                    className={`option-card ${
                      formData.fitnessLevel === id
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      handleSingleSelect(
                        "fitnessLevel",
                        id
                      )
                    }
                  >

                    <strong>
                      {title}
                    </strong>

                    <span>
                      {description}
                    </span>

                    <div className="option-check">
                      {formData.fitnessLevel === id
                        ? "✓"
                        : ""}
                    </div>

                  </button>

                ))}

              </div>

            </div>

            {/* ================= LOCATION ================= */}

            <div className="lifestyle-section full-width">

              <div className="section-heading">

                <span>02</span>

                <div>

                  <h3>
                    Where do you usually work out?
                  </h3>

                  <p>
                    Choose your preferred training environment.
                  </p>

                </div>

              </div>

              <div className="option-grid four-columns">

                {[
                  ["home", "Home", Home],
                  ["gym", "Gym", Building2],
                  ["both", "Both", Activity],
                  ["outdoors", "Outdoors", TreePine],
                ].map(([id, title, Icon]) => (

                  <button
                    type="button"
                    key={id}
                    className={`small-option-card ${
                      formData.workoutLocation === id
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      handleSingleSelect(
                        "workoutLocation",
                        id
                      )
                    }
                  >

                    <Icon size={19} />

                    <span>
                      {title}
                    </span>

                  </button>

                ))}

              </div>

            </div>

            {/* ================= DAYS ================= */}

            <div className="lifestyle-section full-width">

              <div className="section-heading">

                <span>03</span>

                <div>

                  <h3>
                    How often can you train?
                  </h3>

                  <p>
                    Choose how many days you can realistically commit.
                  </p>

                </div>

              </div>

              <div className="option-grid four-columns">

                {[
                  "1–2 days",
                  "3–4 days",
                  "5–6 days",
                  "Every day",
                ].map((option) => (

                  <button
                    type="button"
                    key={option}
                    className={`small-option-card ${
                      formData.workoutDays === option
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      handleSingleSelect(
                        "workoutDays",
                        option
                      )
                    }
                  >

                    <CalendarDays size={18} />

                    <span>
                      {option}
                    </span>

                  </button>

                ))}

              </div>

            </div>

            {/* ================= DURATION ================= */}

            <div className="lifestyle-section full-width">

              <div className="section-heading">

                <span>04</span>

                <div>

                  <h3>
                    How long can you work out?
                  </h3>

                  <p>
                    Pick the duration that fits your schedule.
                  </p>

                </div>

              </div>

              <div className="option-grid four-columns">

                {[
                  "15–30 min",
                  "30–45 min",
                  "45–60 min",
                  "60+ min",
                ].map((option) => (

                  <button
                    type="button"
                    key={option}
                    className={`small-option-card ${
                      formData.workoutDuration === option
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      handleSingleSelect(
                        "workoutDuration",
                        option
                      )
                    }
                  >

                    <Clock size={18} />

                    <span>
                      {option}
                    </span>

                  </button>

                ))}

              </div>

            </div>

            {/* ================= EQUIPMENT ================= */}

            <div className="lifestyle-section full-width">

              <div className="section-heading">

                <span>05</span>

                <div>

                  <h3>
                    What equipment do you have?
                  </h3>

                  <p>
                    Choose all that apply.
                  </p>

                </div>

              </div>

              <div className="option-grid four-columns">

                {[
                  [
                    "none",
                    "No Equipment",
                    CircleOff,
                  ],
                  [
                    "dumbbells",
                    "Dumbbells",
                    Dumbbell,
                  ],
                  [
                    "bands",
                    "Resistance Bands",
                    Activity,
                  ],
                  [
                    "full-gym",
                    "Full Gym",
                    Building2,
                  ],
                ].map(([id, title, Icon]) => {

                  const selected =
                    formData.equipment.includes(id);

                  return (

                    <button
                      type="button"
                      key={id}
                      className={`small-option-card ${
                        selected ? "selected" : ""
                      }`}
                      onClick={() =>
                        handleEquipmentSelect(id)
                      }
                    >

                      <Icon size={18} />

                      <span>
                        {title}
                      </span>

                      {selected && (
                        <b>✓</b>
                      )}

                    </button>

                  );

                })}

              </div>

            </div>

            {/* ================= ACTIONS ================= */}

            <div className="goal-actions lifestyle-actions">

              <button
                type="button"
                className="onboarding-back"
                onClick={() => setStep(2)}
              >
                <ArrowLeft size={17} />
                Back
              </button>

              <button
                type="submit"
                className="onboarding-next"
              >
                Continue
                <ArrowRight size={18} />
              </button>

            </div>

          </form>

          <p className="onboarding-note">
            Your lifestyle information helps FitAI build realistic plans.
          </p>

        </main>

      )}

      {/* =====================================================
    STEP 4 — NUTRITION
    ===================================================== */}

{step === 4 && (

<main className="onboarding-content nutrition-content">

  <div className="onboarding-intro">

    <span className="onboarding-eyebrow">
      YOUR NUTRITION
    </span>

    <h1>
      Let's personalize
      <span> your nutrition.</span>
    </h1>

    <p>
      Your food preferences help FitAI create nutrition
      recommendations that are realistic and enjoyable for you.
    </p>

  </div>


  <form
    className="onboarding-form nutrition-form"
    onSubmit={handleStepFour}
  >

    {/* ================= DIET TYPE ================= */}

    <div className="lifestyle-section full-width">

      <div className="section-heading">

        <span>01</span>

        <div>
          <h3>What's your diet type?</h3>
          <p>Choose the option that best describes your diet.</p>
        </div>

      </div>


      <div className="option-grid four-columns">

        {[
          ["vegetarian", "Vegetarian"],
          ["non-vegetarian", "Non-Vegetarian"],
          ["eggetarian", "Eggetarian"],
          ["vegan", "Vegan"],
        ].map(([id, title]) => (

          <button
            type="button"
            key={id}
            className={`small-option-card ${
              formData.dietType === id ? "selected" : ""
            }`}
            onClick={() =>
              handleSingleSelect("dietType", id)
            }
          >
            <Heart size={18} />

            <span>{title}</span>

            {formData.dietType === id && (
              <b>✓</b>
            )}

          </button>

        ))}

      </div>

    </div>


    {/* ================= NUTRITION PREFERENCE ================= */}

    <div className="lifestyle-section full-width">

      <div className="section-heading">

        <span>02</span>

        <div>
          <h3>What's your nutrition preference?</h3>
          <p>Choose the approach you'd like to follow.</p>
        </div>

      </div>


      <div className="option-grid four-columns">

        {[
          ["high-protein", "High Protein"],
          ["low-carb", "Low Carb"],
          ["balanced", "Balanced"],
          ["weight-loss", "Weight Loss"],
        ].map(([id, title]) => (

          <button
            type="button"
            key={id}
            className={`small-option-card ${
              formData.nutritionPreference === id
                ? "selected"
                : ""
            }`}
            onClick={() =>
              handleSingleSelect(
                "nutritionPreference",
                id
              )
            }
          >
            <Flame size={18} />

            <span>{title}</span>

            {formData.nutritionPreference === id && (
              <b>✓</b>
            )}

          </button>

        ))}

      </div>

    </div>


    {/* ================= ALLERGIES ================= */}

    <div className="lifestyle-section full-width">

      <div className="section-heading">

        <span>03</span>

        <div>
          <h3>Any foods you want to avoid?</h3>
          <p>Select anything that you need to avoid.</p>
        </div>

      </div>


      <div className="option-grid four-columns">

        {[
          ["none", "None"],
          ["dairy", "Dairy"],
          ["nuts", "Nuts"],
          ["gluten", "Gluten"],
        ].map(([id, title]) => (

          <button
            type="button"
            key={id}
            className={`small-option-card ${
              formData.allergies === id
                ? "selected"
                : ""
            }`}
            onClick={() =>
              handleSingleSelect("allergies", id)
            }
          >
            <CircleOff size={18} />

            <span>{title}</span>

            {formData.allergies === id && (
              <b>✓</b>
            )}

          </button>

        ))}

      </div>

    </div>


    {/* ================= MEALS ================= */}

    <div className="lifestyle-section full-width">

      <div className="section-heading">

        <span>04</span>

        <div>
          <h3>How many meals do you prefer?</h3>
          <p>Choose what fits naturally into your routine.</p>
        </div>

      </div>


      <div className="option-grid four-columns">

        {[
          ["2", "2 Meals"],
          ["3", "3 Meals"],
          ["4", "4 Meals"],
          ["5+", "5+ Meals"],
        ].map(([id, title]) => (

          <button
            type="button"
            key={id}
            className={`small-option-card ${
              formData.mealsPerDay === id
                ? "selected"
                : ""
            }`}
            onClick={() =>
              handleSingleSelect(
                "mealsPerDay",
                id
              )
            }
          >
            <CalendarDays size={18} />

            <span>{title}</span>

            {formData.mealsPerDay === id && (
              <b>✓</b>
            )}

          </button>

        ))}

      </div>

    </div>


    {/* ================= WATER ================= */}

    <div className="lifestyle-section full-width">

      <div className="section-heading">

        <span>05</span>

        <div>
          <h3>How much water do you usually drink?</h3>
          <p>Give us your approximate daily intake.</p>
        </div>

      </div>


      <div className="option-grid four-columns">

        {[
          ["less-1", "< 1 L"],
          ["1-2", "1–2 L"],
          ["2-3", "2–3 L"],
          ["3-plus", "3+ L"],
        ].map(([id, title]) => (

          <button
            type="button"
            key={id}
            className={`small-option-card ${
              formData.waterIntake === id
                ? "selected"
                : ""
            }`}
            onClick={() =>
              handleSingleSelect(
                "waterIntake",
                id
              )
            }
          >
            <Activity size={18} />

            <span>{title}</span>

            {formData.waterIntake === id && (
              <b>✓</b>
            )}

          </button>

        ))}

      </div>

    </div>


    {/* ================= FOOD STYLE ================= */}

    <div className="lifestyle-section full-width">

      <div className="section-heading">

        <span>06</span>

        <div>
          <h3>What kind of food do you prefer?</h3>
          <p>We'll use this when suggesting meals.</p>
        </div>

      </div>


      <div className="option-grid four-columns">

        {[
          ["indian", "Indian"],
          ["western", "Western"],
          ["mixed", "Mixed"],
          ["no-preference", "No Preference"],
        ].map(([id, title]) => (

          <button
            type="button"
            key={id}
            className={`small-option-card ${
              formData.foodPreference === id
                ? "selected"
                : ""
            }`}
            onClick={() =>
              handleSingleSelect(
                "foodPreference",
                id
              )
            }
          >
            <Heart size={18} />

            <span>{title}</span>

            {formData.foodPreference === id && (
              <b>✓</b>
            )}

          </button>

        ))}

      </div>

    </div>


    {/* ================= ACTIONS ================= */}

    <div className="goal-actions lifestyle-actions">

      <button
        type="button"
        className="onboarding-back"
        onClick={() => setStep(3)}
      >
        <ArrowLeft size={17} />
        Back
      </button>


      <button
        type="submit"
        className="onboarding-next"
      >
        Generate My Plan
        <ArrowRight size={18} />
      </button>

    </div>

  </form>


  <p className="onboarding-note">
    You can update your nutrition preferences later from your profile.
  </p>

</main>

)}
      {/* =====================================================
          STEP 5 — ONBOARDING COMPLETE
          ===================================================== */}

{step === 5 && (

<main className="onboarding-complete">

  <div className="complete-glow"></div>

  <div className="complete-icon">
    ✓
  </div>

  <span className="onboarding-eyebrow">
    FITAI PROFILE COMPLETE
  </span>

  <h1>
    Your personalized
    <span> journey starts now.</span>
  </h1>

  <p className="complete-description">
    We've got everything we need to build a fitness
    experience around your goals, lifestyle and nutrition.
  </p>


  {/* ================= SUMMARY ================= */}

  <div className="complete-summary">

    <div className="summary-item">

      <span>GOALS</span>

      <strong>
        {formData.goals.length} selected
      </strong>

    </div>


    <div className="summary-item">

      <span>FITNESS LEVEL</span>

      <strong>
        {formData.fitnessLevel
          ? formData.fitnessLevel.charAt(0).toUpperCase() +
            formData.fitnessLevel.slice(1)
          : "—"}
      </strong>

    </div>


    <div className="summary-item">

      <span>WORKOUT</span>

      <strong>
        {formData.workoutLocation
          ? formData.workoutLocation.charAt(0).toUpperCase() +
            formData.workoutLocation.slice(1)
          : "—"}
      </strong>

    </div>


    <div className="summary-item">

      <span>DIET</span>

      <strong>
        {formData.dietType
          ? formData.dietType
              .split("-")
              .map(
                (word) =>
                  word.charAt(0).toUpperCase() +
                  word.slice(1)
              )
              .join(" ")
          : "—"}
      </strong>

    </div>

  </div>


  {/* ================= CTA ================= */}

  <button
    type="button"
    className="complete-button"
    onClick={() => {
      window.location.href = "/dashboard";
    }}
  >
    Enter FitAI
    <ArrowRight size={19} />
  </button>


  <p className="complete-note">
    Your dashboard will be personalized using your answers.
  </p>

</main>

)}

    </div>
  );
}

export default Onboarding;