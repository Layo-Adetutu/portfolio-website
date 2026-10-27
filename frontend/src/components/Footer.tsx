function Footer() {
return ( <footer className="footer"> <div className="footer-content"> <a href="#home" className="footer-brand">
Oluwatoyosi Isa<span>.</span> </a>

    <p className="footer-role">
      Full-Stack Developer <span>·</span> Aspiring Software Engineer
    </p>

    <p className="footer-description">
      Building thoughtful digital experiences and practical software
      solutions, one project at a time.
    </p>

    <nav className="footer-links" aria-label="Footer links">
      <a
        href="https://github.com/Layo-Adetutu"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub <span aria-hidden="true">↗</span>
      </a>

      <a
        href="https://www.linkedin.com/in/oluwatoyosi-isa-b05231384/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn <span aria-hidden="true">↗</span>
      </a>

      <a href="mailto:isatoyosi@gmail.com">
        Email <span aria-hidden="true">↗</span>
      </a>
    </nav>

    <div className="footer-divider" />

    <p className="copyright">
      © {new Date().getFullYear()} Oluwatoyosi Isa. All rights reserved.
    </p>

    <a href="#home" className="back-to-top">
      Back to top ↑
    </a>
  </div>
</footer>

)
}

export default Footer
