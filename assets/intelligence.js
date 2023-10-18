let motChoisi
let nbErreurs

function generationMot () {
    let idMotChoisi = Math.floor(Math.random()*10) 
    let motAleatoire = MOTS[idMotChoisi]
    let motChoisiSplit = motAleatoire.split('')
    return motChoisiSplit
}

function choixLettre(lettreChoisie) {
    verifierLettre(lettreChoisie);
    checkEnd()
}

function verifierLettre(lettreChoisie) {
    for (let index = 0; index < motChoisi.length; index++) {
        if (motChoisi[index] === lettreChoisie) {
            afficherLettreJuste(lettreChoisie, index+1)
        }else{
            dessiner()
        }
        
    }
}

function afficherLettreJuste(lettreChoisie, id) {
    
}

function dessiner() {
//  TODO
}

function checkEnd() {
//  TODO
}

motChoisi = generationMot()

console.log(motChoisi)