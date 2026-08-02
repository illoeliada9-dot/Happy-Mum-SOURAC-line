function ouvrirLivre() {

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


function pageSuivante(){

    const page2 = document.querySelector(".page-2");

    page2.classList.add("page-visible");
}


function pageTrois(){

    const page3 = document.querySelector(".page-3");

    page3.classList.add("page-visible");
}
