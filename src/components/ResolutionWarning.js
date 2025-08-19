import { useEffect, useState } from 'react';

function ResolutionWarning() {
    const [showWarning, setShowWarning] = useState(false);

    useEffect(() => {
        const checkResolution = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;

            console.log(`Current resolution: ${width}x${height}`);

            if (width > 1280 || height > 720) {
                window.location.href = "https://hantaoukarim.fr/";
            }
        };

        checkResolution(); // Vérifie au chargement
        window.addEventListener('resize', checkResolution);

        return () => window.removeEventListener('resize', checkResolution);
    }, []);
}

export default ResolutionWarning;
