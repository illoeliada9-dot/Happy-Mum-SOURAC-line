function ouvrirLivre() {

    function pageSuivante(){

    const page = document.querySelector(".page-2");

    page.classList.add("page-visible");
    }
    
    alert("Bienvenue dans le livre d'anniversaire de Maman ❤️");

    const couverture = document.querySelector(".couverture");

    couverture.classList.add("couverture-ouverte");
    

    
    const musique = document.getElementById("musique");
    musique.play();
}
