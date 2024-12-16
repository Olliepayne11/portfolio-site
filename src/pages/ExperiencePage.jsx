import { Link } from "react-router-dom"
import github from '../assets/GitHub.png'
import linkedin from '../assets/linkedinlogo.png'
import facebook from '../assets/facebook-logo.png'
import instagram from '../assets/instagram.webp'
import openNav from '../extra/opennav'
import cv from '../assets/cv.png'
import { motion } from "framer-motion"

import '../css/ExperiencePage.css'

export default function ExperiencePage() {
    return (
        <>
            <header>
                <div className="logo">
                  <h1><Link to='/'>Oliver Payne</Link></h1>
                  <h5><em><Link to='/'>Full-Stack Developer</Link></em></h5>
                </div>
                <div className="list-container">
                  <ul className="list">
                    <li className="list-item"><Link to='/'>Portfolio</Link></li>
                    <li className="list-item"><Link to="/skills">Skills</Link></li>
                    <li className="list-item"><Link to="/experience">Experience</Link></li>
                    <li className="list-item"><Link to="/projects">Projects</Link></li>
                    <li className="list-item"><Link to="/contact">Contact</Link></li>
                  </ul>
                </div>
                <div id="side-menu">
                    <i id="menu-icon" className="fa-solid fa-bars" onClick={openNav}></i>
                </div>
            </header>
            <main id="experience-main">
                <div id="cv-div">
                    <h1 className="text-center text-decoration-underline">My CV</h1>
                    <br></br>
                    <img src={cv} width="200"></img>
                </div>
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