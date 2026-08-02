function ouvrirLivre() {

    alert("Bienvenue dans le livre d'anniversaire de Maman ❤️");

    const livre = document.getElementById("livre");
    livre.classList.add("livre-ouvert");

    const musique = document.getElementById("musique");
    musique.play();
}
