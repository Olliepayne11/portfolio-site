import { Link } from "react-router-dom"
import github from '../assets/GitHub.png'
import linkedin from '../assets/linkedinlogo.png'
import facebook from '../assets/facebooklogo.svg'
import instagram from '../assets/instagram.webp'
import html from '../assets/HTML-logo.png'
import css from '../assets/css-logo.png'
import javascript from '../assets/javascript-logo.png'
import php from '../assets/php-logo.png'
import java from '../assets/java-logo.png'
import python from '../assets/python-logo.png'
import csharp from '../assets/csharp-logo.png'
import sql from '../assets/sql-logo.png'
import react from '../assets/react-logo.png'
import jquery from '../assets/jquery-logo.webp'
import bootstrap from '../assets/bootstrap-logo.png'

import '../css/SkillsPage.css'

export default function SkillsPage() {
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
            <main id="skillspage-main">
                <div class="skills-page-div">
                        <h2>Languages</h2>
                    <div id="languages-div">
                        <img class="skill-image" src={html} alt="html logo"></img>
                        <img class="skill-image" src={css} alt="css logo"></img>
                        <img class="js-image" src={javascript} alt="javascript logo"></img>
                        <img class="skill-image" src={php} alt="php logo"></img>
                        <img class="skill-image" src={java} alt="java logo"></img>
                        <img class="skill-image" src={python} alt="python logo"></img>
                        <img class="skill-image" src={csharp} alt="c# logo"></img>
                        <img class="skill-image" src={sql} alt="sql logo"></img>
                    </div>
                    <h2>Frameworks & Libraries</h2>
                    <div id="frameworks-div">
                        <img class="skill-image" src={react} alt="react logo"></img>
                        <img class="skill-image" src={jquery} alt="jquery logo"></img>
                        <img class="skill-image" src={bootstrap} alt="bootstrap logo"></img>
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