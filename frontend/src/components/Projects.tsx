
import { useEffect, useState } from "react"

import lemonfarm from "../assets/images/lemonfarm.jpg"
import primestandard from "../assets/images/primestandard.jpg"
import portfolio from "../assets/images/pw.jpg"
import visitorFullstack from "../assets/images/vma.jpg"
import proximAviation from "../assets/images/pap.jpg"
import visitorFrontend from "../assets/images/vma-mvp.jpg"
import proximCars from "../assets/images/pc.jpg"
import inventorySystem from "../assets/images/ims.jpg"
import digitalBanking from "../assets/images/dbms.jpg"
import visitorBackend from "../assets/images/vmabackend.jpg"
import studentRecords from "../assets/images/src.jpg"
import snakeGame from "../assets/images/sg.jpg"
import issTracker from "../assets/images/iss.jpg"
import habitTracker from "../assets/images/ht.jpg"
import rainAlert from "../assets/images/ras.jpg"

type Category = "All Projects" | "Full-Stack" | "Frontend" | "Backend" | "Python"

type Project = {
id: number
title: string
description: string
categories: string[]
image: string
tech_stack: string[]
github: string
demo: string
}

const projectImages: Record<string, string> = {
"lemonfarm.jpg": lemonfarm,
"primestandard.jpg": primestandard,
"pw.jpg": portfolio,
"vma.jpg": visitorFullstack,
"pap.jpg": proximAviation,
"vma-mvp.jpg": visitorFrontend,
"pc.jpg": proximCars,
"ims.jpg": inventorySystem,
"dbms.jpg": digitalBanking,
"vmabackend.jpg": visitorBackend,
"src.jpg": studentRecords,
"sg.jpg": snakeGame,
"iss.jpg": issTracker,
"ht.jpg": habitTracker,
"ras.jpg": rainAlert,
}

const categories: Category[] = [
"All Projects",
"Full-Stack",
"Frontend",
"Backend",
"Python",
]

function Projects() {
const [projects, setProjects] = useState<Project[]>([])
const [activeCategory, setActiveCategory] =
useState<Category>("All Projects")
const [loading, setLoading] = useState(true)

useEffect(() => {
fetch(`${import.meta.env.VITE_API_URL}/api/projects/`)
.then(response => {
if (!response.ok) {
throw new Error("Failed to fetch projects")
}

    return response.json()
  })
  .then((data: Project[]) => setProjects(data))
  .catch(error => {
    console.error("Error fetching projects:", error)
  })
  .finally(() => setLoading(false))


}, [])

const filteredProjects =
activeCategory === "All Projects"
? projects
: projects.filter(project =>
project.categories?.includes(activeCategory)
)

return ( <section id="projects" className="projects"> <div className="projects-inner"> <div className="projects-heading"> <p className="projects-eyebrow">SELECTED WORK</p>

      <h2>
        Projects that bring ideas <span>to life.</span>
      </h2>

      <p className="projects-intro">
        A collection of websites, applications, and software projects
        showcasing my work across frontend development, backend
        engineering, and Python programming.
      </p>
    </div>

    <div className="project-filters" aria-label="Filter projects by category">
      {categories.map(category => (
        <button
          key={category}
          type="button"
          className={
  activeCategory === category
    ? "project-filter active"
    : "project-filter"
}
          onClick={() => setActiveCategory(category)}
          aria-pressed={activeCategory === category}
        >
          {category}
        </button>
      ))}
    </div>

    {loading ? (
      <p className="projects-message">Loading projects...</p>
    ) : filteredProjects.length === 0 ? (
      <p className="projects-message">
        No projects found in this category.
      </p>
    ) : (
      <div className="projects-container">
        {filteredProjects.map(project => {
          const image = projectImages[project.image]

          return (
            <article className="project-card" key={project.id}>
              <div className="project-image-wrapper">
                {image ? (
                  <img
                    src={image}
                    alt={`${project.title} project preview`}
                    className="project-image"
                    loading="lazy"
                  />
                ) : (
                  <div className="project-image-placeholder">
                    Project Preview
                  </div>
                )}

                <span className="project-category">
                  {project.categories?.[0] || "Development"}
                </span>
              </div>

              <div className="project-card-content">
                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="tags">
                  {project.tech_stack.map((tech, index) => (
                    <span key={`${tech}-${index}`}>{tech}</span>
                  ))}
                </div>

                <div className="project-buttons">
                  {project.github &&
                    !project.github.includes("yourusername") && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link project-link-primary"
                      >
                        GitHub <span aria-hidden="true">↗</span>
                      </a>
                    )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link project-link-secondary"
                    >
                      Live Website <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          )
        })}
      </div>
    )}

    <div className="projects-footer">
      <span className="projects-footer-line" />
      <p>Every project is another opportunity to learn and build better.</p>
      <span className="projects-footer-line" />
    </div>
  </div>
</section>
)}

export default Projects
