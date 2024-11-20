import React from "react";

function HomePage() {
  const handleResumeUpload = () => {
    alert("Resume upload functionality will go here!");
  };

  return (
    <div>
      {/* Header Section */}
      <header style={{ textAlign: "center", padding: "20px", background: "#282c34", color: "white" }}>
        <h1>AI Career Mentor</h1>
        <p>Your personalized guide to success in AI and tech careers.</p>
      </header>

      {/* Learning Paths Section */}
      <section style={{ padding: "20px", textAlign: "center" }}>
        <h2>Explore Learning Paths</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
          <div style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "8px", width: "200px" }}>
            <h3>Data Scientist</h3>
            <p>Learn Python, Machine Learning, and Data Visualization.</p>
          </div>
          <div style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "8px", width: "200px" }}>
            <h3>AI Engineer</h3>
            <p>Master Deep Learning, TensorFlow, and Model Deployment.</p>
          </div>
          <div style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "8px", width: "200px" }}>
            <h3>ML Researcher</h3>
            <p>Dive into Reinforcement Learning, GANs, and Transformers.</p>
          </div>
        </div>
      </section>

      {/* Resume Upload Section */}
      <section style={{ textAlign: "center", marginTop: "40px" }}>
        <h2>Upload Your Resume</h2>
        <button
          onClick={handleResumeUpload}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Upload Resume
        </button>
      </section>
    </div>
  );
}

export default HomePage;
