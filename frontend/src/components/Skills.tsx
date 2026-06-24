import { useEffect, useState } from "react" 

type Skills = {
  Frontend: string[]
  Backend: string[]
  Database: string[]
  Tools: string[]
}


function Skills() {
  const [skills, setSkills] = useState<Skills | null>(null)

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/skills/")
      .then(response => response.json())
      .then(data => {
        setSkills(data)
      })
  }, [])

  return (
    <section id="skills" className="skills">

      <h2>My Skills</h2>

      <div className="skills-container">

        <div className="skill-box">
          <h3>Frontend</h3>
          <ul>
            {skills?.Frontend.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="skill-box">
          <h3>Backend</h3>
          <ul>
            {skills?.Backend.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="skill-box">
          <h3>Database</h3>
          <ul>
            {skills?.Database.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="skill-box">
          <h3>Tools</h3>
          <ul>
            {skills?.Tools.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

      </div>

    </section>
  )
}

export default Skills