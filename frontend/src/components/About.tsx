import { useState, useEffect } from "react"


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
    .then(response => response.json())
    .then(data => {
      setBio(data)
    })

}, [])

  return (
    <section id="about" className="about">

      <div className="about-container">

        <h2>About Me</h2>

        <p>
          {bio?.name} is a {bio?.title} with a growing passion for
          software engineering and building technology that solves
          real-world problems.{bio?.tagline}
        </p>

        <p>
          {bio?.name} specializes in creating responsive websites and backend systems
          using modern technologies like React, TypeScript, Python, and FastAPI.
        </p>

        <p>
          {bio?.name}'s goal is to become a well-rounded software engineer who builds
          scalable and impactful digital solutions.
        </p>

      </div>

    </section>
  )
}

export default About