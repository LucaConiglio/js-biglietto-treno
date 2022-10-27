const nome = prompt("inserire il Nome");
const cognome = prompt("inserire il Cognome");
const annoNascita = parseInt( prompt("inserire solo l'anno di nascita"));
const chilometri = parseInt( prompt("inserire quanti km deve percorrere"));

const upper = nome.charAt(0).toUpperCase() + nome.slice(1);
const upcognome = cognome.charAt(0).toUpperCase() + cognome.slice(1);

if (isNaN (annoNascita)) {
    alert("Il valore inserito sull'anno di nascita é errata premere su ok e ricaricare la pagina perfavore")
}
if (isNaN (chilometri)) {
    alert("Il valore inserito sui chilometri é errata premere su ok e ricaricare la pagina perfavore")
}
const now = new Date();
const prezzoChilometro = 0.21;

const eta = now.getFullYear() - annoNascita;
console.log(eta);


const biglietto = (prezzoChilometro * chilometri).toFixed(2);
console.log(typeof biglietto);
const biglietto2 = prezzoChilometro * chilometri;
console.log(typeof biglietto2);
let prezzoBiglietto = document.getElementById("prezzo-finale");

 if (eta >= 110) {
    prezzoBiglietto.innerHTML=`Sig ${upper} ${upcognome} che ci fa ancora vivo? non vuole morire eh!`;
 } else if (eta >= 65){
  let  over65 = biglietto * 0.60;
  console.log(over65);
  prezzoBiglietto.innerHTML=`Sig ${upper} ${upcognome} il prezzo della tratta scelta é di ${over65}€`;
} else if (eta <= 18) {
   let under18 = biglietto * 0.80;
   console.log(under18);
   prezzoBiglietto.innerHTML=`Sig ${upper} ${upcognome} il prezzo della tratta scelta é di ${under18.toFixed(2)}€`;

} else {
    biglietto;
    console.log(biglietto); 
    prezzoBiglietto.innerHTML=`Sig ${upper} ${upcognome} il prezzo della tratta scelta é di ${biglietto}€`;  
}

