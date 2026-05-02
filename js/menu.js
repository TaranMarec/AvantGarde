/**
 * PROJECT: L'Avant-Garde
 * FILE: menu.js
 * DESC: Gestion du header dynamique (scroll/resize) et du menu burger pour le responsiv.
 */

/* --- CONFIGURATION DU HEADER --- */

/**
 * Alterne l'état du header selon le scroll (80px) ou la largeur écran (440px)
 */


function checkHeaderStatus() {
    const header = document.getElementById("main-header");
    const logoImg = document.querySelector(".logo-img");

    if (header) {
        if (window.innerWidth <= 440 || window.pageYOffset > 80) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    } else {
        console.error("L'élément #main-header n'a pas été trouvé dans le HTML !");
    }
};
window.addEventListener('scroll', checkHeaderStatus);
window.addEventListener('resize', checkHeaderStatus);;
document.addEventListener('DOMContentLoaded', checkHeaderStatus);


/* --- INTERFACE NAVIGATION RESPONSIV--- */

// Sélection des éléments
const burger = document.getElementById('burger');
const nav = document.querySelector('.menu');

// Fonction pour basculer le menu
function toggleMenu() {
    // Ajoute/Enlève la classe pour afficher le menu
    nav.classList.toggle('nav-active');
    
    // Empêche/Autorise le scroll sur la page derrière le menu
    document.body.classList.toggle('no-scroll');
    
    // Animation visuelle du bouton burger (ex: transformation en X)
    burger.classList.toggle('toggle');
}

// Ecouteur d'événement au clic
if (burger && nav) {
    burger.addEventListener('click', toggleMenu);
}

