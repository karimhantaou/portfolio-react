import React, { useState, useEffect, useCallback } from 'react';
import {FaGithub, FaGlobe} from "react-icons/fa";
import useEmblaCarousel from 'embla-carousel-react';
import projects from '../Data/Projects';

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
        <div className={"embla-carousel-container"}>
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
            </div>

            <div className="project-info">
                <h3 className={"projects-title"}>{projects[selectedIndex].title}</h3>
                <div className="project-description">
                    {projects[selectedIndex].description.split('\n').map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                </div>
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
                <div className={"project-tech"}>
                    <p>{projects[selectedIndex].tech}</p>
                </div>
            </div>
        </div>
    )
}