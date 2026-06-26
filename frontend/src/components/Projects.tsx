import { useEffect, useState } from "react"

type Project = {
  id: number
  title: string
  description: string
  tech_stack: string[]
  github: string
  demo: string
}

function Projects() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/projects/`)
      .then(res => res.json())
      .then(data => setProjects(data))
  }, [])

  return (
    <section id="projects" className="projects">

      <h2>Featured Projects</h2>

      <div className="projects-container">

        {projects.map(project => (
          <div key={project.id} className="project-card">

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="tags">
              {project.tech_stack.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}

              <div className="project-buttons">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>

              </div>


            </div>

          </div>
        ))}

      </div>

    </section>

  )
}

export default Projects