import React, { useState } from "react";

function HomePage() {
  const [fileName, setFileName] = useState(""); // State to store the uploaded file name

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name); // Set the uploaded file name in state
      alert(`File uploaded: ${file.name}`); // Alert file name
    }
  };

  const handleButtonClick = () => {
    document.getElementById("resumeInput").click(); // Trigger the file input click
  };

  return (
    <div className="homepage">
      {/* Header Section */}
      <header className="header">
        <h1>AI Career Mentor</h1>
        <p>Your personalized guide to success in AI and tech careers.</p>
      </header>

      {/* Resume Upload Section */}
      <section className="resume-upload blue-background">
        <div className="upload-container">
          <h2>Upload Your Resume</h2>
          {/* Textarea for Job Description */}
          <label htmlFor="jobDescription" className="textarea-label">
            Your Job Description:
          </label>
          <textarea
            id="jobDescription"
            className="resume-textarea"
            placeholder="Write your desired job description or responsibilities."
          ></textarea>
          {/* Textarea for Career Summary */}
          <label htmlFor="careerSummary" className="textarea-label">
            Career Summary/Note:
          </label>
          <textarea
            id="careerSummary"
            className="resume-textarea"
            placeholder="Write a brief summary or note about your career."
          ></textarea>
          {/* File Upload Button */}
          <input
            type="file"
            id="resumeInput"
            accept=".doc, .docx, .pdf"
            style={{ display: "none" }}
            onChange={handleFileUpload}
          />
          <button onClick={handleButtonClick} className="upload-button">
            Upload Resume
          </button>
          {fileName && <p className="file-name">Uploaded File: {fileName}</p>}
        </div>
      </section>

      {/* Learning Paths Section */}
      <section className="learning-paths">
        <h2>Explore Learning Paths</h2>
        <div className="paths">
          <div className="path-card">
            <h3>Data Scientist</h3>
            <p>Learn Python, Machine Learning, and Data Visualization.</p>
          </div>
          <div className="path-card">
            <h3>AI Engineer</h3>
            <p>Master Deep Learning, TensorFlow, and Model Deployment.</p>
          </div>
          <div className="path-card">
            <h3>ML Researcher</h3>
            <p>Dive into Reinforcement Learning, GANs, and Transformers.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
