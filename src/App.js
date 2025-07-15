import './App.css';

import VerticalLine from "./components/VerticalLine";

function App() {
  return (
    <div className="main">
    {/* DEBUT */}



        {/* Section d'intro */}
        <div className="section">

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

                <p className="presentation" Style="margin-top: 20px;">
                    Toujours avide de connaissances, je vois chaque défi comme une opportunité de rester à jour avec les dernières avancées technologiques.
                </p>

            </div>


            {/* Partie de droite */}
            <div className="right-side">

                <p className="sommaire-title">Sommaire</p>

                <div className="right-side-content">

                    <VerticalLine height="100%" color="var(--accent-color)" />

                    <div className="links">
                        <a>Ma présentation</a>
                        <a>Mes compétences</a>
                        <a>Mes projets</a>
                        <a>Mon parcours</a>
                        <a>Me contacter</a>
                    </div>

                </div>
            </div>
        </div>

        <div className="section">
            Section 2
        </div>






    {/* FIN */}
    </div>

  );
}

export default App;
