import { useEffect, useState } from 'react';

function ResolutionWarning() {
    useEffect(() => {
        const checkResolution = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;

            console.log(`Current resolution: ${width}x${height}`);

            if (width > 480 && height > 500) {
                window.location.href = "https://hantaoukarim.fr/";
            }
        };

        checkResolution(); // Vérifie au chargement
        window.addEventListener('resize', checkResolution);

        return () => window.removeEventListener('resize', checkResolution);
    }, []);
}

export default ResolutionWarning;
