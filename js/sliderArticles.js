function initSlider() {  
    // 1. On récupère TOUS les sliders présents sur la page
    const sliders = document.querySelectorAll('.slider-container');
    
    // 2. On applique la logique à chacun d'eux
    sliders.forEach(container => {
        const track = container.querySelector('.slider-track');
        const prevBtn = container.querySelector('.prev-btn');
        const nextBtn = container.querySelector('.next-btn');
        
        if (!track) return;

        const cards = Array.from(track.children);
        if (cards.length === 0) return;

        let currentIndex = 0;

        function updateSliderPosition() {
            // On calcule la largeur dynamiquement pour gérer les redimensionnements
            const cardWidth = cards[0].offsetWidth;
            const gap = parseFloat(window.getComputedStyle(track).gap) || 24; 
            
            const translateValue = -currentIndex * (cardWidth + gap);
            track.style.transform = `translateX(${translateValue}px)`;
        }

        function moveNext() {
            const itemsVisible = window.innerWidth <= 600 ? 1 : 2;
            if (currentIndex >= cards.length - itemsVisible) {
                currentIndex = 0; // Retour au début
            } else {
                currentIndex++;
            }
            updateSliderPosition();
        }

        function movePrev() {
            const itemsVisible = window.innerWidth <= 600 ? 1 : 2;
            if (currentIndex <= 0) {
                currentIndex = cards.length - itemsVisible; // Va à la fin
            } else {
                currentIndex--;
            }
            updateSliderPosition();
        }

        // Écouteurs de clics attachés spécifiquement à CE slider
        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                moveNext();
            });
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                movePrev();
            });
        }

        // On écoute le redimensionnement de l'écran pour ajuster ce slider
        window.addEventListener('resize', updateSliderPosition);

        // Initialisation de la position de départ
        updateSliderPosition();
    });
}