import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Flame,
  Dumbbell,
  CheckCircle2,
  Play,
  RotateCcw,
} from "lucide-react";

import "./Workout.css";

function Workout() {
  const [completed, setCompleted] = useState([]);

  const exercises = [
    {
      name: "Bodyweight Squats",
      sets: "3 sets",
      reps: "12 reps",
      duration: "5 min",
    },
    {
      name: "Push Ups",
      sets: "3 sets",
      reps: "10 reps",
      duration: "5 min",
    },
    {
      name: "Reverse Lunges",
      sets: "3 sets",
      reps: "10 each leg",
      duration: "6 min",
    },
    {
      name: "Glute Bridges",
      sets: "3 sets",
      reps: "15 reps",
      duration: "5 min",
    },
    {
      name: "Plank",
      sets: "3 sets",
      reps: "30 sec",
      duration: "4 min",
    },
    {
      name: "Mountain Climbers",
      sets: "3 sets",
      reps: "20 reps",
      duration: "5 min",
    },
  ];

  const toggleExercise = (index) => {
    setCompleted((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  const finishWorkout = () => {
    if (completed.length === exercises.length) {
      localStorage.setItem("fitaiWorkoutCompleted", "true");
      alert("Workout completed! Great job 🔥");
    } else {
      alert("Complete all exercises first.");
    }
  };

  return (
    <div className="workout-page">

      <header className="workout-header">

        <a href="/dashboard" className="workout-back">
          <ArrowLeft size={17} />
          Dashboard
        </a>

        <span className="workout-label">
          TODAY'S WORKOUT
        </span>

      </header>


      <main className="workout-main">

        <section className="workout-hero">

          <div>

            <span className="workout-eyebrow">
              FULL BODY · BEGINNER FRIENDLY
            </span>

            <h1>
              Full Body
              <span> Strength.</span>
            </h1>

            <p>
              Build strength, improve movement and get your
              entire body working with this simple session.
            </p>

          </div>

          <div className="workout-stats">

            <div>
              <Clock size={17} />
              <span>35 min</span>
            </div>

            <div>
              <Dumbbell size={17} />
              <span>6 exercises</span>
            </div>

            <div>
              <Flame size={17} />
              <span>250 kcal</span>
            </div>

          </div>

        </section>


        <section className="exercise-section">

          <div className="exercise-heading">

            <div>
              <span>YOUR SESSION</span>
              <h2>Today's exercises</h2>
            </div>

            <div className="exercise-count">
              {completed.length}/{exercises.length}
            </div>

          </div>


          <div className="exercise-list">

            {exercises.map((exercise, index) => {

              const isDone = completed.includes(index);

              return (
                <div
                  className={`exercise-card ${
                    isDone ? "completed" : ""
                  }`}
                  key={exercise.name}
                >

                  <div className="exercise-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>


                  <div className="exercise-info">

                    <h3>{exercise.name}</h3>

                    <div className="exercise-meta">

                      <span>{exercise.sets}</span>
                      <span>{exercise.reps}</span>
                      <span>{exercise.duration}</span>

                    </div>

                  </div>


                  <button
                    className="exercise-check"
                    onClick={() => toggleExercise(index)}
                  >
                    {isDone ? (
                      <CheckCircle2 size={21} />
                    ) : (
                      <Play size={17} />
                    )}
                  </button>

                </div>
              );

            })}

          </div>


          <div className="workout-footer">

            <div className="workout-progress">

              <div className="progress-text">
                <span>WORKOUT PROGRESS</span>

                <strong>
                  {Math.round(
                    (completed.length / exercises.length) * 100
                  )}
                  %
                </strong>
              </div>

              <div className="workout-progress-bar">

                <div
                  style={{
                    width: `${
                      (completed.length / exercises.length) * 100
                    }%`,
                  }}
                />

              </div>

            </div>


            <button
              className="finish-workout"
              onClick={finishWorkout}
            >
              Complete Workout
              <ArrowRight size={17} />
            </button>

          </div>

        </section>


        <div className="workout-tip">

          <RotateCcw size={16} />

          <span>
            Take 30–60 seconds of rest between sets and focus
            on controlled movement.
          </span>

        </div>

      </main>

    </div>
  );
}

export default Workout;