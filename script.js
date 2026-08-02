function ouvrirLivre() {

    function pageSuivante(){

    const page2 = document.querySelector(".page-2");

    page2.classList.add("page-visible");
}
    alert("Bienvenue dans le livre d'anniversaire de Maman ❤️");

    const livre = document.getElementById("livre");
    livre.classList.add("livre-ouvert");

    const couverture = document.querySelector(".couverture");

    setTimeout(() => {
        couverture.classList.add("couverture-ouverte");
    }, 2000);

    const musique = document.getElementById("musique");
    musique.play();
}
