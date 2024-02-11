let tabs = document.querySelectorAll(".tabs li");
let contenus = document.querySelectorAll(".contenu div");

tabs.forEach(function(tab) {
    tab.addEventListener('click', function () {
        tabs.forEach(function(tab) { //on suppr actif partout
            tab.classList.remove("actif");
        });

        contenus.forEach(function(contenu) { //on suppr actif partout
            contenu.classList.remove("actif");
        });

        console.log();

        this.classList.add("actif"); //on ajoute actif la ou on clique
        if (this.innerText == 'CDI') { //si contient cdi
            const divAxe = document.querySelector('.cdi'); //on cherche la div cdi
            divAxe.classList.add('actif'); //on lui donne actif
        } 
        else if (this.innerText =='CD') {
            const divAxe = document.querySelector('.cd');
            divAxe.classList.add('actif');
        }
        else if (this.innerText == 'CDEB') {
            const divAxe = document.querySelector('.cdeb');
            divAxe.classList.add('actif');
        }
        else if (this.innerText == '3D') {
            const divAxe = document.querySelector('.troisd');
            divAxe.classList.add('actif');
        }            
        else if (this.innerText == 'JV') {
            const divAxe = document.querySelector('.jv');
            divAxe.classList.add('actif');
        }
    });
});