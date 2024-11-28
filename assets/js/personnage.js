/**
 * @description définition des fonctions pour le personnage
 *                      - creerPersonnage()
 *                      - dessinerPersonnage()
 *                      - deplacerPersonnageSurUnClick()
 *                      - animerPersonnage() (Parce que l'image est un sprite, c'est à dire une image qui contient plusieurs frames qui décrivent le mouvement)
 */

//Variables globales 

const IDLE = 0;
const WALK = 1;
const RUN = 2;

const oFrameModele = {
    iPosX : 0, 
    iPosY : 0, 
    iLargeur : 128, 
    iHauteur : 128,
    iFrameActuel : 0,
    iEtat : RUN, 
    aNbFrames : [6, 8, 8], //Nb de frames
    iFacteurMultiplicatif: 2 //2x grosseur personnage
}

const oPersonnageModele = { 
    iPosX : 0,
    iPosY : 300,
    iVitesseX : 0, 
    iVitesseY : 0,

    oFrame : Object.create(oFrameModele),
}

let oPersonnage; 


//Définition des fonctions

/**
 * Fonction creerPersonnage()
 * @description permet de créer un objet personnage a partir de oPersonnageModele
 * @param void
 * @returns void
 */

function creerPersonnage(){
    oPersonnage = Object.create(oPersonnageModele); //Une seule ligne parce qu'il ne s'agit pas d'un tableau
    
}//Fin de la fonction creerPersonnage()


/**
 * Fonction dessinerPersonnage()
 * @description permet de dessiner une frame de l'image du personnage 
 * @param void
 * @returns void
 */

function dessinerPersonnage(){
    //drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
    oContexte.drawImage(
        //L'image PNG pour l'état
        aoImgSpriteHTML[oPersonnage.oFrame.iEtat],
        //Dessiner un seul frame de l'image png
        oPersonnage.oFrame.iFrameActuel * oPersonnage.oFrame.iLargeur,
        oPersonnage.oFrame.iPosY,
        oPersonnage.oFrame.iLargeur, 
        oPersonnage.oFrame.iHauteur, 
        oPersonnage.iPosX, 
        oPersonnage.iPosY,
        oPersonnage.oFrame.iLargeur * oPersonnage.oFrame.iFacteurMultiplicatif, //Grossir personnage
        oPersonnage.oFrame.iHauteur * oPersonnage.oFrame.iFacteurMultiplicatif, 

        document.addEventListener("keypress", deplacerPersonnageSurUnClick));
}//Fin de la fonction dessinerPersonnage()

/**
 * Fonction animerPersonnage()
 * @description Cette fonction permet d'animer le personnage en passant d'une frame à un autre grâce au iFrameActuel, iLargeur du frame et setInterval
 * @param void
 * @returns void
 */

function animerPersonnage(){  //+1 parce que nos 6 frames vont de 0 à 5, donc on n'a pas de #6
    if(oPersonnage.oFrame.iFrameActuel +1 < oPersonnage.oFrame.aNbFrames[oPersonnage.oFrame.iEtat])
        {
            oPersonnage.oFrame.iFrameActuel++;
            oPersonnage.oFrame.iPosX = oPersonnage.oFrame.iFrameActuel * oPersonnage.oFrame.iLargeur;
                console.log(oPersonnage.oFrame.iFrameActuel);
        }else{
            oPersonnage.oFrame.iFrameActuel = 0; //Ramener au premier frame
        }
}//Fin de la fonction animerPersonnage()


/**
 * Fonction deplacerPersonnageSurUnClick()
 * @description Permet de passer d'un état à un autre [IDLE, WALK, RUN] en pressant des les touches a, s et d
 * @param {object} event //Il est géré par java script et contient, entre autres, le code de la touche pressée
 * @returns void
 */

function deplacerPersonnageSurUnClick(event){
    console.log(event);
    switch(event.key){
        case "a": 
                oPersonnage.oFrame.iEtat = IDLE;
                deplacerBgdSelon(0);
            break;
        case "s": 
                oPersonnage.oFrame.iEtat = WALK; 
                deplacerBgdSelon(2);
            break;
        case "d": 
                oPersonnage.oFrame.iEtat = RUN;
                deplacerBgdSelon(6);
            break;  
    }

}//Fin de la fonction deplacerPersonnageSurUnClick()