// Import des dépendances
import { useEffect, useRef, useState } from 'react';
import {FaGithub, FaLinkedin } from "react-icons/fa";
import {CiMail} from "react-icons/ci";


// Import des styles
import './style/Main.css';
import './style/NavBar.css';
import './style/CopyText.css';
import './style/EmblaCarousel.css';


// Import des composants
import VerticalLine from "./components/VerticalLine";
import NavBar from "./components/NavBar";
import CopyText from "./components/CopyText";
import {EmblaCarousel} from "./components/EmblaCarousel";


function App() {
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



    return (
        <div className="main">
            {/* Affiche NavBar seulement après la section skills */}

            {showNavBar && <NavBar />}
            <img src="/images/photo.png" className={"pfp"}/>

            {/* Section d'intro */}
            <div className="section" id="presentation">
                {/* Partie de gauche */}

                <div className="left-side">

                    <p className="name">Hantaou Karim</p>
                    <p className="title">Développeur Full Stack</p>

                    <a download="CV Hantaou Karim.pdf" href="/pdfs/CV.pdf" className="button-cv">
                        Télécharger mon CV
                    </a>

                    <a className="social-links">
                        <a href="#contact"><FaGithub size={40}/></a>
                        <a href="#contact"><FaLinkedin size={40}/></a>
                        <a href="#contact"><CiMail size={40}/></a>
                    </a>

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
                        <VerticalLine height="100%" width="2" color="var(--accent-color)" />
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

            {/* Section skills observée */}
            <div className="section" id="skills">
                Compétences
            </div>

            <div className="section projects" id="projects">
                <h1>Mes projets</h1>
                <EmblaCarousel/>
            </div>

            <div className="section" id="career">
                Parcours
            </div>

            <div className="section contact" id="contact">
                <h1>Me contacter</h1>

                <div className={"mail-container"}>
                    <CopyText text="karim.hantaou@gmail.com"/>
                    <p className={"copy-notification"}>Mail copié !</p>
                </div>

                <div className={"social-links"}>
                    <a href="https://github.com/karimhantaou/"><FaGithub size={50}/></a>
                    <a href="https://www.linkedin.com/in/karim-hantaou/"><FaLinkedin size={50}/></a>
                </div>
            </div>
        </div>
    );
}

export default App;
