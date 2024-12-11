import { Link } from "react-router-dom"
import github from '../assets/GitHub.png'
import linkedin from '../assets/linkedinlogo.png'
import facebook from '../assets/facebooklogo.svg'
import instagram from '../assets/instagram.webp'
import earth from '../assets/earth-icon.png'
import openNav from '../extra/opennav'
import project from '../assets/project-icon.png'

import '../css/ProjectsPage.css'

export default function ProjectsPage() {
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
                <div id="side-menu">
                    <i id="menu-icon" class="fa-solid fa-bars" onClick={openNav}></i>
                </div>
            </header>
            <main id='projects-main' class='h-auto'>
                <h1 class="display-4">My Projects</h1>
                <br></br>
                <br></br>
                <div id="projects-div" class="text-dark w-100 d-flex justify-content-between align-items-center">
                    <div id="project-1-div" class="w-50 h-auto p-3 rounded shadow d-flex flex-column justify-content-center align-items-center">
                        <h2 class="text-center font-weight-bold">Gazetteer</h2>
                        <br></br>
                        <Link class="text-center w-75" to="https://gazetteerapp.oliverrpayne.co.uk/" target="_blank"><img src={earth} alt="Gazetteer App Image"></img></Link>
                        <br></br>
                        <p class="text-center"><b>Gazetteer</b> is a web app designed to work across mobile & desktop devices.
                                                     The app allows users to choose any country in the world, to which specific data will be shown in the form of modals, as well as individual markers on the map.
                                                     Examples of data included are: <b>Weather Forecast, Local News, Country Population, Capital City, Airports, Earthquakes etc. </b>
                                                     Information shown on the UI is gathered through API requests using AJAX calls to PHP routines, utilising cURL to retrieve this information.
                                                     Then the formatted JSON response data is used to display a variety of information to the user.</p>
                    </div>
                    <div id="project-2-div" class="w-50 h-auto p-3 rounded shadow d-flex flex-column justify-content-center align-items-center">
                        <h2 class="text-center font-weight-bold">Project 2</h2>
                        <br></br>
                        <img src={project} alt="" class="w-25"></img>
                        <br></br>
                        <p class="text-center">This is the description about the 2nd project.</p>
                    </div>
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