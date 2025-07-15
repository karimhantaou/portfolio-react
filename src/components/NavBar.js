import VerticalLine from "./VerticalLine";

function BasicButton() {
    return (
        <nav>

            <VerticalLine height="100%" width="2" color="var(--accent-color)" />

            <div className="nav-links">
                <a href="#presentation">A propos</a>
                <a href="#skills">Compétences</a>
                <a href="#projects">Projets</a>
                <a href="#career">Parcours</a>
                <a href="#contact">Contacter</a>
            </div>
        </nav>
    );
}

export default BasicButton;