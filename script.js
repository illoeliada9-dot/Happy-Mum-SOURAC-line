function ouvrirLivre() {
    // Message d'accueil
    alert("Bienvenue dans le livre d'anniversaire de Maman ❤️");

    // Ouverture du livre
    document.getElementById("livre").classList.add("ouvert");

    // Démarrage de la musique
    const musique = document.getElementById("musique");
    musique.play();
}
