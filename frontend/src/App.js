import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import FeedbackForm from "./components/feedbackForm";
import FeedbackDashboard from "./components/feedbackDashboard";
import '../src/App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FeedbackForm />} />
        <Route path="/dashboard" element={<FeedbackDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
