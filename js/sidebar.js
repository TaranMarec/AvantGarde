
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('sidebar-loop-container');
    const contentArea = document.querySelector('.content-area'); // La zone précise des articles
    const originalBlocks = Array.from(container.children);

    function manageSidebarLoop() {
        const contentRect = contentArea.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // 1. On vérifie si on a encore de la place dans la zone des articles
        // On retire 100px de marge pour être sûr que ça ne dépasse pas sur le footer
        const limit = contentRect.bottom - 100;

        if (containerRect.bottom < limit) {
            // 2. On n'ajoute que si le bas de la sidebar est proche de sortir de l'écran
            if (containerRect.bottom < windowHeight + 600) {
                originalBlocks.forEach(block => {
                    const clone = block.cloneNode(true);
                    container.appendChild(clone);
                });
                // On relance pour remplir les très grands écrans
                setTimeout(manageSidebarLoop, 10);
            }
        }
    }

    window.addEventListener('scroll', manageSidebarLoop);
    window.addEventListener('resize', manageSidebarLoop);
    manageSidebarLoop();
});
