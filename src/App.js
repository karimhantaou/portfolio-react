// Import des dépendances
import { useEffect, useRef, useState } from 'react';
import {FaGithub, FaLinkedin } from "react-icons/fa";
import {CiMail, CiDark, CiLight} from "react-icons/ci";
import {MdDarkMode, MdLightMode} from "react-icons/md";
import { IoMdMail } from "react-icons/io";


// Import des styles
import './style/Main.css';
import './style/NavBar.css';
import './style/CopyText.css';
import './style/EmblaCarousel.css';
import './style/Timeline.css';


// Import des composants
import VerticalLine from "./components/VerticalLine";
import NavBar from "./components/NavBar";
import CopyText from "./components/CopyText";
import {EmblaCarousel} from "./components/EmblaCarousel";
import {Timeline} from './components/Timeline';
import ResolutionWarning from "./components/ResolutionWarning";

function App() {


    console.log(window.innerWidth + 'x' + window.innerHeight);

    const navRef = useRef(null);
    const [showNavBar, setShowNavBar] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setShowNavBar(!entry.isIntersecting); // si la section skills n'est plus visible
            },
            {
                root: null,
                threshold: 0,
            }
        );

        if (navRef.current) {
            observer.observe(navRef.current);
        }

        return () => {
            if (navRef.current) {
                observer.unobserve(navRef.current);
            }
        };
    }, []);

    // État pour gérer le texte affiché lors du clic sur un pin
    const [careerInfo, setCareerInfo] = useState(null);

    const handlePinClick = (title, description, place, year) => {
        setCareerInfo({ title, description, place, year });
    };



    const [theme, setThemeState] = useState('dark');

    const applyTheme = (theme) => {
        const root = document.documentElement;

        if (theme === 'dark') {
            root.style.setProperty('--primary-color', '#0f0f0f');
            root.style.setProperty('--secondary-color', '#EEEEEE');
            root.style.setProperty('--accent-color', '#fa6c00');
        } else {
            root.style.setProperty('--primary-color', '#ffffff');
            root.style.setProperty('--secondary-color', '#111111');
            root.style.setProperty('--accent-color', '#fa6c00');
        }

        localStorage.setItem('theme', theme);
        setThemeState(theme); // ⚠️ Met à jour le state React
    };

    const changeTheme = () => {
        const nextTheme = theme === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme);
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        applyTheme(savedTheme);
    }, []);

    return (
        <div className="main">
            {/* Affiche NavBar seulement après la section skills */}

            <ResolutionWarning />
            {showNavBar && <NavBar changeTheme={changeTheme}/>}

            {/* Section d'intro */}
            <div className="section" id="presentation">
                {/* Partie de gauche */}

                <div className="left-side">

                    <div Style={"display: flex; position: relative;"}>
                    <p className="name">Hantaou Karim</p>
                        <img src="./images/photo5.png" className={"pfp"}/>
                    </div>
                    <p className="title">Développeur Full Stack</p>

                    <a download="CV Hantaou Karim.pdf" href="/pdfs/CV.pdf" className="button-cv">
                        Télécharger mon CV
                    </a>

                    <p className="social-links">
                        <a href="#contact" className={"zp-anim"}><FaGithub size={40}/></a>
                        <a href="#contact" className={"zp-anim"}><FaLinkedin size={40}/></a>
                        <a href="#contact" className={"zp-anim"}><IoMdMail size={40}/></a>
                    </p>

                    <p className="presentation">
                        Passionné de développement informatique, j’ai appris divers langages de programmation et frameworks.
                    </p>

                    <p className="presentation" style={{ marginTop: "20px" }}>
                        Toujours avide de connaissances, je vois chaque défi comme une opportunité de rester à jour avec les dernières avancées technologiques.
                    </p>
                </div>

                {/* Partie de droite */}
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
                            <button onClick={changeTheme} className={"main-theme-button zp-anim"}>
                                {localStorage.getItem('theme') === 'dark' ? <MdDarkMode size={30}/> : <MdLightMode size={30}/>}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section skills observée */}
            <div className="section" id="skills">
                Compétences
            </div>

            <div className="section projects" id="projects">
                <h1>Mes projets</h1>
                <EmblaCarousel/>
            </div>

            <div className="section career" id="career">
                <div Style={"margin-bottom: 150px; text-align: center"}>
                    <h1>Mon parcours</h1>
                    <p Style={"color: var(--accent-color); font-weight:bold;"}>Cliquez sur l'un des pins pour en savoir plus</p>
                </div>

                <Timeline onPinClick={handlePinClick}/>
                <div className="career-info">
                    {careerInfo && (
                            <div>
                                <h2>{careerInfo.title}</h2>
                                <p>{careerInfo.place}, {careerInfo.year}</p>
                                <p>{careerInfo.description}</p>
                            </div>
                    )}
                </div>
            </div>

            <div className="section contact" id="contact">
                <h1>Me contacter</h1>

                <div className={"mail-container"}>
                    <p className={"copy-notification"}>Mail copié !</p>
                    <CopyText text="karim.hantaou@gmail.com"/>
                </div>

                <div className={"social-links"}>
                    <a href="https://github.com/karimhantaou/"><FaGithub size={50} className={"zp-anim"}/></a>
                    <a href="https://www.linkedin.com/in/karim-hantaou/"><FaLinkedin size={50} className={"zp-anim"}/></a>
                </div>
            </div>
        </div>
    );
}

export default App;
