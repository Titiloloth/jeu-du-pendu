let conteneur2 = document.getElementById("conteneur2")
for (let index = 0; index < LETTRES.length; index++) {
    let touchesLettres = document.createElement("button")
    conteneur2.appendChild(touchesLettres)
    touchesLettres.textContent = LETTRES[index];
    touchesLettres.addEventListener("click", function() {
        choixLettre(touchesLettres.textContent)
    })
    
}