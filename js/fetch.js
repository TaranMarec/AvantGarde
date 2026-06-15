/**
 * PROJECT: L'Avant-Garde
 * FILE: fetch.css
 * DESC: composition de la page via les include et lancement de fonction
 */

/* VARIABLES & RESET */

document.addEventListener("DOMContentLoaded", function() {
    // On utilise les sélecteurs CSS : '#' pour un ID unique, '.' pour une classe multiple
    const components = [
        ['./includes/footer.html', '#footer-placeholder'],
        ['./includes/header.html', '#header-placeholder'],
        ['./includes/newsletter.html', '#newsletter-placeholder'],
        ['./includes/sidebar.html', '#sidebar-placeholder'],
        ['./includes/articleLarge.html', '.articleLarge-placeholder'],
        ['./includes/articleLargeR.html', '.articleLargeR-placeholder'],
        ['./includes/articles.html', '.articles-placeholder'],
        ['./includes/articlesSlider.html', '.articlesSlider-placeholder'],
        ['./includes/edito.html', '.edito-placeholder']
    ];

    // On stocke toutes nos promesses de fetch ici
    const promises = [];

    components.forEach(component => {
        const [file, selector] = component;
        // querySelectorAll récupère TOUS les éléments correspondants (un ou plusieurs)
        const targets = document.querySelectorAll(selector);

        if (targets.length > 0) {
            // On lance le fetch une seule fois pour le fichier
            const fetchPromise = fetch(file)
                .then(response => response.text())
                .then(data => {
                    // On injecte le contenu dans CHAQUE cible trouvée
                    targets.forEach(target => {
                        target.innerHTML = data;
                    });
                })
                .catch(error => console.error(`Erreur lors du chargement de ${file}:`, error));
            
            promises.push(fetchPromise);
        }
    });


Promise.all(promises).then(() => {
        console.log("Tous les composants sont chargés");
        // ON RELANCE LA SIDEBAR ICI !
        if (typeof initSidebarLoop === "function") {initSidebarLoop();}
        if (typeof initMenu === "function") {initMenu();}
        if (typeof initDarkMode === "function") {initDarkMode();}
         if (typeof initSlider === "function") {initSlider();}
    });
});