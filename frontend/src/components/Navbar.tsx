function Navbar() {

  return (
    <nav className="navbar">

      <a href="#home" className="logo">
        OLUWATOYOSI
      </a>


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


      <a href="#contact">
        <button className="nav-button">
          Hire Me
        </button>
      </a>


    </nav>
  )
}


export default Navbar