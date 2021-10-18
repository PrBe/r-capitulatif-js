console.log("jeu.js")

// definition variables globales

var x = 0;
var indice = 0;
var nombre_utili = 0;


// Definition de fonctions

// Fonction si l'utilisateur choisi Oui. On arrete d'afficher le la balise image-start.
// Et on affiche les buttons des niveaux.
function ChoixOui() {
    document.getElementById("image-start").style.display = "none";
    document.getElementById("buttons").style.transform = "scale(1)";

}
// si l'utilisateur choisi non, on l'envoie au lien suivant.
function ChoixNon() {
    window.location = "https://www.google.com/";
}

// On definit une fonction nombre-aleatoire avec les parametres min et max.
// Cette fonction renvoie une valeur aleatoire comprise entre min et max grace aux fonctions Math
/*
Math.floor arrondit le nombre pris en argument au plus proche entier.
Exemple : Math.floor(32.65)
            32

Math.random renvoie un nombre compris dans l'intervalle des entiers pris en parametres.
Exemple : Math.random(1,25)
            return 13

*/
function nombre_aleatoire(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Fonction qui renvoie le nombre insere par l'utilisateur
function nombre_utilisateur() {
    var nombre_choisi = document.getElementById("nombre-choisi").value;
    return nombre_choisi;
}

/*
Cette fonction permet de choisir le niveau de jeu.
Si l'utilisateur clique sur le niveau 1. On arrete d'afficher les buttons
et on affiche la structure de jeu. L'intervalle pour ce niveau est de [1,10]   

*/
function niveau1() {
    document.getElementById("jeu").style.transform = "scale(1)";
    document.getElementById("buttons").style.transform = "scale(0)";
    x = nombre_aleatoire(1, 10);


}
/*
    La meme chose que la fonction precedente, mais l'intervalle est de [1, 100]

*/

function niveau2() {

    document.getElementById("jeu").style.transform = "scale(1)";
    document.getElementById("buttons").style.transform = "scale(0)";
    x = nombre_aleatoire(1, 100);

}

/*
    La meme chose que les fonctions precedentes, mais l'intervalle est de [1, 1000]

*/
function niveau3() {

    document.getElementById("jeu").style.transform = "scale(1)";
    document.getElementById("buttons").style.transform = "scale(0)";
    x = nombre_aleatoire(1, 1000);

}



// Le systeme de jeu


function click_utili() {


    nombre_utili = nombre_utilisateur(); // on affecte le nombre choisi par l'utilisateur a la variable nombre_utili

    if (indice == 10) { // Cette fonction verifie si le nombre d'essais n'est pas <= 10
        //Si oui on arrete le jeu 
        document.write("GAME OVER!")
    }
    //Sinon on verifie si le nombre d'utilisateur est superieur au nombre aleatoire. si oui, on previens l'utilisateur grace a un texte.
    else if (nombre_utili > x) {
        document.getElementById("verification").innerHTML = "Plus petit";
    }
    //Pareil que l'inferieur sauf qu'on verifie si le nombre est inferieur.
    else if (nombre_utili < x) {

        document.getElementById("verification").innerHTML = "Plus grand";
    }
    //Si la valeur de l'indice est inferieur a 10 et si le nombre choisi par l'utilisateur n'est ni superieur ni inferieur au nombre aleatoire, il doit etre egal. donc on arrete le jeu et on renvoie un message de felicitations
    else {
        document.write("bravo, vous avez gagne!")
        document.getElementById("nombre_alea").innerHTML = ("Le nombre aleatoire est : " + x + "<br>");
    }

    indice++; // On incremente l'indice 
    document.getElementById("nb_indice").innerHTML = "Vous etes a " + indice + " essais"; // on affiche l'indice pour prevenir l'utilisateur combiens d'essai il lui reste

}





