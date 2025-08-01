import { useEffect, useState } from 'react';

function ResolutionWarning() {
    const [showWarning, setShowWarning] = useState(false);

    useEffect(() => {
        const checkResolution = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;

            console.log(`Current resolution: ${width}x${height}`); // Pour le débogage

            if (width < 1280 || height < 720) {
                setShowWarning(true);
            } else {
                setShowWarning(false);
            }
        };

        checkResolution(); // Vérifie au chargement
        window.addEventListener('resize', checkResolution); // Optionnel : si tu veux réagir en temps réel

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
                <h2>💡 Résolution insuffisante</h2>
                <p>Ce site est optimisé pour une résolution d'au moins 1920x1080.</p>
                <button
                    onClick={() => {
                        const elem = document.documentElement;
                        if (elem.requestFullscreen) {
                            elem.requestFullscreen();
                        } else if (elem.webkitRequestFullscreen) {
                            elem.webkitRequestFullscreen(); // Safari
                        } else if (elem.msRequestFullscreen) {
                            elem.msRequestFullscreen(); // IE/Edge
                        }
                    }}
                    className={"popup-button zp-anim"}
                >
                    Passer en plein écran
                </button>
            </div>
        </div>
    );
}

export default ResolutionWarning;
