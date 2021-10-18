
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
