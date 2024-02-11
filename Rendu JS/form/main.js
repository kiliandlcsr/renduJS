let form = document.querySelector('form')

form.addEventListener('submit', function (event) {
    event.preventDefault()

    /* let email = document.querySelector('#email')

    if(email.value === ''){
        console.log('vide');
    } else {
        console.log('pas vide');
    } */
    let errorContainer = document.querySelector('.message-error')
    let errorList = document.querySelector('.message-error ul')

    errorList.innerHTML = ""
    errorContainer.classList.remove('visible')

    let email = document.querySelector('#email')
    if (email.value === '') {
        errorContainer.classList.add('visible')
        email.classList.remove('success')

        let err = document.createElement('li')
        err.innerText = "Le champ Email ne doit être vide."

        errorList.appendChild(err)
    } else {
        email.classList.add('success')
    }
    let nom = document.querySelector('#nom')
    if (nom.value === '') {
        errorContainer.classList.add('visible')
        nom.classList.remove('success')

        let err = document.createElement('li')
        err.innerText = "Le champ Nom ne doit être vide."

        errorList.appendChild(err)
    } else {
        nom.classList.add('success')
    }
    let prenom = document.querySelector('#prenom')
    if (prenom.value === '') {
        errorContainer.classList.add('visible')
        prenom.classList.remove('success')

        let err = document.createElement('li')
        err.innerText = "Le champ Prénom ne doit être vide."

        errorList.appendChild(err)
    } else {
        prenom.classList.add('success')
    }
    let age = document.querySelector('#age')
    if (age.value === '') {
        errorContainer.classList.add('visible')
        age.classList.remove('success')

        let err = document.createElement('li')
        err.innerText = "Le champ Age ne doit être vide."

        errorList.appendChild(err)
    } else {
        age.classList.add('success')
    }
    let axe = document.querySelector('#axe')
    if (axe.value === '') {
        errorContainer.classList.add('visible')
        axe.classList.remove('success')

        let err = document.createElement('li')
        err.innerText = "Le champ Axe ne doit être vide."

        errorList.appendChild(err)
    } else {
        axe.classList.add('success')
    }
    /* let classe = document.querySelectorAll('input[type=radio]')
    classe.forEach(function(cl) {
    if (!cl.checked){
        errorContainer.classList.add('visible')
        cl.classList.remove('success')

        let err = document.createElement('li')
        err.innerText = "Le champ " + cl.value + " ne doit être vide."

        errorList.appendChild(err)
    } else {
        cl.classList.add('success')
    }
    }) le code pour vérifier qu'on a bien rempli sa classe mais j'aime pas donc je le commente même si il marche */
    let successContainer = document.querySelector('.message-success')
    successContainer.classList.remove('visible')

    if (
        email.classList.contains('success') &&
        nom.classList.contains('success') &&
        prenom.classList.contains('success') &&
        age.classList.contains('success') &&
        axe.classList.contains('success')
    ) {
        successContainer.classList.add('visible')
    }
})