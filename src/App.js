import React, { useState } from "react";
import "./App.css";

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [form, setForm] = useState({ type: "", duration: "", calories: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const addWorkout = () => {
    if (form.type && form.duration && form.calories) {
      setWorkouts([...workouts, form]);
      setForm({ type: "", duration: "", calories: "" });
    }
  };

  const totalCalories = workouts.reduce((sum, workout) => sum + parseInt(workout.calories), 0);

  return (
    <div className="app">
      <header>
        <h1>Mel Mode Fitness Tracker</h1>
      </header>
      <main>
        <section className="input-section">
          <h2>Log Your Workout</h2>
          <input
            type="text"
            name="type"
            placeholder="Workout Type (e.g., Running)"
            value={form.type}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="duration"
            placeholder="Duration (minutes)"
            value={form.duration}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="calories"
            placeholder="Calories Burned"
            value={form.calories}
            onChange={handleInputChange}
          />
          <button onClick={addWorkout}>Add Workout</button>
        </section>
        <section className="summary-section">
          <h2>Workout Summary</h2>
          <p>Total Workouts: {workouts.length}</p>
          <p>Total Calories Burned: {totalCalories}</p>
          <ul>
            {workouts.map((workout, index) => (
              <li key={index}>
                {workout.type} - {workout.duration} min - {workout.calories} cal
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer>
        <p>Designed with 💪 by Mel Mode Fitness Tracker</p>
      </footer>
    </div>
  );
}

export default App;