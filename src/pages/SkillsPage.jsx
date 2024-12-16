import { Link } from "react-router-dom"
import github from '../assets/GitHub.png'
import linkedin from '../assets/linkedinlogo.png'
import facebook from '../assets/facebook-logo.png'
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
import redux from '../assets/redux-icon.png'
import bootstrap from '../assets/bootstrap-logo.png'
import openNav from '../extra/opennav'
import { motion } from "framer-motion"

import '../css/SkillsPage.css'

export default function SkillsPage() {
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
            <main id="skillspage-main">
                <div className="skills-page-div">
                    <motion.div id="languages-div"
                                animate={{opacity: 1}}
                                initial={{opacity: 0}}
                                transition={{duration: 1}}>
                        <h2>Languages</h2>
                        <div id="language-icons-div" className="w-100 d-flex justify-content-around align-items-center p-3">
                            <motion.img className="skill-image" src={html} alt="html logo"
                                        animate={{rotate: 360}}
                                        transition={{duration: 1}}></motion.img>
                            <motion.img className="skill-image" src={css} alt="css logo"
                                        animate={{rotate: 360}}
                                        transition={{duration: 1}}></motion.img>
                            <motion.img className="js-image" src={javascript} alt="javascript logo"
                                        animate={{rotate: 360}}
                                        transition={{duration: 1}}></motion.img>
                            <motion.img className="skill-image" src={php} alt="php logo"
                                        animate={{rotate: 360}}
                                        transition={{duration: 1}}></motion.img>
                            <motion.img className="skill-image" src={java} alt="java logo"
                                        animate={{rotate: 360}}
                                        transition={{duration: 1}}></motion.img>
                            <motion.img className="skill-image" src={python} alt="python logo"
                                        animate={{rotate: 360}}
                                        transition={{duration: 1}}></motion.img>
                            <motion.img className="skill-image" src={csharp} alt="c# logo"
                                        animate={{rotate: 360}}
                                        transition={{duration: 1}}></motion.img>
                            <motion.img className="skill-image" src={sql} alt="sql logo"
                                        animate={{rotate: 360}}
                                        transition={{duration: 1}}></motion.img>
                        </div>
                    </motion.div>
                    <motion.div id="frameworks-div"
                         animate={{opacity: 1}}
                         initial={{opacity: 0}}
                         transition={{duration: 1}}>
                        <h2>Frameworks & Libraries</h2>
                        <div id="framework-icons-div" className="w-100 d-flex justify-content-around align-items-center p-3">
                            <motion.img className="skill-image" src={react} alt="react logo"
                                        animate={{rotate: 360}}
                                        transition={{duration: 1}}></motion.img>
                            <motion.img className="skill-image" src={redux} alt="redux logo"
                                        animate={{rotate: 360}}
                                        transition={{duration: 1}}></motion.img>
                            <motion.img className="skill-image" src={jquery} alt="jquery logo"
                                        animate={{rotate: 360}}
                                        transition={{duration: 1}}></motion.img>
                            <motion.img className="skill-image" src={bootstrap} alt="bootstrap logo"
                                        animate={{rotate: 360}}
                                        transition={{duration: 1}}></motion.img>
                        </div>
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