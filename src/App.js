import { useEffect, useRef, useState } from 'react';

import './style/Main.css';
import './style/NavBar.css';

import VerticalLine from "./components/VerticalLine";
import NavBar from "./components/NavBar";

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

            {/* Section d'intro */}
            <div className="section" id="presentation" ref={navRef}>
                {/* Partie de gauche */}
                <div className="left-side">
                    <p className="name">Hantaou Karim</p>
                    <p className="title">Développeur Full Stack</p>

                    <a download="CV Hantaou Karim.pdf" href="/pdfs/CV.pdf" className="button-cv">
                        Télécharger mon CV
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
                            <a href="#presentation">Ma présentation</a>
                            <a href="#skills">Mes compétences</a>
                            <a href="#projects">Mes projets</a>
                            <a href="#career">Mon parcours</a>
                            <a href="#contact">Me contacter</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section skills observée */}
            <div className="section" id="skills">
                Compétences
            </div>

            <div className="section" id="projects">
                Projets
            </div>

            <div className="section" id="career">
                Parcours
            </div>

            <div className="section" id="contact">
                Contacter
            </div>
        </div>
    );
}

export default App;
