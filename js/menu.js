/**
 * PROJECT: L'Avant-Garde
 * FILE: menu.js
 * DESC: Gestion du header dynamique (scroll/resize) et du menu burger pour le responsiv.
 */

/* --- CONFIGURATION DU HEADER --- */



// On met tout dans une fonction pour la lancer au bon moment
function initMenu() {
    const header = document.getElementById("main-header");
    const burger = document.getElementById('burger');
    const nav = document.querySelector('.menu');

    // --- Gestion du Scroll ---
    function checkHeaderStatus() {
        if (header) {
            if (window.innerWidth <= 440 || window.pageYOffset > 80) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        }
    }

    // On ré-attache les écouteurs de scroll/resize
    window.addEventListener('scroll', checkHeaderStatus);
    window.addEventListener('resize', checkHeaderStatus);
    checkHeaderStatus(); // Appel immédiat pour l'état initial

    // --- Menu Burger ---
    if (burger && nav) {
        // On enlève l'ancien écouteur s'il existe pour éviter les doublons
        burger.onclick = function() {
            nav.classList.toggle('nav-active');
            document.body.classList.toggle('no-scroll');
            burger.classList.toggle('toggle');
        };
    } else {
        console.warn("Burger ou Nav introuvables. Attente du fetch ?");
    }
}

// Sécurité : au cas où le fichier est chargé classiquement
document.addEventListener('DOMContentLoaded', initMenu);
