import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="main">

        {/* Partie de gauche */}
        <div className="left-side">

            <p>Hantaou Karim</p>
            <p>Développeur Full Stack à la recherche d'une alternance</p>
            <button>Télécharger mon CV</button>

            <p>
                Mauris non lectus dignissim, semper lacus ut, tempor erat.
                Nullam at elementum est, non vehicula dui.
                In nec tellus id libero convallis semper. Mauris justo risus, viverra nec vulputate vel, sodales sed turpis.
                In hac habitasse platea dictumst. Duis consectetur vestibulum justo, ac luctus justo dapibus ut.
                Nam eget finibus odio, ut aliquam dolor.
                Donec lectus orci, bibendum sed bibendum feugiat, tincidunt ut nibh.
                Aenean at massa tristique, aliquam diam at, consectetur dolor. Morbi quis dignissim ante.
            </p>

        </div>


        {/* Partie de droite */}
        <div className="right-side">

            <div className="right-side-content">

                <div className="vertical-line"></div>

                <div className="links">
                    <p>Liens</p>
                    <p>Liens</p>
                    <p>Liens</p>
                    <p>Liens</p>
                    <p>Liens</p>
                    <p>Liens</p>
                </div>
            </div>

        </div>

    </div>
  );
}

export default App;
