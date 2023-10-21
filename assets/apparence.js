let conteneur2 = document.getElementById("conteneur2")

for (let index = 0; index < LETTRES.length; index++) {
    let touchesLettres = document.createElement("button")
    conteneur2.appendChild(touchesLettres)
    let lettreCourante = LETTRES[index]
    touchesLettres.textContent = lettreCourante;
    touchesLettres.id = lettreCourante
    touchesLettres.addEventListener("click", function() {
        choixLettre(lettreCourante)
    })
    document.getElementById("modal1").style.display = 'none'
    document.getElementById("modal2").style.display = 'none'
}

document.getElementById("essais").textContent = NB_ERREURS_MAX

