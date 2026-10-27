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
.then(response => {
if (!response.ok) {
throw new Error("Failed to fetch contact information")
}

    return response.json()
  })
  .then(data => setContact(data))
  .catch(error => {
    console.error("Error fetching contact information:", error)
  })


}, [])

const whatsappNumber = contact?.phone.replace(/\D/g, "")

return ( <section id="contact" className="contact"> <div className="contact-container"> <div className="contact-heading"> <p className="contact-eyebrow">LET'S CONNECT</p>

      <h2>
        Have a project in mind? <span>Let's talk.</span>
      </h2>

      <p className="contact-intro">
        I'm always open to discussing new opportunities, interesting
        projects, and ways to create meaningful digital solutions.
        If you'd like to work together, I'd love to hear from you.
      </p>
    </div>

    <div className="contact-layout">
      <div className="contact-details">
        <div className="contact-details-heading">
          <h3>Get in touch</h3>
          <p>
            Choose your preferred way to reach me. I'll be glad to
            connect with you.
          </p>
        </div>

        <a
          href={contact?.email ? `mailto:${contact.email}` : undefined}
          className="contact-card"
        >
          <span className="contact-icon" aria-hidden="true">
            ✉
          </span>

          <span className="contact-card-content">
            <span className="contact-card-label">EMAIL</span>
            <span className="contact-card-value">
              {contact?.email || "Loading email..."}
            </span>
          </span>

          <span className="contact-arrow" aria-hidden="true">↗</span>
        </a>

        <a
          href={contact?.phone ? `tel:${contact.phone}` : undefined}
          className="contact-card"
        >
          <span className="contact-icon" aria-hidden="true">
            ☎
          </span>

          <span className="contact-card-content">
            <span className="contact-card-label">PHONE</span>
            <span className="contact-card-value">
              {contact?.phone || "Loading phone number..."}
            </span>
          </span>

          <span className="contact-arrow" aria-hidden="true">↗</span>
        </a>

        <div className="contact-card">
          <span className="contact-icon" aria-hidden="true">
            ⌖
          </span>

          <span className="contact-card-content">
            <span className="contact-card-label">LOCATION</span>
            <span className="contact-card-value">
              {contact?.location || "Loading location..."}
            </span>
          </span>
        </div>

        <div className="contact-socials">
          {contact?.github && (
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
          )}

          {contact?.linkedin && (
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          )}

          {whatsappNumber && (
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link"
            >
              WhatsApp <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>

      <div className="contact-message-panel">
        <span className="contact-panel-decoration" aria-hidden="true">
          ✦
        </span>

        <p className="contact-panel-eyebrow">HAVE AN IDEA?</p>

        <h3>Let's build something meaningful.</h3>

        <p>
          Whether it's a website, a software project, a collaboration,
          or a new professional opportunity, feel free to reach out.
        </p>

        <a
          href={contact?.email ? `mailto:${contact.email}` : undefined}
          className="contact-main-button"
        >
          Send Me an Email <span aria-hidden="true">→</span>
        </a>

        <div className="contact-panel-footer">
          <span className="contact-status-dot" />
          Open to opportunities and collaboration
        </div>
      </div>
    </div>
  </div>
</section>


)
}

export default Contact
