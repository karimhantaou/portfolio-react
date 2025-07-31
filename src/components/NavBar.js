import VerticalLine from "./VerticalLine";

import {MdDarkMode, MdLightMode} from "react-icons/md";

function BasicButton({changeTheme}) {

    return (
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
        </nav>
    );
}

export default BasicButton;