let saisie = true

while (saisie) {

    let choice = parseInt(prompt('Faites un choix d exercices : \n' +
        'choix 1 : Calcul du nbre de jeunes, de moyens et de vieux \n' +
        'choix 2 : Table de multiplication \n' +
        'choix 3 : Recherche d un prénom \n' +
        'choix 4 : Total d une commande'));

    switch (choice) {
        case 1:
            Exercice1();
            break;
        case 2:
            Exercice2();
            break;
        case 3:
            Exercice3();
            break;
        case 4:
            Exercice4();
            break;
        default:
            alert('Merci de saisir 1 ou 2 ou 3. Vous serez bien aimable');
            break;
    }

    saisie = confirm('Souhaitez vs continuer?')
}

//Exercice 1
function Exercice1() {
    var somme1 = 0;
    var somme2 = 0;
    var somme3 = 0;
    do {
        var age = parseInt(window.prompt('Ecrivez les âges. Stoppe à 100 ans'));

        if (age < 20) {
            somme1++;
            console.log('il y a ' + somme1 + ' personnes de moins de 20 ans');
        } else if (age > 40) {
            somme2++;
            console.log('il y a ' + somme2 + ' personnes de plus de 40 ans');
        } else {
            somme3++;
            console.log('il y a ' + somme3 + ' personnes entre 20 et 40 ans')
        }
    }
    while (age != 100)

    alert('il y a ' + somme1 + ' personnes de moins de 20 ans \n' +
        'il y a ' + somme3 + ' personnes entre 20 et 40 ans \n' +
        'il y a ' + somme2 + ' personnes de plus de 40 ans')
}

//Exercice 2
function Exercice2() {
    var f = window.prompt('Quelle table voulez vous afficher?')
    for (var i = 0; i <= 10; i++)
        console.log(i + ' x ' + f + ' = ' + f * i);
}

//Exercice 3
function Exercice3() {
    var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
    console.log(tab);
    var prenom = window.prompt('Ecrire un prénom');
    var index = tab.indexOf(prenom);
    console.log(prenom);
    console.log(index);
    if (index > -1) {
        var retrait = tab.splice(index, 1, '');
        console.log(retrait);
        console.log(tab)
    } else {
        alert('Mauvais prénom!!');
        console.log(tab)
    }
    for (i = index; i < tab.length; i++) {
        tab[i] = tab[i + 1];
    }
    console.log('tab final : ' + tab);
}

//Exercice 4
function Exercice4() {
    const PU = parseFloat(prompt('Prix unitaire'));
    console.log('prix unitiare : ' + PU);
    const QTECOM = parseInt(prompt('Quantité voulue'));
    console.log('quantité voulue : ' + QTECOM);
    const TOT = parseFloat(PU * QTECOM);
    console.log('total : ' + TOT);
    const REM5 = parseFloat(TOT - (TOT * '0.05'));
    console.log('total+remise5% = ' + REM5);
    const REM10 = parseFloat(TOT - (TOT * '0.10'));
    console.log('total+remise10% = ' + REM10);
    const PORT = 6;
    const PORT2 = parseFloat(REM5 + (REM5 * '0.02'));
    console.log('total avec remise5% et port2% = ' + PORT2);
    const PORT3 = parseFloat(REM10 + (REM10 * '0.02'));
    console.log('total avec remise10% et port2% = ' + PORT3);

    if (TOT > 200) {
        alert('Votre commande est de ' + TOT + ' euros. Elle est supérieure à 200 euros. Vous êtes riche! \n' +
            'Vous bénéficiez donc d une remise de 10%');
        alert('le nouveau total est de ' + REM10 + ' euros');

        if (REM10 > 500) {
            alert('Votre commande avec remise est supérieure à 500 euros.');
            alert('Vous êtes très riche. Votre total reste donc à : ' + REM10)
        } else {
            alert('avec les frais de port nous sommes à ' + PORT3)
        }

    } else if ((TOT >= 100) && (TOT <= 200)) {
        alert('Votre commande est de ' + TOT + ' euros. Elle est donc comprise entre 100 et 200  euros.  \n' +
            'Vous êtes un peu pauvre, vous bénéficiez d une donc remise  de 5%');
        alert('Le nouveau total est de ' + REM5 + ' euros');

    } else if (TOT < 100) {
        alert('Votre commande est de ' + TOT + ' euros. Elle n atteint donc pas 100 euros, vous êtes pauvre (ou radin) \n' +
            'il faut rajouter 6 euros de frais de port');
        alert('le nouveau total est de ' + (TOT + PORT) + ' euros .');
    }

    alert('Vive le capitalisme!');
}