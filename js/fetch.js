document.addEventListener("DOMContentLoaded", function() {
    // Liste des composants à charger : [nom_du_fichier, id_du_conteneur]
    const components = [
        ['./includes/footer.html', 'footer-placeholder'],
        ['./includes/header.html', 'header-placeholder'],
        ['./includes/newsletter.html', 'newsletter-placeholder'],
        ['./includes/sidebar.html', 'sidebar-placeholder']
    ];

    const promises = components.map(component => {
        const [file, elementId] = component;
        const target = document.getElementById(elementId);

        if (target) {
            return fetch(file)
                .then(response => response.text())
                .then(data => {
                    target.innerHTML = data;
                });
        }
    });

Promise.all(promises).then(() => {
        console.log("Tous les composants sont chargés");
        // ON RELANCE LA SIDEBAR ICI !
        if (typeof initSidebarLoop === "function") {
            initSidebarLoop();
        }
        if (typeof initMenu === "function") {initMenu();}
    });
});