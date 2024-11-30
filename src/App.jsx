import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Resume from "./components/Resume";

const App = () => {
  const [resumeData, setResumeData] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home setResumeData={setResumeData} />} />
        <Route path="/resume" element={<Resume resumeData={resumeData} />} />
      </Routes>
    </Router>
  );
};

export default App;
