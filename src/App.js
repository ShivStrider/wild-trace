import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Report from "./components/ReportForm";
import Dashboard from "./components/Dashboard";
import Auth from "./components/Auth";
import About from "./pages/About"; // Import About Page

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report" element={<Report />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/about" element={<About />} /> {/* Add About Page */}
      </Routes>
    </Router>
  );
}

export default App;
