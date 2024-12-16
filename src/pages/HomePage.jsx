import { Link } from "react-router-dom"
import github from '../assets/GitHub.png'
import linkedin from '../assets/linkedinlogo.png'
import facebook from '../assets/facebook-logo.png'
import instagram from '../assets/instagram.webp'
import ollie from '../assets/Ollie2.jpeg'
import openNav from '../extra/opennav'

import { motion } from "framer-motion"

import '../css/HomePage.css'

export default function HomePage() {

  return (
    <>
      <header>
        <div className="logo">
          <h1><Link to='/'>Oliver Payne</Link></h1>
          <h5><em><Link to='/'>Full-Stack Developer</Link></em></h5>
        </div>
        <div className="list-container">
          <ul className="list">
            <motion.li className="list-item"><Link to='/'>Portfolio</Link></motion.li>
            <motion.li className="list-item"><Link to="/skills">Skills</Link></motion.li>
            <motion.li className="list-item"><Link to="/experience">Experience</Link></motion.li>
            <motion.li className="list-item"><Link to="/projects">Projects</Link></motion.li>
            <motion.li className="list-item"><Link to="/contact">Contact</Link></motion.li>
          </ul>
        </div>
        <div id="side-menu">
          <i id="menu-icon" className="fa-solid fa-bars" onClick={openNav}></i>
        </div>
      </header>
      <main id="homepage-main">
            <motion.div className="photo" 
                        animate={{scale: 1}}
                        initial={{scale: 0}}
                        transition={{duration: 1}}>
              <img src={ollie} alt="Oliver Payne" id="ollie-img" className="shadow-lg"/>
            </motion.div>
            <motion.div className="about-me"
                        animate={{opacity: 1}}
                        initial={{opacity: 0}}
                        transition={{duration: 1.5}}>
              <h2>Profile</h2><br/>
              <p>Hello! I am a Full-Stack Developer from London, currently enchancing my skills with IT Career Switch to help achieve my goal of working full-time within the industry.</p>
              <p>I find great joy in the creative and problem-solving elements of coding, using my expertise to develop a range of applications. 
                 Please visit the projects section to explore the range of applications I have created.</p>
              <p>If you have any questions or need further information, don't hesitate to reach out to me!</p>
            </motion.div>
        </main>
        <footer>
          <div className="social-links">
            <h3>Social Links</h3>
            <div className="social-images">
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
