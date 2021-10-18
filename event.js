
var clickedd = document.getElementById("clickedd").onclick =
function(e){
    console.log("clickedd: " + clickedd);
    alert("Bienvenue sur le site récapitulatif");
}



//Akin - changement de couleur des que l'on clique sur une des div, recliquer remet la couleur d'origine + changement de label des que l'on clique sur les différents div "Cliquer ici -> Vert"//
var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");
var b4 = document.getElementById("b4");


b1.onclick = function (e) {
    
    if(b1.style.backgroundColor=="green"){
        b1.style.background="gray";
        document.getElementById('vert').innerHTML = 'Clique ici'; 
    }
    else{
        b1.style.background="green";
        document.getElementById('vert').innerHTML = 'VERT';
    }
}


b2.onclick = function (e) {
    
    if(b2.style.backgroundColor=="orange"){
        b2.style.background="gray";
        document.getElementById('orange').innerHTML = 'Clique ici';
    }
    else{
        b2.style.background="orange";
        document.getElementById('orange').innerHTML = 'ORANGE';
    }
}

b3.onclick = function (e) {
    
    if(b3.style.backgroundColor=="red"){
        b3.style.background="gray";
        document.getElementById('rouge').innerHTML = 'Clique ici';
    }
    else{
        b3.style.background="red";
        document.getElementById('rouge').innerHTML = 'ROUGE';
    }
}


b4.onclick = function (e) {
    
    if(b4.style.backgroundColor=="black"){
        b4.style.background="gray";
        document.getElementById('noir').innerHTML = 'Clique ici'; 
    }
    else{
        b4.style.background="black";
        document.getElementById('noir').innerHTML = 'NOIR';
    }
}


// Akin - texte en tableau // 
const inst = ["Instruction", ":", " Cliquer", " sur", " le", " bouton"," instruction"];
let tex1 = "";

for (let i = 0; i < inst.length; i++) {
  tex1 += inst[i] + " ";
}
document.getElementById("inst").innerHTML = tex1;





// Akin - Evenement pour l'instruction //
var clicked = document.getElementById("instru-akin").onclick = function(e){
    console.log("instru-akin: " + clicked);
    alert("Instruction : Cliquer sur un rectangle pour lui changer ça couleur, recliquer pour remettre sa couleur d'origine");     
}


// Code de Grégor
const titleRoll = document.getElementById('TitleRoll');
const textRoll = document.getElementById('TextRoll');

// Tableau contenant les couleurs du texte
var colorRoll = [255, 0, 0];
// Mode de couleur pour connaîtres les modifications à effecteur. 0 est égale à passser à la couleur jaune, donc rajouter du vert au rouge.
var mode = 0;

function ColorTitleRoll(){
    // Verification du mode actuel et décide donc de quel couleur est à modifier. Le mode change plus tard.
    if (mode == 0) {
        // Change la couleur un point par un point afin d'être fluide
        colorRoll[1] ++;
    }else if (mode == 1) {
        colorRoll[0] --
    }else if (mode == 2) {
        colorRoll[2] ++;
    }else if (mode == 3) {
        colorRoll[1] --
    }else if (mode == 4) {
        colorRoll[0] ++;
    }else {
        colorRoll[2] --
    }
    // Vérifie si on arrive à une des six possibilités de couleurs max (Rouge/bleu/jaune... complet et donc égale a 255) et change le mode pour faire monter ou baisser une couleur
    if (colorRoll[0] == 255 && colorRoll[1] == 0 && colorRoll[2] == 0) {
        mode = 0;
    }else if (colorRoll[0] ==255 && colorRoll[1] == 255 && colorRoll[2] == 0) {
        mode = 1;
    }else if (colorRoll[0] ==0 && colorRoll[1] == 255 && colorRoll[2] == 0) {
        mode = 2;
    }else if (colorRoll[0] ==0 && colorRoll[1] == 255 && colorRoll[2] == 255) {
        mode = 3;
    }else if (colorRoll[0] ==0 && colorRoll[1] == 0 && colorRoll[2] == 255) {
        mode = 4;
    }else if (colorRoll[0] ==255 && colorRoll[1] == 0 && colorRoll[2] == 255) {
        mode = 5;
    }
    // Ajoute les trois couleurs a la ligne CSS
    let couleur = "rgb("+colorRoll[0]+", "+colorRoll[1]+", "+colorRoll[2]+")";
    // Choisis à quoi ajouter la ligne de CSS et lui donne
    titleRoll.style.color = couleur;
}
// Lance la fonction ColorTitleRoll tous les 5 millisecondes, permettant de modifier de manière fluide les couleurs
setInterval(ColorTitleRoll, 5)

// Un grand tableau contenant chacun un tableau pour chacune des 6 couleurs qui s'enchainent
var colorRollText = [[255,0,0],[255,255,0],[0,255,0],[0,255,255],[0,0,255],[255,0,255]];
// Les 6 mode de couleurs pour chaque paramètres à rentrer
var modeText = [0,1,2,3,4,5];

function ColorTextRoll(){
    // Boucle pour passer dans chacune de 6 couleurs différentes et les modifiers une par une. Même logique qu'auparavant, mais x6
    for (let Roll = 0; Roll < colorRollText.length; Roll++) {
        if (modeText[Roll] == 0) {
            colorRollText[Roll][1] ++;
        } else if (modeText[Roll] == 1) {
            colorRollText[Roll][0] --;
        } else if (modeText[Roll] == 2) {
            colorRollText[Roll][2] ++;
        } else if (modeText[Roll] == 3) {
            colorRollText[Roll][1] --;
        } else if (modeText[Roll] == 4) {
            colorRollText[Roll][0] ++;
        }else {
            colorRollText[Roll][2] --;
        }

        if (colorRollText[Roll][0] == 255 && colorRollText[Roll][1] == 0 && colorRollText[Roll][2] == 0) {
            modeText[Roll] = 0;
        } else if (colorRollText[Roll][0] == 255 && colorRollText[Roll][1] == 255 && colorRollText[Roll][2] == 0) {
            modeText[Roll] = 1;
        } else if (colorRollText[Roll][0] == 0 && colorRollText[Roll][1] == 255 && colorRollText[Roll][2] == 0) {
            modeText[Roll] = 2;
        } else if (colorRollText[Roll][0] == 0 && colorRollText[Roll][1] == 255 && colorRollText[Roll][2] == 255) {
            modeText[Roll] = 3;
        } else if (colorRollText[Roll][0] == 0 && colorRollText[Roll][1] == 0 && colorRollText[Roll][2] == 255) {
            modeText[Roll] = 4;
        } else if (colorRollText[Roll][0] == 255 && colorRollText[Roll][1] == 0 && colorRollText[Roll][2] == 255) {
            modeText[Roll] = 5;
        }
    }
    // Automatise la suuuuuuper longue ligne de couleur à écrire
    let couleurText = "linear-gradient(to right";
    for (let Roll = 0; Roll < colorRollText.length; Roll++) {
        couleurText += ", rgb("+colorRollText[Roll][0]+", "+colorRollText[Roll][1]+", "+colorRollText[Roll][2]+")";

    }
    textRoll.style.backgroundImage = couleurText;
}
setInterval(ColorTextRoll, 1)

// Code de Grégor

