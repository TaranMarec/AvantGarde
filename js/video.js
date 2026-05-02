/**
 * PROJECT: L'Avant-Garde
 * FILE: videos.js
 * DESC: Récupération dynamique de la dernière vidéo de la playlist YouTube.
 */
async function loadLatestPlaylistVideo() {
    const API_KEY = 'AIzaSyDWH_Ovncn32d1Prtqo4t0cVOfnOxFTUmQ';
    const PLAYLIST_ID = 'PLMc3QN4Bpy7r6s_6mbCti-iO6puJSEOLD';

    try {
        // 1. Récupération des 10 derniers items de la playlist
        const listRes = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PLAYLIST_ID}&maxResults=10&key=${API_KEY}`);
        const listData = await listRes.json();

        if (!listData.items || listData.items.length === 0) {
            document.getElementById('yt-title').innerText = "Playlist vide ou introuvable";
            return;
        }

        // 2. Extraction des IDs
        const videoIds = listData.items.map(item => item.snippet.resourceId.videoId).join(',');

        // 3. Récupération des détails techniques (durée, etc.)
        const videoRes = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet&id=${videoIds}&key=${API_KEY}`);
        const videoData = await videoRes.json();
        
        // Sélection de la première vidéo de la liste
        const finalVideo = videoData.items[0];

        // 4. Mise à jour de l'interface utilisateur
        const titleElement = document.getElementById('yt-title');
        const linkElement = document.getElementById('yt-link');
        const imgElement = document.getElementById('yt-thumb-img');

        if (titleElement) titleElement.innerText = finalVideo.snippet.title;
        if (linkElement) linkElement.href = `https://www.youtube.com/watch?v=${finalVideo.id}`;
        if (imgElement) {
            imgElement.src = finalVideo.snippet.thumbnails.high.url;
            imgElement.style.display = 'block';
        }

    } catch (error) {
        console.error("Erreur de chargement :", error);
        const titleElement = document.getElementById('yt-title');
        if (titleElement) titleElement.innerText = "Erreur de connexion";
    }
}

// Lancement de la fonction au chargement du script
loadLatestPlaylistVideo();