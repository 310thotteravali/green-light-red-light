import React, { useState } from "react";
import "./index.css";
function RegistrationForm({ onRegistrationComplete }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    difficulty: "easy",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, mobile } = formData;

    // Add form validation logic here
    if (!formData.name || !formData.email || !formData.mobile) {
      alert("Please fill in all fields.");
      return;
    }
    //Validate email format
    if (!isValidEmail(email)) {
      alert("Please enter valid email address");
      return;
    }
    if (!isValidMobile(mobile)) {
      alert("Please enter valid mobile number");
      return;
    }
    // Pass formData to a parent component or navigate to the game page
    onRegistrationComplete(formData);
  };
  const isValidMobile = (mobile) => {
    return /^\d{10}$/.test(mobile);
  };
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className="app">
      <h1>Squid Game Registration</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="mobile">Mobile Number:</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="difficulty">Difficulty Level:</label>
          <select
            id="difficulty"
            name="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
            required
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div className="button">
          <button type="submit">Start Game</button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
