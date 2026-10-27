
import { useState, useEffect } from "react"
import myself from "../assets/myself.jpg"

type Bio = {
  name: string
  title: string
  tagline: string
  about: string
}

function About() {
  const [bio, setBio] = useState<Bio | null>(null)

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/bio/`)
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch bio")
        }
        return response.json()
      })
      .then(data => setBio(data))
      .catch(error => {
        console.error("Error fetching bio:", error)
      })
  }, [])

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <img
            src={myself}
            alt={`${bio?.name || "Oluwatoyosi Adetutu Isa"} working on a laptop`}
            className="about-profile-image"
          />

          <div className="about-image-badge">
            <span className="about-badge-icon">✦</span>
            <div>
              <strong>Problem Solver</strong>
              <p>Always learning. Building for the future.</p>
            </div>
          </div>
        </div>

        <div className="about-content">
          <p className="about-eyebrow">ABOUT ME</p>

          <h2>
            From ideas to <span>impact.</span>
          </h2>

          <p className="about-intro">
            I'm {bio?.name || "Oluwatoyosi Adetutu Isa"}, a{" "}
            {bio?.title || "Full-Stack Developer"} passionate about building
            meaningful digital solutions that solve real-world problems.
          </p>

          <p className="about-description">
            I work across the application lifecycle, from developing
            intuitive, responsive user interfaces to building backend
            services, APIs, and database-driven applications. My technical
            interests span frontend development, backend engineering,
            Python, and database management.
          </p>

          <p className="about-description">
            My goal is to create technology that is functional, maintainable,
            and designed around real user needs. I believe in continuous
            learning, thoughtful problem-solving, and turning ideas into
            practical solutions.
          </p>

          <a href="#projects" className="about-button">
            Explore My Work <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default About


