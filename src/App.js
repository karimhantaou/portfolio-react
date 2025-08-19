// Dépendances React
import React, { useEffect, useRef, useState } from 'react';

// Icônes
import { FaGithub, FaLinkedin, FaLinux, FaServer, FaDatabase, FaNetworkWired, FaCode, FaCog, FaFileVideo} from "react-icons/fa";
import {FaDebian, FaBrain, FaPaintbrush} from "react-icons/fa6";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { IoDesktop, IoLibrarySharp } from "react-icons/io5";
import { SiIonos, SiOvh} from "react-icons/si";
import { HiMiniGlobeAlt } from "react-icons/hi2";
import { AiFillPicture } from "react-icons/ai";


// Styles
import './style/Main.css';
import './style/NavBar.css';
import './style/CopyText.css';
import './style/EmblaCarousel.css';
import './style/Timeline.css';

// Composants
import VerticalLine from "./components/VerticalLine";
import NavBar from "./components/NavBar";
import CopyText from "./components/CopyText";
import { EmblaCarousel } from "./components/EmblaCarousel";
import { Timeline } from './components/Timeline';
import education from "./Data/Education";
import Marquee from "react-fast-marquee";
import ReactCompareImage from 'react-compare-image';
import HorizontalLine from "./components/HorizontalLine";

// Fonction principale de l'application
function App() {

    // Vérifie si TouchEvent est défini, sinon crée une version vide (c'est pour éviter les erreurs dans certains environnements)
    if (typeof TouchEvent === 'undefined') {
        window.TouchEvent = function () {};
    }

    const navRef = useRef(null);
    const [showNavBar, setShowNavBar] = useState(false);
    const [careerInfo, setCareerInfo] = useState(null);

    // Observe la section "contact" pour afficher NavBar
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setShowNavBar(!entry.isIntersecting),
            { threshold: 0 }
        );

        if (navRef.current) observer.observe(navRef.current);

        return () => {
            if (navRef.current) observer.unobserve(navRef.current);
        };
    }, []);


    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetID = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetID);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    return (
        <div className="main">

            {/* Présentation */}
            <div className="section" id="presentation">
                <div className="left-side">

                    <div>
                        <img src="./images/photo5.png" className="pfp" alt="Profil" />
                        <p className="name">Hantaou Karim</p>
                        <p className="title">Développeur Full Stack</p>
                    </div>

                    <div>
                        <p className="presentation">
                            Passionné de développement informatique, j’ai appris divers langages de programmation et frameworks.
                        </p>
                        <p className="presentation" style={{ marginTop: "10px" }}>
                            Toujours avide de connaissances, je vois chaque défi comme une opportunité d'apprendre.
                        </p>
                    </div>

                    <div>
                        <a download="CV Hantaou Karim.pdf" href="/pdfs/CV.pdf" className="button-cv">
                            Télécharger mon CV
                        </a>
                        <p className="social-links">
                            <a href="#contact" className="zp-anim"><FaGithub size={40} /></a>
                            <a href="#contact" className="zp-anim"><FaLinkedin size={40} /></a>
                            <a href="#contact" className="zp-anim"><IoMdMail size={40} /></a>
                        </p>
                    </div>

                </div>
            </div>


            <div className="section">
                <h1>Développement informatique</h1>
                    <div className="dev-text">
                        <p>De la conception d’interfaces à la gestion de bases de données, j’aime toucher à tout, avec une préférence marquée pour le backend, et découvrir de nouvelles technologies au fil des projets.</p>
                    </div>

                <div className={"dev-element-container"}>

                    <div className={"dev-element"}>
                        <div className={"dev-element-header"}>
                            <HiMiniGlobeAlt size={25} className="icon" />
                            <p className={"dev-element-title"}>Langages Web</p>
                        </div>
                        <div className="dev-element-content">
                            <p className={"dev-element-element"}>Javascript</p>
                            <p className={"dev-element-element"}>PHP</p>
                            <p className={"dev-element-element"}>HTML/CSS</p>
                        </div>
                    </div>

                    <div className={"dev-element"}>
                        <div className={"dev-element-header"}>
                            <FaBrain size={25} className="icon" />
                            <p className={"dev-element-title"}>Langages pour logiciels</p>
                        </div>
                        <div className="dev-element-content">
                            <p className={"dev-element-element"}>Java</p>
                            <p className={"dev-element-element"}>C#</p>
                            <p className={"dev-element-element"}>C++</p>
                            <p className={"dev-element-element"}>Python</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="section">

                <div className="dev-element-container">


                        <div className={"dev-element"}>
                            <div className={"dev-element-header"}>
                                <IoLibrarySharp size={25} className="icon" />
                                <p className={"dev-element-title"}>Frameworks & bibliothèques</p>
                            </div>
                            <div className="dev-element-content">
                                <p className={"dev-element-element"}>React js</p>
                                <p className={"dev-element-element"}>Next js</p>
                                <p className={"dev-element-element"}>Symfony</p>
                                <p className={"dev-element-element"}>Electron</p>
                            </div>
                        </div>

                        <div className={"dev-element"}>
                            <div className={"dev-element-header"}>
                                <FaDatabase size={25} className="icon" />
                                <p className={"dev-element-title"}>Bases de données</p>
                            </div>
                            <div className="dev-element-content">
                                <p className={"dev-element-element"}>SQL</p>
                                <p className={"dev-element-element"}>MySQL</p>
                                <p className={"dev-element-element"}>MongoDB</p>
                                <p className={"dev-element-element"}>PostgreSQL</p>
                            </div>
                        </div>

                        <div className={"dev-element"}>
                            <div className={"dev-element-header"}>
                                <FaCog size={25} className="icon" />
                                <p className={"dev-element-title"}>Outils et technologies</p>
                            </div>
                            <div className="dev-element-content">
                                <p className={"dev-element-element"}>Git</p>
                                <p className={"dev-element-element"}>GitHub</p>
                                <p className={"dev-element-element"}>Agile/Scrum</p>
                            </div>
                        </div>

                        <div className={"dev-element"}>
                            <div className={"dev-element-header"}>
                                <IoDesktop size={25} className="icon" />
                                <p className={"dev-element-title"}>Environnements de travail</p>
                            </div>
                            <div className="dev-element-content">
                                <p className={"dev-element-element"}>.Net</p>
                                <p className={"dev-element-element"}>JetBrains</p>
                                <p className={"dev-element-element"}>Visual Studio / Code</p>
                                <p className={"dev-element-element"}>WAMP </p>
                            </div>
                        </div>


                </div>

            </div>

            <div className="section contact" id="contact">
                <h1>Me contacter</h1>


                <div className={"contact-container"}>
                    <div className="mail-container">
                        <p className="copy-notification">Mail copié !</p>
                        <CopyText text="karim.hantaou@gmail.com" />
                    </div>

                    <div className="social-links">
                        <a href="https://github.com/karimhantaou/"><FaGithub size={50} className="zp-anim" /></a>
                        <a href="https://www.linkedin.com/in/karim-hantaou/"><FaLinkedin size={50} className="zp-anim" /></a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;
