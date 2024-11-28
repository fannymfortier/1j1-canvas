/**
 * @description définition de fonctions pour la gestion du background : 
 *                      - Créer les bgd
 *                      - Dessiner les bgd
 *                      - Déplacer les bgd
 * @author Fanny Fortier
 */

//Variables globales
const oBgdModele = {
    iPosX : 0,
    iPosY : 0,
    iVitesseX : 0,
}

let aoBgd = [];

//Définition de fonction
/**
 * Fonction creerBgd()
 * @description permet de créer le tableau (array) des objets Bgd à partir de oBgdModele 
 * @param void
 * @returns void
 */

function creerBgd(){
    for(let iBgd = 0; iBgd < aoImgBgdHTML.length; iBgd++){
        aoBgd[iBgd] = Object.create(oBgdModele); //Si un seul background. seulement besoin d'une ligne
    }
}//Fin de la fonction creerBgd()

/**
 * Fonction dessinerBgd()
 * @description permet de dessiner tous les backgrounds sur le canvas
 * @param void
 * @returns void
 */

function dessinerBgd(){
    for(let iBgd = 0; iBgd < aoBgd.length; iBgd++){



    //Dessiner la même image de background a des positions de X différentes
    oContexte.drawImage(
        aoImgBgdHTML[iBgd], 
        aoBgd[iBgd].iPosX, 
        aoBgd[iBgd].iPosY,
        oJeu.iLargeur,
        oJeu.iHauteur
    );

    //Dessiner la même image mais à oJeu.iLargeur
    oContexte.drawImage(
        aoImgBgdHTML[iBgd], 
        aoBgd[iBgd].iPosX + oJeu.iLargeur, 
        aoBgd[iBgd].iPosY,
        oJeu.iLargeur, 
        oJeu.iHauteur
    );    
    //On veut vérifier que le bgd aoBgd[iBgd].iPosX retourne à 
    if(aoBgd[iBgd].iPosX > -oJeu.iLargeur){ //ERREUR CONSOLE À REVOIR APRÈS DERNIER AJOUT
        aoBgd[iBgd].iPosX = aoBgd[iBgd].iPosX - aoBgd[iBgd].iVitesseX;
    }else{
        aoBgd[iBgd].iPosX = 0;
    };}//Fin de la boucle for

}//Fin de la fonction dessinerBgd()


/**
 * Fonction deplacerBgdSelon()
 * @description Cette fonction permet de déplacer le background selon la vitesse passée en paramètre
 * @param {integer} iVitesse
 * @returns void
 */

function deplacerBgdSelon(iVitesse){
    for(let iBgd = 0; iBgd < aoBgd.length; iBgd++){
        aoBgd[iBgd].iVitesseX = (iBgd+1)*iVitesse
    };
}//Fin de la fonction deplacerBgdSelon()