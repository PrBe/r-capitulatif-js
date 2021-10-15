var clickedd = document.getElementById("clickedd").onclick =
function(e){
    console.log("clickedd: " + clickedd);
    alert("Bienvenue sur le site récapitulatif");     
}



// Code de Grégor
const titleRoll = document.getElementById('TitleRoll');

var colorRoll = [0, 255, 0];
var mode = 1;

function ColorResult(){
    if (mode == 1) {
        colorRoll[1] -= 1;
        colorRoll[2] += 1;
    }else if (mode == 2) {
        colorRoll[2] -= 1;
        colorRoll[0] +=1;
    } else {
        colorRoll[1] += 1;
        colorRoll[0] -=1;
    }
    if (colorRoll[1] == 255 && colorRoll[2] == 0 && colorRoll[0] == 0) {
        mode = 1;
    }else if (colorRoll[1] ==0 && colorRoll[2] == 255 && colorRoll[0] == 0) {
        mode = 2;
    } else if (colorRoll[1] ==0 && colorRoll[2] == 0 && colorRoll[0] == 255){
        mode = 3;
    }
    var couleur = "rgb("+colorRoll[0]+", "+colorRoll[1]+", "+colorRoll[2]+")"
    titleRoll.style.color = couleur;
}
setInterval(ColorResult, 10)
// Code de Grégor
