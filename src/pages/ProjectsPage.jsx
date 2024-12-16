import { Link } from "react-router-dom"
import github from '../assets/GitHub.png'
import linkedin from '../assets/linkedinlogo.png'
import facebook from '../assets/facebook-logo.png'
import instagram from '../assets/instagram.webp'
import earth from '../assets/earth-icon.png'
import openNav from '../extra/opennav'
import project from '../assets/project-icon.png'
import { motion } from "framer-motion"

import '../css/ProjectsPage.css'

export default function ProjectsPage() {
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
            <main id='projects-main' className='h-auto'>
                <h1 className="display-5">My Projects</h1>
                <br></br>
                <div id="projects-div" className="text-dark w-100 d-flex justify-content-between align-items-center">
                    <motion.div id="project-1-div" 
                                className="w-50 h-auto p-3 rounded shadow d-flex flex-column justify-content-center align-items-center"
                                animate={{y: 0}}
                                initial={{y: 300}}
                                transition={{type: "spring", duration: 2}}>
                        <h2 className="text-center font-weight-bold">Gazetteer</h2>
                        <br></br>
                        <Link className="text-center w-75" to="https://gazetteerapp.oliverrpayne.co.uk/" target="_blank"><img src={earth} alt="Gazetteer App Image" className="w-25"></img></Link>
                        <br></br>
                        <p className="text-center"><b>Gazetteer</b> is a web app designed to work across mobile & desktop devices.
                                                     The app allows users to choose any country in the world, to which specific data will be shown in the form of modals, as well as individual markers on the map.
                                                     Examples of data included are: <b>Weather Forecast, Local News, Country Population, Capital City, Airports, Earthquakes etc. </b>
                                                     Information shown on the UI is gathered through API requests using AJAX calls to PHP routines, utilising cURL to retrieve this information.
                                                     Then the formatted JSON response data is used to display a variety of information to the user.</p>
                    </motion.div>
                    <motion.div id="project-2-div" 
                                className="w-50 h-auto p-3 rounded shadow d-flex flex-column justify-content-center align-items-center"
                                animate={{y: 0}}
                                initial={{y: 300}}
                                transition={{type: "spring", duration: 2}}>
                        <h2 className="text-center font-weight-bold">Project 2</h2>
                        <br></br>
                        <img src={project} alt="" className="w-25"></img>
                        <br></br>
                        <p className="text-center">This is the description about the 2nd project.</p>
                    </motion.div>
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