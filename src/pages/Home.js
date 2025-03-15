import React from "react";
import { Link } from "react-router-dom";
import banner from "../assets/banner.png";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* 📌 Background Image */}
      <div className="background-overlay"></div>

      {/* 📌 Full-width Banner */}
      <div className="banner-container">
        <img src={banner} alt="WildTrace Banner" className="home-banner" />
      </div>

      {/* 📌 Two-column Layout Below */}
      <div className="home-content">
        {/* Left Section: Who We Are & What We Do */}
        <div className="text-section">
          <h2>Who are we?</h2>
          <p>
            We are a global network of wildlife, law enforcement, and technology experts working together 
            to create and maintain the Illegal Wildlife Trade Alert System. Our goal is to provide real-time intelligence, 
            enhance communication, and prevent wildlife trafficking through effective, timely alerts.
          </p>

          <h2>What are we for?</h2>
          <p>
            We aim to create an Illegal Wildlife Trade Alert System to provide timely information and alerts 
            to prevent wildlife smuggling and illegal sales. This system focuses on increasing awareness, 
            coordinating efforts between stakeholders, offering real-time intelligence, promoting legal and policy action, 
            and strengthening global collaboration to protect biodiversity.
          </p>
        </div>

        {/* Right Section: Welcome Message & Button */}
        <div className="welcome-section">
          <h1>Welcome to WildTrace</h1>
          <p>Join us in the fight against illegal wildlife trade.</p>

          <Link to="/report">
            <button className="cta-button">🚨 Report a Case</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
