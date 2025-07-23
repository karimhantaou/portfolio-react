import React, { useState, useEffect, useCallback } from 'react';
import {FaGithub, FaGlobe} from "react-icons/fa";
import useEmblaCarousel from 'embla-carousel-react';
const projects = [
    {
        title: "Password Manager",
        description: "Application sécurisée pour stocker ses mots de passe.",
        tech: "React, Node.js, MongoDB",
        image: "https://placehold.co/1920x1080",
        github:"liens vers le github du projet",
        site: "https://password-manager.example.com"
    },
    {
        title: "Portfolio Web",
        description: "Site personnel pour présenter mes projets.",
        tech: "React, CSS, EmailJS",
        image: "https://placehold.co/1920x1080"
    },
    {
        title: "Jeu 2D",
        description: "Un petit jeu développé en canvas HTML5.",
        tech: "JavaScript, HTML5",
        image: "https://placehold.co/1920x1080"
    },
    {
        title: "To-Do App",
        description: "Gestionnaire de tâches simple et efficace.",
        tech: "React, Firebase",
        image: "https://placehold.co/1920x1080"
    },
    {
        title: "Blog Personnel",
        description: "Blog pour partager mes idées et tutoriels.",
        tech: "Next.js, Markdown",
        image: "https://placehold.co/1920x1080"
    },
    {
        title: "Clone de Netflix",
        description: "Application de streaming fictive.",
        tech: "React, TMDB API",
        image: "https://placehold.co/1920x1080"
    },
    {
        title: "Application météo",
        description: "Affiche les données météo en temps réel.",
        tech: "React, OpenWeatherMap API",
        image: "https://placehold.co/1920x1080"
    },
    {
        title: "Gestionnaire de dépenses",
        description: "Suivi de budget personnel.",
        tech: "Vue.js, Chart.js",
        image: "https://placehold.co/1920x1080"
    },
    {
        title: "Application de recettes",
        description: "Recherche et sauvegarde de recettes.",
        tech: "React, Spoonacular API",
        image: "https://placehold.co/1920x1080"
    },
    {
        title: "Dashboard Admin",
        description: "Tableau de bord d'administration complet.",
        tech: "React, Recharts, Tailwind",
        image: "https://placehold.co/1920x1080"
    }
];

export function EmblaCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' })
    const [selectedIndex, setSelectedIndex] = useState(0)

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
    const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

    useEffect(() => {
        if (!emblaApi) return

        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
        emblaApi.on('select', onSelect)
        onSelect()
    }, [emblaApi])

    return (
        <div className="carousel-wrapper">
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    {projects.map((project, index) => (
                        <div className="embla__slide" key={index}>
                            <img src={project.image} alt={project.title} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="carousel-footer">
                <div className="dots">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === selectedIndex ? 'active' : ''}`}
                            onClick={() => scrollTo(index)}
                        />
                    ))}
                </div>

                <div className="arrows">
                    <button onClick={scrollPrev}>◀</button>
                    <button onClick={scrollNext}>▶</button>
                </div>
            </div>

            <div className="project-info">
                <h3>{projects[selectedIndex].title}</h3>
                <p>{projects[selectedIndex].description}</p>
                <div className="carousel-links">
                    {projects[selectedIndex].github && (
                        <a href={projects[selectedIndex].github} target="_blank" rel="noreferrer" className="icon-link">
                            <FaGithub size={35}/>
                        </a>
                    )}
                    {projects[selectedIndex].site && (
                        <a href={projects[selectedIndex].site} target="_blank" rel="noreferrer" className="icon-link">
                            <FaGlobe size={35}/>
                        </a>
                    )}
                    {/* Ajout d’un contenu invisible pour forcer le rendu */}
                    {!(projects[selectedIndex].github || projects[selectedIndex].site) && <span style={{ opacity: 0 }}>&nbsp;</span>}
                </div>
            </div>
        </div>
    )
}