import { useEffect, useState } from "react"
import my2image from "../assets/my2image.jpg"

type Bio = {
  name: string
  title: string
  tagline: string
  about: string
}

function Hero() {
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
    <section id="home" className="hero">
      <div className="hero-text">
        <p className="hero-eyebrow">
          FULL-STACK DEVELOPER <span>•</span> NIGERIA
        </p>

        <h1>
          Building digital experiences that{" "}
          <span>make an impact.</span>
        </h1>

        <p className="hero-description">
          I design , develop and manage responsive web applications, build robust
          backend services, and create data-driven solutions that solve
          real-world problems.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="hero-button hero-button-primary">
            Explore My Work <span aria-hidden="true">→</span>
          </a>

          <a href="#contact" className="hero-button hero-button-secondary">
            Get In Touch
          </a>
        </div>

        <div className="hero-highlights">
          <div className="hero-highlight">
            <strong>3+</strong>
            <span>Websites Built</span>
          </div>

          <div className="hero-highlight">
            <strong>1+</strong>
            <span>Backend Application</span>
          </div>

          <div className="hero-highlight">
            <strong>5+</strong>
            <span>Projects & Experiments</span>
          </div>

          <div className="hero-highlight">
            <strong>∞</strong>
            <span>Always Learning</span>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <div className="hero-image-frame">
          <img
            src={my2image}
            alt="Oluwatoyosi Adetutu Isa, Full-Stack Developer"
            className="profile-image"
          />
        </div>

        <div className="hero-image-caption">
          <span className="caption-dot" />
          <div>
            <strong>{bio?.title || "Full-Stack Developer"}</strong>
            <p>Building solutions with purpose.</p>
          </div>
        </div>

        <div className="hero-floating-note">
          <span className="floating-note-symbol">✦</span>
          <p>
            Turning ideas into functional, beautiful, and scalable web
            solutions.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero

