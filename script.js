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


function pageQuatre(){

    const page4 = document.querySelector(".page-4");

    page4.classList.add("page-visible");
}


function pageCinq(){

    const page5 = document.querySelector(".page-5");

    page5.classList.add("page-visible");
}
