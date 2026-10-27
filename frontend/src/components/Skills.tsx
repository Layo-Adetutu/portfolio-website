import { useEffect, useState, type ReactNode } from "react"

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiPython,
  SiFastapi,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiSqlite,
  SiGit,
  SiGithub,
  SiPostman,
  SiVite,
  SiTailwindcss,
} from "react-icons/si"

import { FaCode, FaDatabase, FaServer, FaTools } from "react-icons/fa"

type Skills = {
  Frontend: string[]
  Backend: string[]
  Database: string[]
  Tools: string[]
}

const iconMap: Record<string, ReactNode> = {
  HTML: <SiHtml5 />,
  HTML5: <SiHtml5 />,
  CSS: <SiCss />,
  CSS3: <SiCss />,
  JavaScript: <SiJavascript />,
  TypeScript: <SiTypescript />,
  React: <SiReact />,
  "React.js": <SiReact />,
  Python: <SiPython />,
  FastAPI: <SiFastapi />,
  Node: <SiNodedotjs />,
  "NodeJS": <SiNodedotjs />,
  "Node.js": <SiNodedotjs />,
  Express: <SiExpress />,
  "Express.js": <SiExpress />,
  MongoDB: <SiMongodb />,
  SQLite: <SiSqlite />,
  Git: <SiGit />,
  GitHub: <SiGithub />,
  Postman: <SiPostman />,
  Vite: <SiVite />,
  "Tailwind CSS": <SiTailwindcss />,
}

const categories = [
  {
    key: "Frontend" as const,
    number: "01",
    description: "Building responsive and engaging user interfaces.",
    icon: <FaCode />,
  },
  {
    key: "Backend" as const,
    number: "02",
    description: "Developing APIs and server-side application logic.",
    icon: <FaServer />,
  },
  {
    key: "Database" as const,
    number: "03",
    description: "Organising and managing application data.",
    icon: <FaDatabase />,
  },
  {
    key: "Tools" as const,
    number: "04",
    description: "Tools that support development and testing workflows.",
    icon: <FaTools />,
  },
]

function Skills() {
  const [skills, setSkills] = useState<Skills | null>(null)

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/skills/`)
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch skills")
        }
        return response.json()
      })
      .then(data => setSkills(data))
      .catch(error => {
        console.error("Error fetching skills:", error)
      })
  }, [])

  return (
    <section id="skills" className="skills">
      <div className="skills-inner">
        <div className="skills-heading">
          <p className="skills-eyebrow">TECHNICAL EXPERTISE</p>

          <h2>
            The tools behind <span>the work.</span>
          </h2>

          <p className="skills-intro">
            Technologies and tools I use to develop interfaces,
            build backend services, and create data-driven applications.
          </p>
        </div>

        <div className="skills-container">
          {categories.map(category => (
            <article className="skill-box" key={category.key}>
              <div className="skill-card-top">
                <span className="skill-number">{category.number}</span>
                <span className="skill-symbol">{category.icon}</span>
              </div>

              <h3>{category.key}</h3>

              <p className="skill-description">
                {category.description}
              </p>

              <div className="skill-tags">
                {skills?.[category.key]?.map((skill, index) => {
                  const icon = iconMap[skill.trim()]

                  return (
                    <span
                      className="skill-tag"
                      key={`${skill}-${index}`}
                      title={skill}
                    >
                      <span className="skill-tag-icon">
                        {icon || <FaCode />}
                      </span>

                      <span>{skill}</span>
                    </span>
                  )
                })}
              </div>
            </article>
          ))}
        </div>

        <p className="skills-footer-note">
          Continuously learning. Always building. Focused on meaningful solutions.
        </p>
      </div>
    </section>
  )
}

export default Skills

