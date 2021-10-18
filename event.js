// var clickedd = document.getElementById("clickedd").onclick =
// function(e){
//     console.log("clickedd: " + clickedd);
//     alert("Bienvenue sur le site récapitulatif");     
// }



// Code de Grégor
const titleRoll = document.getElementById('TitleRoll');
const textRoll = document.getElementById('TextRoll');

var colorRoll = [255, 0, 0];
var mode = 0;

function ColorTitleRoll(){
    if (mode == 0) {
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
    console.log(mode)
    let couleur = "rgb("+colorRoll[0]+", "+colorRoll[1]+", "+colorRoll[2]+")"
    titleRoll.style.color = couleur;
}
setInterval(ColorTitleRoll, 5)

var colorRollText = [[255,0,0],[255,255,0],[0,255,0],[0,255,255],[0,0,255],[255,0,255]];
var modeText = [0,1,2,3,4,5];


function ColorTextRoll(){

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
    let couleurText = "linear-gradient(to right";
    for (let Roll = 0; Roll < colorRollText.length; Roll++) {
        couleurText += ", rgb("+colorRollText[Roll][0]+", "+colorRollText[Roll][1]+", "+colorRollText[Roll][2]+")";
        
    }
    textRoll.style.backgroundImage = couleurText;
}
setInterval(ColorTextRoll, 1)

// Code de Grégor