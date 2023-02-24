'use strict';

const mailList = ['pinco.pallino@mail.com', 'gianni.pinotto@mail.com', 'pippo.pluto@mail.com', 'qui.quo@mail.com'];
console.log(mailList);
let logIn = false;
const userMail = prompt('Inserire il proprio indirizzo email');
console.log(userMail);

for (let i = 0; i < mailList.length; i++) {
    if (mailList[i] === userMail) {
        logIn = true;
    }
}

if (logIn === true) {
    alert('Puoi accedere al sito');
    console.log(`L'utente può accedere al sito`);
} else {
    alert('Non puoi accedere al sito');
    console.log(`L'utente non può accedere al sito`);
} 
