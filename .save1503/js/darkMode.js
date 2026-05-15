/**
 * PROJECT: L'Avant-Garde
 * FILE: darkMode.js
 * DESC: fonctionement du bouton darkMode.
 */

/* VARIABLES & RESET */
function initDarkMode() {
    const btn = document.getElementById('theme-toggle');
    const html = document.documentElement; // On cible bien la balise html

    if (!btn) return;

    btn.addEventListener('click', () => {
        // On ajoute/retire la classe sur <html>
        html.classList.toggle('dark-theme');
        
        // On sauvegarde le choix
        const isDark = html.classList.contains('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}
   