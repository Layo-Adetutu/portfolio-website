function Navbar() {
return ( <nav className="navbar"> <a href="#home" className="logo">
OLUWATOYOSI ISA<span>.</span> </a>

  <ul className="nav-links">
    <li>
      <a href="#home">Home</a>
    </li>
    <li>
      <a href="#about">About</a>
    </li>
    <li>
      <a href="#skills">Skills</a>
    </li>
    <li>
      <a href="#projects">Projects</a>
    </li>
    <li>
      <a href="#contact">Contact</a>
    </li>
  </ul>

  <a href="#contact" className="nav-button">
    Let's Talk <span aria-hidden="true">↗</span>
  </a>
</nav>

)
}

export default Navbar
