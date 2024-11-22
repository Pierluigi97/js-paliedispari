/*

Pari e Dispari:

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

*/

// Dichiaro una variabile con un prompt in modo che l'utente scelga un numero casuale da 1 a 5, 
// se è Pari o Dispari.

console.log(sceltaUtente);
const sceltaUtente = prompt('Scegli: Pari o Dispari')
      
console.log(numeriUtente);
const numeriUtente = parseInt(prompt('Scegli un numero da 1 a 5'))

// Creo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 

function numeroRandom() {
  return Math.floor(Math.random() * 5) + 1;
} 

// Inserisco il numero random in una variabile
const numeroCpu = numeroRandom();


// Sommo i due numeri
const somma1 = numeriUtente + numeroCpu;


// Stampo l'operazione
const somma = (`${numeriUtente} + ${numeroCpu} = ${somma1}`) ;
console.log(somma);