/*

Palindroma:

Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma.

*/

// Chiedo all'utente di inserire una parola con un prompt

const sceltaUtente = prompt('Inserisci una parola')
console.log(sceltaUtente);

// Creo una funzione per capire se la parola inserita dall'utente è palindroma

function èPalindroma(parola){
 return parola.split('').reverse().join('').toLowerCase();

}

