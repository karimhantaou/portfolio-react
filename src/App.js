// Dépendances React
import React, { useEffect, useRef, useState } from 'react';

// Icônes
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { IoMdMail } from "react-icons/io";

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
import ResolutionWarning from "./components/ResolutionWarning";
import education from "./Data/Education";


// Fonction principale de l'application
function App() {
    const navRef = useRef(null);
    const [showNavBar, setShowNavBar] = useState(false);
    const [careerInfo, setCareerInfo] = useState(null);
    const [theme, setThemeState] = useState('dark');

    // Applique le thème au DOM
    const applyTheme = (theme) => {
        const root = document.documentElement;

        if (theme === 'dark') {
            root.style.setProperty('--primary-color', '#0f0f0f');
            root.style.setProperty('--secondary-color', '#EEEEEE');
        } else {
            root.style.setProperty('--primary-color', '#ffffff');
            root.style.setProperty('--secondary-color', '#111111');
        }

        root.style.setProperty('--accent-color', '#fa6c00');
        localStorage.setItem('theme', theme);
        setThemeState(theme);
    };

    // Toggle light/dark mode
    const changeTheme = () => {
        const nextTheme = theme === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme);
    };

    // Initialisation du thème
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        applyTheme(savedTheme);
    }, []);

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

    // Initialise les informations de la première entrée du parcours
    useEffect(() => {
        const firstItem = education[0];

        if (firstItem) {
            setCareerInfo({
                title: firstItem.title,
                description: firstItem.description,
                place: firstItem.place,
                year: firstItem.year
            });
        }

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


    // Gère le clic sur un pin dans le parcours
    const handlePinClick = (title, description, place, year) => {
        setCareerInfo({ title, description, place, year });
    };

    return (
        <div className="main">
            <ResolutionWarning />
            {showNavBar &&
                <nav>

                    <VerticalLine height="100%" width="3" color="var(--accent-color)" />

                    <div className="nav-links">
                        <a href="#presentation" >A propos</a>
                        <a href="#skills">Compétences</a>
                        <a href="#projects">Projets</a>
                        <a href="#career">Parcours</a>
                        <a href="#contact">Contacter</a>
                        <button onClick={changeTheme} className={"main-theme-button zp-anim"}>
                            {localStorage.getItem('theme') === 'dark' ? <MdDarkMode size={25}/> : <MdLightMode size={25}/>}
                        </button>
                    </div>
                </nav>}

            {/* Présentation */}
            <div className="section" id="presentation">
                <div className="left-side">
                    <div style={{ display: 'flex', position: 'relative' }}>
                        <p className="name">Hantaou Karim</p>
                        <img src="./images/photo5.png" className="pfp" alt="Profil" />
                    </div>

                    <p className="title">Développeur Full Stack</p>

                    <a download="CV Hantaou Karim.pdf" href="/pdfs/CV.pdf" className="button-cv">
                        Télécharger mon CV
                    </a>

                    <p className="social-links">
                        <a href="#contact" className="zp-anim"><FaGithub size={40} /></a>
                        <a href="#contact" className="zp-anim"><FaLinkedin size={40} /></a>
                        <a href="#contact" className="zp-anim"><IoMdMail size={40} /></a>
                    </p>

                    <p className="presentation">
                        Passionné de développement informatique, j’ai appris divers langages de programmation et frameworks.
                    </p>

                    <p className="presentation" style={{ marginTop: "20px" }}>
                        Toujours avide de connaissances, je vois chaque défi comme une opportunité d'apprendre.
                    </p>
                </div>

                {/* Sommaire */}
                <div className="right-side">
                    <p className="sommaire-title">Sommaire</p>

                    <div className="right-side-content">
                        <VerticalLine height="100%" width="4" color="var(--accent-color)" />
                        <div className="links">
                            <a href="#presentation">A propos de moi</a>
                            <a href="#skills">Mes compétences</a>
                            <a href="#projects">Mes projets</a>
                            <a href="#career">Mon parcours</a>
                            <a href="#contact" ref={navRef}>Me contacter</a>
                            <button onClick={changeTheme} className="main-theme-button zp-anim">
                                {theme === 'dark' ? <MdDarkMode size={30} /> : <MdLightMode size={30} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Compétences */}
            <div className="section" id="skills">
                <h1>Compétences</h1>
            </div>

            {/* Projets */}
            <div className="section projects" id="projects">
                <h1>Mes projets</h1>
                <EmblaCarousel />
            </div>

            {/* Parcours */}
            <div className="section career" id="career">
                <h1>Mon parcours</h1>
                <p style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>
                    Cliquez sur l'un des pins pour en savoir plus
                </p>

                <Timeline onPinClick={handlePinClick} />

                {careerInfo && (
                    <div className="career-info">
                        <h2>{careerInfo.title}</h2>
                        <p>{careerInfo.place}, {careerInfo.year}</p>
                        <p>{careerInfo.description}</p>
                    </div>
                )}
            </div>

            {/* Contact */}
            <div className="section contact" id="contact">
                <h1>Me contacter</h1>

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
    );
}

export default App;
