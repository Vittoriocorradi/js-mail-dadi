'use strict';

// Variabili numeri casuali e rispettivi console.log
const playerNumber = Math.floor(Math.random() * 6 + 1);
console.log(`Numero del giocatore = ${playerNumber}`);
const computerNumber = Math.floor(Math.random() * 6 + 1);
console.log(`Numero del computer = ${computerNumber}`);
// Alert di inizio partita
alert('Benvenuto a un gioco di dadi!');
alert(`Il tuo numero è ${playerNumber}`);
alert(`Il numero del computer è ${computerNumber}`);

// Condizione vincitore
if (playerNumber > computerNumber) {
    alert(`Congratulazioni, il tuo ${playerNumber} batte il ${computerNumber} del computer!`);
    console.log('Il giocatore ha vinto la partita');
} else if (computerNumber > playerNumber) {
    alert(`Peccato! Il computer ha battuto il tuo ${playerNumber} con un ${computerNumber}.`);
    console.log('Il computer ha vinto la partita');
} else {
    alert(`Ad entrambi è uscito un ${playerNumber}, abbiamo un pareggio!`);
    console.log('Il giocatore e il computer hanno pareggiato')
}