/**
 * PROJECT: L'Avant-Garde
 * FILE: progression.js
 * DESC: bare de progression en haut de la page au défilement de la page
 */

/* VARIABLES & RESET */

const initScrollProgress = () => {

    const bar = document.getElementById('progress-bar-home');

    // Sécurité : Si la barre n'existe pas sur cette page, on arrête tout proprement.
    if (!bar) {
        console.warn("Barre de progression non trouvée sur cette page.");
        return;
    }

    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const total = document.documentElement.scrollHeight - window.innerHeight;
                
                // Calcul du pourcentage
                const progress = total > 0 ? (window.scrollY / total) * 100 : 0;
                
                // Application du style
                bar.style.width = Math.min(progress, 100) + '%';
                
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
};

// On lance la fonction
initScrollProgress();