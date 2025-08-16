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


    // Gère le clic sur un pin dans le parcours
    const handlePinClick = (title, description, place, year) => {
        setCareerInfo({ title, description, place, year });
    };

    return (
        <div className="main">

            {/* Présentation */}
            <div className="section" id="presentation">
                <div className="left-side">
                    <div className="profile">
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
                        </div>
                    </div>
                </div>
            </div>

            {/* Compétences */}
            <div className="section skills" id="skills">
                <h1>Compétences</h1>

                <div className={"skills-summary-container"}>
                    <div className={"development-skills-container"}>
                        <h2> <FaCode/> Développement informatique</h2>
                        <ul>
                            <li>Développement web : frontend & backend</li>
                            <li>Développement logiciel : desktop & scripts</li>
                            <li>Bases de données : conception & requêtes</li>
                        </ul>
                        <a href={"#dev"}>En savoir plus</a>
                    </div>
                    <div className={"networking-skills-container"}>
                        <h2> <FaNetworkWired/> Systèmes et réseaux</h2>
                        <ul>
                            <li>Administration Linux et Windows Server</li>
                            <li>Virtualisation et conteneurs (Docker)</li>
                            <li>Outils de versioning (Git, GitHub)</li>
                        </ul>
                        <a href={"#network"}>En savoir plus</a>
                    </div>
                    <div className={"graphics-skills-container"}>
                        <h2> <FaPaintbrush/> Création visuel</h2>
                        <ul>
                            <li>Montage photo</li>
                            <li>Montage vidéo</li>
                        </ul>
                        <a href={"#graphics"}>En savoir plus</a>
                    </div>
                </div>
            </div>

            {/* DEV */}
            <div className="section dev" id="dev">
                <h1>Développement informatique</h1>

                <div className="dev-row-container">

                    <div className="dev-text">
                        <p>De la conception d’interfaces à la gestion de bases de données, j’aime toucher à tout, avec une préférence marquée pour le backend, et découvrir de nouvelles technologies au fil des projets.</p>
                    </div>

                    <div className="dev-row">

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

                    </div>
                    <div className={"dev-row"}>

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
                    <div className={"graphic-left-side"}>
                        <div className="graphic-block">
                            <h2>  <AiFillPicture/>  Visuels & maquettes</h2>
                            <p>
                                Je conçois des maquettes visuelles pour mes interfaces web et logicielles avant développement. Cela me permet de réfléchir à l’ergonomie, au design et à l’expérience utilisateur.
                            </p>
                            <ul>
                                <li>Prévisualisations d'interfaces</li>
                                <li>Identité visuelle de projets</li>
                            </ul>
                        </div>

                        <HorizontalLine color={"var(--accent-color)"} height={1} width={"100%"} />

                        <div className="graphic-block">
                            <h2><FaFileVideo/> Montage photo & vidéo </h2>
                            <p>
                                Je réalise des montages photo ou vidéo quand le projet l’exige : que ce soit pour illustrer un site, une présentation ou produire du contenu visuel propre.
                            </p>
                            <ul>
                                <li>Retouche d’images, compositions</li>
                                <li>Montage vidéo pour démonstrations ou réseaux</li>
                                <li>Ajout de musiques, transitions, effets</li>
                            </ul>
                        </div>

                        <HorizontalLine color={"var(--accent-color)"} height={1} width={"100%"}/>

                        <div className="graphics-summary">
                            <p>
                                Même si ce n’est pas mon cœur de métier, je sais produire ce type de contenus quand le projet l’exige. J’adopte une approche polyvalente et proactive, en faisant ce qu’il faut, quand il faut.
                            </p>
                        </div>
                    </div>

                    <div className={"graphic-right-side"}>
                        <div className={"graphics-images-slider"}>
                            <ReactCompareImage leftImage="./images/graphic2.png" rightImage="./images/graphic1.png" sliderLineColor={"var(--secondary-color)"} sliderPositionPercentage={0.1} className={"reactCompareImage"}/>
                        </div>
                    </div>

                </div>
            </div>


            <div className="section projects" id="projects">
                <h1>Mes projets</h1>
                <EmblaCarousel />
            </div>



            <div className="section career" id="career">
                <h1>Mon parcours</h1>
                <p style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>
                    Cliquez sur l'un des pins pour en savoir plus
                </p>

                <Timeline onPinClick={handlePinClick} />

                {careerInfo && (
                    <div className="popup-overlay" onClick={() => setCareerInfo(null)}>
                        <div className="popup-content" onClick={e => e.stopPropagation()}>
                            <button className="popup-close" onClick={() => setCareerInfo(null)}>&times;</button>
                            <h2>{careerInfo.title}</h2>
                            <p style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>
                                {careerInfo.place} - {careerInfo.year}
                            </p>
                            <p>{careerInfo.description}</p>
                        </div>
                    </div>
                )}
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
