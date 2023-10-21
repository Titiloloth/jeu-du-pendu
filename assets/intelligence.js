let motChoisi
let nbErreurs = 0
let nbReussite = 0
let essaisLettres = []


function generationMot() {
    let idMotChoisi = Math.floor(Math.random()*10) 
    let motAleatoire = MOTS[idMotChoisi]
    let motChoisiSplit = motAleatoire.split('')
    return motChoisiSplit
}

function choixLettre(lettreChoisie) {

    document.getElementById(lettreChoisie).className = "disabled"

    if (!essaisLettres.includes(lettreChoisie)){
        verifierLettre(lettreChoisie);
        
        checkEnd()
    }
    
    essaisLettres.push(lettreChoisie)

}

function verifierLettre(lettreChoisie) {
    if(!motChoisi.includes(lettreChoisie)) {
        dessiner()
    } else {

        for (let index = 0; index < motChoisi.length; index++) {
            if (motChoisi[index] === lettreChoisie) {
                afficherLettreJuste(lettreChoisie, index+1)
            }
        }
    }

}

function afficherLettreJuste(lettreChoisie, id) {
    document.getElementById("lettre"+id).textContent = lettreChoisie
    nbReussite++
}


function dessiner() {
    nbErreurs++
    document.getElementById("potence").src = "assets/images/potence/" + nbErreurs + ".png"
    document.getElementById("essais").textContent = NB_ERREURS_MAX - nbErreurs
}

function checkEnd() {
    console.log(nbErreurs)
    if (nbReussite == motChoisi.length) {
        document.getElementById("modal1").style.display = 'flex'
        console.log("Reussite")
    }

    if (nbErreurs == NB_ERREURS_MAX) {
        console.log("Perdu ! gros nul")
        document.getElementById("modal2").style.display = 'flex'
    }
}

motChoisi = generationMot()

console.log(motChoisi)