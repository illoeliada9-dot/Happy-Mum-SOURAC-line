function ouvrirLivre() {

    alert("Bienvenue dans le livre d'anniversaire de Maman ❤️");

    const livre = document.getElementById("livre");
    livre.classList.remove("livre-cache");
    livre.classList.add("livre-ouvert");

    const musique = document.getElementById("musique");
    musique.play();
}

    // Ouverture du livre
    document.getElementById("livre").classList.add("ouvert");

    // Démarrage de la musique
    const musique = document.getElementById("musique");
    musique.play();
}
