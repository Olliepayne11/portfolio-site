import { Link } from "react-router-dom"
import github from '../assets/GitHub.png'
import linkedin from '../assets/linkedinlogo.png'
import facebook from '../assets/facebook-logo.png'
import instagram from '../assets/instagram.webp'
import openNav from '../extra/opennav'
import { motion } from "framer-motion"

import React from 'react'
import Swal from "sweetalert2"

import '../css/ContactPage.css'

export default function ContactPage() {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "56c8651f-9ac3-4383-aea2-32c6733420f1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Success!",
        text: "Message has been sent",
        icon: "success",
      });
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

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
            <main id="contact-main">
                <section className="contact">
                    <motion.form onSubmit={onSubmit} 
                                 animate={{opacity: 1}} 
                                 initial={{opacity: 0}} 
                                 transition={{duration: 1}}>
                        <h2>Contact Form</h2>
                        <div className="input-box">
                            <label>Full Name</label>
                            <input type="text" className="field" placeholder="Enter your name" name="name" required></input>
                        </div>
                        <div className="input-box">
                            <label>Email Address</label>
                            <input type="email" className="field" placeholder="Enter your email" name="email" required></input>
                        </div>
                        <div className="input-box">
                            <label>Your Message</label>
                            <textarea name="message" className="field-message" placeholder="Enter your message" required></textarea>
                        </div>
                        <button type="submit">Send</button>
                    </motion.form>
                </section>
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