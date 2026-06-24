import { useEffect, useState } from "react"


type ContactInfo = {
  email: string
  phone: string
  location: string
  github: string
  linkedin: string
}


function Contact() {

  const [contact, setContact] = useState<ContactInfo | null>(null)


  useEffect(() => {

    fetch(`${import.meta.env.VITE_API_URL}/api/contact/`)
      .then(response => response.json())
      .then(data => {
        setContact(data)
      })

  }, [])



  return (
    <section id="contact" className="contact">

      <div className="contact-container">


        <h2>Contact Me</h2>


        <p className="contact-intro">
          Have a project in mind or want to work together?
          Feel free to reach out.
        </p>



        <div className="contact-cards">


          <div className="contact-card">

            <h3>Email</h3>

            <p>
              {contact?.email}
            </p>

          </div>



          <div className="contact-card">

            <h3>Phone</h3>

            <p>
              {contact?.phone}
            </p>

          </div>



          <div className="contact-card">

            <h3>Location</h3>

            <p>
              {contact?.location}
            </p>

          </div>


        </div>



        <div className="contact-actions">


          <a
            href={`mailto:${contact?.email}`}
            className="contact-btn"
          >
            Email Me
          </a>



          <a
            href={contact?.linkedin}
            target="_blank"
            className="contact-btn"
          >
            LinkedIn
          </a>



          <a
            href={contact?.github}
            target="_blank"
            className="contact-btn"
          >
            GitHub
          </a>



          <a
            href={`https://wa.me/${contact?.phone}`}
            target="_blank"
            className="contact-btn"
          >
            WhatsApp
          </a>


        </div>



      </div>


    </section>
  )
}


export default Contact