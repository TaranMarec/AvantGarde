function checkHeaderStatus() {
    const header = document.getElementById("main-header");
    const logoImg = document.querySelector(".logo-img");
    // const logoCompact = "./AGROUGE.png";
    //const logoHero = "./BigAg.png";
    // Si on a scrollé de plus de 80px

    if (header) {
        if (window.innerWidth <= 440 || window.pageYOffset > 80) {
            header.classList.add("scrolled");
            // logoImg.src = logoCompact;
        } else {
            header.classList.remove("scrolled");
            //  logoImg.src = logoHero;
        }
    } else {
        console.error("L'élément #main-header n'a pas été trouvé dans le HTML !");
    }
};
window.addEventListener('scroll', checkHeaderStatus);
window.addEventListener('resize', checkHeaderStatus);;
document.addEventListener('DOMContentLoaded', checkHeaderStatus);

