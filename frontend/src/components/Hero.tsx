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

    {/*<-- fetch("http://127.0.0.1:8000/api/bio/") */}

    fetch(`${import.meta.env.VITE_API_URL}/api/bio/`)
      .then(response => response.json())
      .then(data => {
        setBio(data)
      })

  }, [])


  return (
    <section id="home" className="hero"> 

      <div className="hero-text">

        <h3>Now that you are in my portfolio , I am</h3>

        <h1>
          {bio?.name}
        </h1>

        <h2>
          {bio?.title}
        </h2>

        <h4 className="sub-title">
          {bio?.about}
        </h4>

      <div className="hero-buttons">

        <a href="#contact">
          <button>Need To Hire Me ?</button>
        </a>

        <a href="#projects">
          <button>View My Projects</button>
        </a>

      </div>


      </div>


     <div className="hero-image">

      <img 
        src={my2image}
        alt="Oluwatoyosi Isa"
        className="profile-image"
      />

    </div>


    </section>
  )
}


export default Hero