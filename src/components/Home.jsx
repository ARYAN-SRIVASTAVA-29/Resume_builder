import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = ({ setResumeData }) => {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
  });
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [interests, setInterests] = useState([]);
  const [profilePic, setProfilePic] = useState(null);
  const navigate = useNavigate();

  // Handlers for adding dynamic fields
  const addEducation = () => setEducation([...education, ""]);
  const addExperience = () => setExperience([...experience, ""]);
  const addProject = () => setProjects([...projects, { title: "", link: "" }]);
  const addSkill = () => setSkills([...skills, ""]);
  const addInterest = () => setInterests([...interests, ""]);

  const handleInputChange = (section, index, field, value) => {
    const updatedArray = [...section];
    if (field) {
      updatedArray[index][field] = value;
    } else {
      updatedArray[index] = value;
    }
    return updatedArray;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const resumeData = {
      personalInfo,
      education,
      experience,
      projects,
      skills,
      interests,
      profilePic,
    };
    setResumeData(resumeData);
    navigate("/resume");
  };

  return (
    <div className="app">
      <h1>Modern Resume Builder</h1>
      <form onSubmit={handleFormSubmit} className="form">
        <h2>Personal Information</h2>
        <input
          type="text"
          placeholder="Name"
          value={personalInfo.name}
          onChange={(e) =>
            setPersonalInfo({ ...personalInfo, name: e.target.value })
          }
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={personalInfo.email}
          onChange={(e) =>
            setPersonalInfo({ ...personalInfo, email: e.target.value })
          }
          required
        />
        <input
          type="tel"
          placeholder="Phone"
          value={personalInfo.phone}
          onChange={(e) =>
            setPersonalInfo({ ...personalInfo, phone: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="LinkedIn"
          value={personalInfo.linkedin}
          onChange={(e) =>
            setPersonalInfo({ ...personalInfo, linkedin: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="GitHub"
          value={personalInfo.github}
          onChange={(e) =>
            setPersonalInfo({ ...personalInfo, github: e.target.value })
          }
        />

        <h2>Education</h2>
        {education.map((edu, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Education #${index + 1}`}
            value={edu}
            onChange={(e) =>
              setEducation(handleInputChange(education, index, null, e.target.value))
            }
          />
        ))}
        <button type="button" onClick={addEducation}>
          Add Education
        </button>

        <h2>Experience</h2>
        {experience.map((exp, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Experience #${index + 1}`}
            value={exp}
            onChange={(e) =>
              setExperience(handleInputChange(experience, index, null, e.target.value))
            }
          />
        ))}
        <button type="button" onClick={addExperience}>
          Add Experience
        </button>

        <h2>Projects</h2>
        {projects.map((proj, index) => (
          <div key={index} className="project-input">
            <input
              type="text"
              placeholder={`Project Title #${index + 1}`}
              value={proj.title}
              onChange={(e) =>
                setProjects(
                  handleInputChange(projects, index, "title", e.target.value)
                )
              }
            />
            {/* <input
              type="url"
              placeholder="Link"
              value={proj.link}
              onChange={(e) =>
                setProjects(handleInputChange(projects, index, "link", e.target.value))
              }
            /> */}
          </div>
        ))}
        <button type="button" onClick={addProject}>
          Add Project
        </button>

        <h2>Skills</h2>
        {skills.map((skill, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Skill #${index + 1}`}
            value={skill}
            onChange={(e) =>
              setSkills(handleInputChange(skills, index, null, e.target.value))
            }
          />
        ))}
        <button type="button" onClick={addSkill}>
          Add Skill
        </button>

        <h2>Interests</h2>
        {interests.map((interest, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Interest #${index + 1}`}
            value={interest}
            onChange={(e) =>
              setInterests(handleInputChange(interests, index, null, e.target.value))
            }
          />
        ))}
        <button type="button" onClick={addInterest}>
          Add Interest
        </button>

        <h2>Profile Picture</h2>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setProfilePic(URL.createObjectURL(e.target.files[0]))}
        />

        <button type="submit">Generate Resume</button>
      </form>
    </div>
  );
};

export default Home;
