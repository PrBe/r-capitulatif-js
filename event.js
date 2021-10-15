



//Akin - changement de couleur//
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
    
    if(b2.style.backgroundColor=="yellow"){
        b2.style.background="gray";
       
    }
    else{
        b2.style.background="yellow";
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
let texto = "";

for (let i = 0; i < inst.length; i++) {
  texto += inst[i] + " ";
}
document.getElementById("inst").innerHTML = texto;





// Akin - evenement pour l'instruction //
var clicked = document.getElementById("instru-akin").onclick =
function(e){
    console.log("instru-akin: " + clicked);
    alert("Instruction : Cliquer sur un rectangle pour lui changer ça couleur, recliquer pour remettre sa couleur d'origine");     
}