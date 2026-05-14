// On crée une fonction exportable
function initSidebarLoop() {
    const container = document.getElementById('sidebar-loop-container');
    const contentArea = document.querySelector('.content-area'); 
    
    // Sécurité : si les éléments n'existent pas, on ne fait rien
    if (!container || !contentArea) return;

    const originalBlocks = Array.from(container.children);

    function manageSidebarLoop() {
        const contentRect = contentArea.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const limit = contentRect.bottom - 1000;

        if (containerRect.bottom < limit) {
            if (containerRect.bottom < windowHeight + 100) {
                originalBlocks.forEach(block => {
                    const clone = block.cloneNode(true);
                    container.appendChild(clone);
                });
                setTimeout(manageSidebarLoop, 10);
            }
        }
    }

    window.addEventListener('scroll', manageSidebarLoop);
    window.addEventListener('resize', manageSidebarLoop);
    manageSidebarLoop();
}

// On garde quand même l'écouteur au cas où la page n'a pas de fetch
document.addEventListener("DOMContentLoaded", initSidebarLoop);