let form = document.getElementById('form');
let myname = document.getElementById('name');
let nickname = document.getElementById('nickname');
let adress = document.getElementById('adress');
let postalcode = document.getElementById('postalcode');

let errorname = document.getElementById('errorname');
let errornickname = document.getElementById('errornickname');
let erroradress = document.getElementById('erroradress');
let errorpostalcode = document.getElementById('errorpostalcode');

let regexletters = /^[a-zA-Z-\s]+$/;
let regexnumber = /^[0-9]+$/;
let regexadress = /^[a-zA-Z0-9-\s]+$/;

function toggleON() {
    document.querySelector('.carbrand').style.display = 'block';

}
function toggleOFF() {
    document.querySelector('.carbrand').style.display = 'none';
}


form.addEventListener('submit', function(e) {
    e.preventDefault()
    if (myname.value.trim() == "") {
        errorname.innerHTML = 'Veuillez renseigner un nom';
        e.preventDefault()
        
    } else if (regexletters.test(myname.value) == true) {
        console.log('Nom correct');
        errorname.innerHTML = '';
        counter++;
    } else {
        errorname.innerHTML = 'Le champs doit comporter uniquement des lettres';
        e.preventDefault()
    }

    if (nickname.value.trim() == "") {
        errornickname.innerHTML = 'Veuillez renseigner un nom';
        e.preventDefault()
    } else if (regexletters.test(nickname.value) == true) {
        console.log('Prenom correct');
        errornickname.innerHTML = '';
        counter++;
    } else {
        errornickname.innerHTML = 'Le champs doit comporter uniquement des lettres';
        e.preventDefault()
    }

    if (adress.value.trim() == "") {
        erroradress.innerHTML = 'Veuillez renseigner une adresse';
        e.preventDefault()
    } else if (regexadress.test(adress.value) == true) {
        console.log('Adresse Correct');
        erroradress.innerHTML = '';
        counter++;
    } else {
        erroradress.innerHTML = 'Le champs doit comporter des lettres et/ou des chiffres';
        e.preventDefault()
    }

    if (postalcode.value.trim() == "") {
        errorpostalcode.innerHTML = 'Veuillez renseigner un Code Postal';
        e.preventDefault()
    } else if (regexnumber.test(postalcode.value) == true) {
        console.log('Code postal Correct');
        errorpostalcode.innerHTML = '';
        counter++;
    } else {
        errorpostalcode.innerHTML = 'Le champs doit comporter uniquement des chiffres';
        e.preventDefault()
    }
 
})