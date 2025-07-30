// Dépendances React
import React, { useEffect, useRef, useState } from 'react';

// Icônes
import { FaGithub, FaLinkedin, FaLinux, FaServer, FaDatabase, FaNetworkWired, FaGlobe, FaDesktop, FaCode, FaCogs, FaCog, FaLaptopCode } from "react-icons/fa";
import { FaDebian, FaBrain } from "react-icons/fa6";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { IoDesktop, IoLibrarySharp } from "react-icons/io5";
import { SiIonos, SiOvh, SiJavascript, SiPhp, SiReact, SiNextdotjs, SiSymfony, SiElectron, SiCplusplus, SiPython } from "react-icons/si";
import { HiMiniGlobeAlt } from "react-icons/hi2";


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
import Marquee from "react-fast-marquee";


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

        root.style.setProperty('--accent-color', '#ff0d39');
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
            <div className="section skills" id="skills">
                <h1>Compétences</h1>

                <div className={"skills-summary-container"}>
                    <div className={"development-skills-container"}>
                        <h2>Développement informatique</h2>
                        <ul>
                            <li>WEB : PHP, Javascript, React js, Next js</li>
                            <li>Logiciel : Java, C#, C++, Python</li>
                            <li>Base de données : SQL, MySQL</li>
                        </ul>
                        <a href={"#dev"}>En savoir plus</a>
                    </div>
                    <div className={"networking-skills-container"}>
                        <h2>Systèmes et réseaux</h2>
                        <ul>
                            <li>Administration Linux et Windows Server</li>
                            <li>Virtualisation et conteneurs (Docker)</li>
                            <li>Outils de versioning (Git, GitHub)</li>
                        </ul>
                        <a href={"#network"}>En savoir plus</a>
                    </div>
                    <div className={"graphics-skills-container"}>
                        <h2>Création visuel</h2>
                        <ul>
                            <li>Montage photo</li>
                            <li>Montage vidéo</li>
                        </ul>
                        <a href={"#graphic"}>En savoir plus</a>
                    </div>
                </div>
            </div>

            {/* DEV */}
            <div className="section dev" id="dev">
                <h1>Développement informatique</h1>

                <p className={"dev-text"}>J’ai évolué dans différents univers du développement, principalement orienté web.</p>
                <p className={"dev-text"}>De la conception d’interfaces à la gestion de bases de données, j’aime toucher à tout, avec une préférence marquée pour le backend, et découvrir de nouvelles technologies au fil des projets.</p>

                <div className="dev-row">

                    <div className={"dev-element"}>
                        <div className={"dev-element-header"}>
                            <HiMiniGlobeAlt size={30} className="icon" />
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
                            <FaBrain size={30} className="icon" />
                            <p className={"dev-element-title"}>Langages pour logiciels</p>
                        </div>
                        <div className="dev-element-content">
                            <p className={"dev-element-element"}>Java</p>
                            <p className={"dev-element-element"}>C#</p>
                            <p className={"dev-element-element"}>C++</p>
                            <p className={"dev-element-element"}>Python</p>
                        </div>
                    </div>


                    <div className={"dev-element"}>
                        <div className={"dev-element-header"}>
                            <IoLibrarySharp size={30} className="icon" />
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
                            <FaDatabase size={30} className="icon" />
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
                            <FaCog size={30} className="icon" />
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
                            <IoDesktop size={30} className="icon" />
                            <p className={"dev-element-title"}>Environnements de travail</p>
                        </div>
                        <div className="dev-element-content">
                            <p className={"dev-element-element"}>.Net</p>
                            <p className={"dev-element-element"}>JetBrains</p>
                            <p className={"dev-element-element"}>Visual Studio / Code</p>
                            <p className={"dev-element-element"}>XAMPP / WAMP / MAMP </p>
                        </div>
                    </div>

                </div>

            </div>

            <div className="section network" id="network">
                <h1>Systèmes et réseaux</h1>

                <div className="network-content">
                    <div className="network-item">
                        <FaServer size={30} className="icon" />
                        <div>
                            <h3>Administration Linux</h3>
                            <p>Maîtrise de Debian et Ubuntu, configuration de serveurs avec Apache, FTP (FileZilla), MySQL...</p>
                        </div>
                    </div>

                    <div className="network-item">
                        <FaNetworkWired size={30} className="icon" />
                        <div>
                            <h3>Serveur dédié personnel</h3>
                            <p>Hébergement et gestion de projets personnels sur serveur dédié auto-hébergé.</p>
                        </div>
                    </div>

                    <div className="network-item">
                        <FaDatabase size={30} className="icon" />
                        <div>
                            <h3>Hébergement & Déploiement</h3>
                            <p>Déploiement de projets sur OVH et Ionos, gestion DNS, SSL, FTP et noms de domaine.</p>
                        </div>
                    </div>
                </div>

                <div className="marquee">
                    <Marquee autoFill={true} className={"marquee-component"}>
                        <div className="marquee-container">
                            <FaDebian size={50} className="zp-anim marquee-content" />
                            <FaLinux size={50} className="zp-anim marquee-content" />
                            <SiIonos size={50} className="zp-anim marquee-content" />
                            <SiOvh size={50} className="zp-anim marquee-content" />
                        </div>
                    </Marquee>
                </div>
            </div>

            <div className="section graphics" id="graphics">
                <h1>Création graphique</h1>

                <div className="graphics-container">
                    <div className="graphic-block">
                        <h2>Visuels & maquettes</h2>
                        <p>
                            Je conçois des maquettes visuelles pour mes interfaces web et logicielles avant développement. Cela me permet de réfléchir à l’ergonomie, au design et à l’expérience utilisateur.
                        </p>
                        <ul>
                            <li>Wireframes & UI mockups</li>
                            <li>Prévisualisations d'interfaces</li>
                            <li>Identité visuelle de projets</li>
                        </ul>
                    </div>

                    <div className="graphic-block">
                        <h2>Montage photo & vidéo</h2>
                        <p>
                            Je réalise des montages photo ou vidéo quand le projet l’exige : que ce soit pour illustrer un site, une présentation ou produire du contenu visuel propre.
                        </p>
                        <ul>
                            <li>Retouche d’images, compositions</li>
                            <li>Montage vidéo pour démonstrations ou réseaux</li>
                            <li>Ajout de musiques, transitions, effets</li>
                        </ul>
                    </div>
                </div>

                <div className="graphics-summary">
                    <p>
                        Même si ce n’est pas mon activité principale, je suis capable de produire ce type de contenus quand c’est nécessaire. J’aime garder une approche polyvalente et proactive pour servir au mieux mes projets, sans attendre que les choses soient faites à ma place.
                    </p>
                </div>
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
                        <p Style={"color:var(--accent-color); font-weight:bold"}>{careerInfo.place} - {careerInfo.year}</p>
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
