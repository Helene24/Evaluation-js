var society = document.getElementById('society');
var PersContact = document.getElementById('PersContact');
var CodePost = document.getElementById('CodePost');
var Ville = document.getElementById('Ville');
var Mail = document.getElementById('Mail');
let comment = document.getElementById('comment');
const selectElement = document.querySelector('#choix');
var societyError = document.getElementById('societyError');
var PersContactError = document.getElementById('PersContactError');
var CodePostError = document.getElementById('CodePostError');
var VilleError = document.getElementById('VilleError');
var MailError = document.getElementById('MailError')
var filtreAlpNum = new RegExp("^[A-Za-z0-9]+$");
var filtreNum = new RegExp("^[0-9]*$")
var filtreMail = new RegExp("^.@.$")
var i = ('@')

// Récupération de 'bouton' et application de l'événement quand click
document.getElementById('bouton').addEventListener("click", function(event) {
    // récuppération de la valuer de l'input society
    let societyValue = society.value;
    //validity.valueMissing est associé à 'requiered' du html. Veut dire: si la 
    //valeur de society (qui est obligatoire) est vide, l'evenement 
    //'preventDefault' se déclenche
    if (society.validity.valueMissing) { // identique à(society =='')
        //prevent.default= indique à U que l'événement ne sera pas traité (ici: si le 
        //champ est vide, le message s'affiche)
        event.preventDefault();
        // inner.html= intégrer une balise html
        societyError.innerHTML = 'Entrez le nom de la société svp!';
        //sinon si le filtre nommé AlpNum n'est pas appliqué, l'événement se déclenche
        //encore avec le message
    } else if (!filtreAlpNum.test(societyValue)) {
        event.preventDefault();
        societyError.innerHTML = 'Caractère(s) non pris en compte';
    } else {
        societyError.innerHTML = '';
    }


    let PersContactValue = PersContact.value;
    if (PersContact.validity.valueMissing) {
        event.preventDefault();
        PersContactError.innerHTML = 'Entrez le nom de la personne à contacter svp!';
    } else if (!filtreAlpNum.test(PersContactValue)) {
        event.preventDefault();
        PersContactError.innerHTML = 'Caractère(s) non pris en compte';
    } else {
        PersContactError.innerHTML = ''
    }


    let CodePostValue = CodePost.value;
    if (CodePost.validity.valueMissing) {
        event.preventDefault();
        CodePostError.innerHTML = 'Entrez le code postal svp!';
    } else if (!filtreNum.test(CodePostValue)) {
        event.preventDefault();
        CodePostError.innerHTML = 'Caractère(s) non pris en compte';
    } else if (CodePostValue.length != 5) {
        CodePostError.innerHTML = 'Entrez le code postal sur 5 chiffres svp!';
    } else {
        CodePostError.innerHTML = ''
    }

    let VilleValue = Ville.value;
    if (Ville.validity.valueMissing) {
        event.preventDefault();
        VilleError.innerHTML = 'Entrez le nom de la ville svp!';
    } else if (!filtreAlpNum.test(VilleValue)) {
        event.preventDefault();
        Ville.innerHTML = 'Caractère(s) non pris en compte';
    } else {
        VilleError.innerHTML = ''
    }

    let MailValue = Mail.value;
    if (Mail.validity.valueMissing) {
        event.preventDefault();
        MailError.innerHTML = 'Entrez votre mail svp!';
    } else if (MailValue.indexOf(i) == -1) {
        MailError.innerHTML = 'l adresse doit comporter @';
    } else {
        MailError.innerHTML = ''
    }

    let VilleValue = Ville.value;
    if (filtreAlpNum.test(VilleValue)) {
        console.log('caractère alphanumérique ville ok');
    }
    if (Ville.length == '') {
        alert('entrez la ville svp');
    }


    let MailValue = Mail.value;
    if (filtreMail.test(MailValue)) {
        console.log('@ présent');
    }
    if (MailValue.chatAt != i) {
        alert('l adresse doit comporter @')
    }
})

//variable choixTableau = tableau vide
let choiceArray = [];
//Récupération de 'Element' et application de la fonction 
//quand U change de choix
selectElement.addEventListener('change', function() {
    //fonction = ajouter (push) élèment ds tableau vide quand
    //U fait changement
    choiceArray.push(selectElement.value);
    comment.value = (choiceArray);
})