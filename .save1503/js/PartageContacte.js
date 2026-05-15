/**
 * PROJECT: L'Avant-Garde
 * FILE: PartageContacte.js
 * DESC: Fonctions de partage d'articles et gestion du formulaire de contact.
 */

/* --- SYSTÈME DE PARTAGE --- */

/**
 * Interface de partage natif pour les articles de l'Avant-Garde
 */
async function handleNativeShare() {
    if (navigator.share) {
        try {
            await navigator.share({
                title: 'Titre de l\'article',
                text: 'Regardez cet article intéressant !',
                url: window.location.href
            });
        } catch (err) {
            console.log('Partage annulé ou erreur');
        }
    } else {
        alert("Le partage natif n'est pas supporté. Copiez ce lien : " + window.location.href);
    }
}

/* --- MODALE DE CONTACT (ARTICLES) --- */

/**
 * Ouverture de la modale de contact
 */
function openContact() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('contact-modal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeContact() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('contact-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function sendForm(e) {
    e.preventDefault();
    alert("Message envoyé avec succès !");
    closeContact();
}