document.addEventListener("DOMContentLoaded", function() {
    // Liste des composants à charger : [nom_du_fichier, id_du_conteneur]
    const components = [
        ['./includes/footer.html', 'footer-placeholder'],
        ['./includes/header.html', 'header-placeholder']
    ];

    components.forEach(component => {
        const [file, elementId] = component;
        const target = document.getElementById(elementId);

        if (target) {
            fetch(file)
                .then(response => {
                    if (!response.ok) throw new Error(`Erreur chargement ${file}`);
                    return response.text();
                })
                .then(data => {
                    target.innerHTML = data;
                })
                .catch(error => console.error(error));
        }
    });
});