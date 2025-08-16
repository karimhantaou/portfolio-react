import { useEffect, useState } from 'react';

function ResolutionWarning() {
    const [showWarning, setShowWarning] = useState(false);

    useEffect(() => {
        const checkResolution = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;

            console.log(`Current resolution: ${width}x${height}`);

            if (width < 1280 || height < 720) {
                setShowWarning(true);
            } else {
                setShowWarning(false);
            }
        };

        checkResolution(); // Vérifie au chargement
        window.addEventListener('resize', checkResolution);

        return () => window.removeEventListener('resize', checkResolution);
    }, []);

    if (!showWarning) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'var(--primary-color)',
            color: 'var(--secondary-color)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999999
        }}>
            <div style={{ textAlign: 'center', maxWidth: '90%' }}>
                <h2>💡 Taille de l'écran trop petit</h2>
                <p>Ce site n'est pas optimisé pour les mobiles !</p>
            </div>
        </div>
    );
}

export default ResolutionWarning;
