import React from "react";
import "./Resume.css";

const Resume = ({ resumeData }) => {
  if (!resumeData) {
    return (
      <div className="resume">
        <h2>No data provided. Please go back and fill the form.</h2>
      </div>
    );
  }

  const {
    personalInfo,
    education,
    experience,
    projects,
    skills,
    interests,
    profilePic,
  } = resumeData;

  return (
    <div className="resume">
      <div className="resume-container">
        <div className="header">
          {profilePic && (
            <img src={profilePic} alt="Profile" className="profile-pic" />
          )}
          <h1>{personalInfo.name}</h1>
          <p>{personalInfo.email} | {personalInfo.phone}</p>
          <p>{personalInfo.linkedin} | {personalInfo.github}</p>
        </div>

        <div className="section">
          <h2>Education</h2>
          <ul>
            {education.map((edu, index) => (
              <li key={index}>{edu}</li>
            ))}
          </ul>
        </div>

        <div className="section">
          <h2>Experience</h2>
          <ul>
            {experience.map((exp, index) => (
              <li key={index}>{exp}</li>
            ))}
          </ul>
        </div>

        <div className="section">
          <h2>Projects</h2>
          <ul>
            {projects.map((proj, index) => (
              <li key={index}>
                {proj.title} - <a href={proj.link}>{proj.link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="section">
          <h2>Skills</h2>
          <p>{skills.join(", ")}</p>
        </div>

        <div className="section">
          <h2>Interests</h2>
          <p>{interests.join(", ")}</p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
