import { useEffect, useState } from 'react';

function ResolutionWarning() {
    useEffect(() => {
        const checkResolution = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;

            if (width < 800) {
                window.location.href = "https://hantaoukarim.fr/mobile/";
            }
        };

        checkResolution(); // Vérifie au chargement
        window.addEventListener('resize', checkResolution);

        return () => window.removeEventListener('resize', checkResolution);
    }, []);
}

export default ResolutionWarning;
