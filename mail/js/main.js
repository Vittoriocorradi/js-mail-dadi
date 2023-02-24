'use strict';

// Variabili lista email e email dell'utente
const mailList = ['pinco.pallino@mail.com', 'gianni.pinotto@mail.com', 'pippo.pluto@mail.com', 'qui.quo@mail.com'];
console.log(mailList);
const userMail = prompt('Inserire il proprio indirizzo email');
console.log(userMail);
// Variabile per vedere se l'utente può accedere o no
let logIn = false;

// Ciclo per leggere gli elementi dell'array
for (let i = 0; i < mailList.length; i++) {
    // Condizione per controllare che la mail dell'utente sia nella lista
    if (mailList[i] === userMail) {
        logIn = true;
    }
}

// Condizione per determinare il risultato da dare all'utente
if (logIn === true) {
    alert('Puoi accedere al sito');
    console.log(`L'utente può accedere al sito`);
} else {
    alert('Non puoi accedere al sito');
    console.log(`L'utente non può accedere al sito`);
} 
