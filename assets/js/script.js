/**
 * @description 
 * 
 */

//Variables globales
let oContexte;
let idInterval;

const oJeu = {
    iLargeur : window.innerWidth * 2/3, 
    iHauteur : window.innerHeight * 2/3,
    iNbMs : 1000, 
    iNbFps : 10
}


//Sélection des éléments HTML
//Les images de bgd
let aoImgBgdHTML = document.querySelectorAll("img[alt~='bgd']");
//console.log(aoImgBgdHTML);
//Les images de sprites
let aoImgSpriteHTML = document.querySelectorAll("img[alt~='shinobi']");
console.log(aoImgSpriteHTML);

//Les boutons
const oBtnDemarrerHTML = document.querySelector("button:first-child");
const oBtnArreterHTML = document.querySelector("button:last-child");
//console.log(oBtnDemarrerHTML, oBtnArreterHTML); 
//Canvas
const oCanvasHTML = document.querySelector("#monCanvas");
console.log(oCanvasHTML);


//Définition des fonctions

/**
 * Fonction initialiser()
 * @description  initialiser les variables globales et ajouter des écouteurs d'événements
 * @param void
 * @returns void
 */

function initialiser(){
    //Donner les dimensions au canvas
        oCanvasHTML.width = oJeu.iLargeur;
        oCanvasHTML.height = oJeu.iHauteur;

        //L'environnement 2D
oContexte = oCanvasHTML.getContext("2d");

oBtnDemarrerHTML.addEventListener("click", demarrerSurUnClick);
oBtnArreterHTML.addEventListener("click", arreterSurUnClick);
}//Fin de la fonction initialiser()

/**
 * Fonction demarrerSurUnClick()
 * @description lancer la boucle du jeu de maniere infinie grace a setInterval() qui retourne une valeur utile pour
 * @param void
 * @returns void
*/

function demarrerSurUnClick(){
    //console.log("demarrerSurUnClick");
    creerBgd();
    idInterval = setInterval(boucler, oJeu.iNbMs/oJeu.iNbFps);
    creerPersonnage();
    
}//Fin de la fonction demarrerSurUnClick()

/**
 * Fonction arreterSurUnClick()
 * @description Cette fonction permet d'arrêter la boucle infinie lancée par setInterval() grâce à clearInterval()
 * @param void
 * @returns void
 */

function arreterSurUnClick(){
    console.log("arreterSurUnClick");
    clearInterval(idInterval);
    
}//FIn de la fonction arreterSurUnClick()

/**
 * Fonction boucler()
 * @description permet de dessiner le bgd, le personnage(sprite) et d'animer le personnage
 * @param void
 * @returns void
 */

function boucler(){
    console.log(boucler);
    dessinerBgd();
    dessinerPersonnage();
    animerPersonnage();
    
}//Fin de la fonction boucler()



//Appel de la fonction initialiser()
initialiser()