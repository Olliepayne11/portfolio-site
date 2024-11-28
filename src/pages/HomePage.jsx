import { Link } from "react-router-dom"
import github from '../assets/GitHub.png'
import linkedin from '../assets/linkedinlogo.png'
import facebook from '../assets/facebooklogo.svg'
import instagram from '../assets/instagram.webp'
import ollie from '../assets/Ollie2.jpeg'

import '../css/HomePage.css'

export default function HomePage() {

  return (
    <>
      <header>
        <div class="logo">
          <h1><Link to='/'>Oliver Payne</Link></h1>
          <h5><em><Link to='/'>Web Developer</Link></em></h5>
        </div>
        <div class="list-container">
          <ul class="list">
            <li class="list-item"><Link to='/'>Portfolio</Link></li>
            <li class="list-item"><Link to="/skills">Skills</Link></li>
            <li class="list-item"><Link to="/experience">Experience</Link></li>
            <li class="list-item"><Link to="/projects">Projects</Link></li>
            <li class="list-item"><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </header>
      <main id="homepage-main">
            <div class="photo">
              <img src={ollie} alt="Oliver Payne" id="ollie-img" />
            </div>
            <div class="about-me">
              <h2>About Me</h2><br/>
              <p>Hi! I am an aspiring full stack web developer from London, currently studying with IT Career Switch to help fulfil my goals of working full-time within the industry.</p>
              <p>I thoroughly enjoy both the creative and problem-solving aspects to coding, applying my skills and knowledge to a variety of applications. Click through to the projects page of this website to see the projects I have worked on!</p>
            </div>
        </main>
        <footer>
          <div class="social-links">
            <h3>Social Links</h3>
            <div class="social-images">
              <Link to="https://github.com/Olliepayne11" target="_blank"><img src={github} alt="Github logo" /></Link>
              <Link to="https://www.linkedin.com/in/oliver-payne-56038a157" target="_blank"><img src={linkedin} alt="Linkedin Logo" /></Link>
              <Link to="https://www.facebook.com/oliver.payne.5458?locale=en_GB" target="_blank"><img src={facebook} alt="Facebook Logo" /></Link>
              <Link to="https://www.instagram.com/olliepayne11/" target="_blank"><img src={instagram} alt="Instagram Logo" /></Link>
            </div>
          </div>
        </footer>
    </>
  )
}
