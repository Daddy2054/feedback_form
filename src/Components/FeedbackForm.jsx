import React, { useState } from "react";
import "./FeedbackForm.css"; // Import CSS for styling

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
    rating: "", // New state for rating
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const confirmationMessage = `
      Name: ${formData.name}
      Email: ${formData.email}
      Feedback: ${formData.feedback}
      Rating: ${formData.rating}
    `;
    const isConfirmed = window.confirm(
      `Please confirm your details:\n\n${confirmationMessage}`
    );
    if (isConfirmed) {
      console.log("Submitting feedback:", formData);
      setFormData({
        name: "",
        email: "",
        feedback: "",
        rating: "", // Reset rating after submission
      });
      alert("Thank you for your valuable feedback!");
    }
  };

  return (
    <>
      <nav>Tell Us What You Think</nav>
      <form onSubmit={handleSubmit} className="feedback-form">
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="feedback"
          placeholder="Your Feedback"
          value={formData.feedback}
          onChange={handleChange}
        ></textarea>
        <p>Please gve us a rating of your experience.</p>
        <div className="rating">
          <label className="rating-radio">
            1
            <input
              type="radio"
              name="rating"
              value="1"
              id="rating1"
              checked={formData.rating === "1"}
              onChange={handleChange}
            />
            {/* <label for="rating1">1</label> */}
          </label>
          <label className="rating-radio">
            2
            <input
              type="radio"
              name="rating"
              value="2"
              id="rating2"
              checked={formData.rating === "2"}
              onChange={handleChange}
            />
            {/* <label for="rating2">2</label> */}
          </label>
          <label className="rating-radio">
            3
            <input
              type="radio"
              name="rating"
              value="3"
              id="rating3"
              checked={formData.rating === "3"}
              onChange={handleChange}
            />
            {/* <label for="rating3">3</label> */}
          </label>
          <label className="rating-radio">
            4
            <input
              type="radio"
              name="rating"
              value="4"
              id="rating4"
              checked={formData.rating === "4"}
              onChange={handleChange}
            />
            {/* <label for="rating4">4</label> */}
          </label>
          <label className="rating-radio">
            5
            <input
              type="radio"
              name="rating"
              value="5"
              id="rating5"
              checked={formData.rating === "5"}
              onChange={handleChange}
            />
            {/* <label for="rating5">5</label> */}
          </label>
        </div>

        <button type="submit">Submit Feedback</button>
      </form>
    </>
  );
};

export default FeedbackForm;
