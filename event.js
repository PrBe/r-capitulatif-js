
//Akin - changement de couleur des que l'on clique sur une des div, recliquer remet la couleur d'origine//
var b1 = document.getElementById("b1")

b1.onclick = function (e) {
    
    if(b1.style.backgroundColor=="green"){
        b1.style.background="gray";

       
    }
    else{
        b1.style.background="green";
    }
}


b2.onclick = function (e) {
    
    if(b2.style.backgroundColor=="orange"){
        b2.style.background="gray";
       
    }
    else{
        b2.style.background="orange";
    }
}

b3.onclick = function (e) {
    
    if(b3.style.backgroundColor=="red"){
        b3.style.background="gray";
       
    }
    else{
        b3.style.background="red";
    }
}


b4.onclick = function (e) {
    
    if(b4.style.backgroundColor=="black"){
        b4.style.background="gray";
       
    }
    else{
        b4.style.background="black";
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


// Akin - changement de texte des que l'on clique sur les différents div "Cliquer ici -> Vert"//
var clicked = document.getElementById("vert").onclick = function(e){
  document.getElementById('vert').innerHTML = 'VERT';
}

var clicked = document.getElementById("orange").onclick = function(e){
  document.getElementById('orange').innerHTML = 'ORANGE';
}

var clicked = document.getElementById("rouge").onclick = function(e){
  document.getElementById('rouge').innerHTML = 'ROUGE';
}

var clicked = document.getElementById("noir").onclick = function(e){
  document.getElementById('noir').innerHTML = 'NOIR';
  
}
