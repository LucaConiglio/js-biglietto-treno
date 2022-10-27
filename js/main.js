const nome = prompt("inserire il Nome");
const cognome = prompt("inserire il Cognome");
const annoNascita = parseInt( prompt("inserire solo l'anno di nascita"));
const chilometri = parseInt( prompt("inserire quanti km deve percorrere"));

if ( isNaN (annoNascita && chilometri)) {
    alert("Il valore inserito sull'anno di nascita o sui chilometri é errata premere su ok e ricaricare la pagina perfavore")
}
const now = new Date();
const prezzoChilometro = 0.21;

const eta = now.getFullYear() - annoNascita;
console.log(eta);


const biglietto = prezzoChilometro * chilometri;
console.log(biglietto);
let prezzoBiglietto = document.getElementById("prezzo-finale");

 if (eta >= 65){
  let  over65 = biglietto * 0.60;
  console.log(over65);
  prezzoBiglietto.innerHTML=`sig ${nome} ${cognome} il prezzo della tratta scelta é di ${over65}$€`;
} else if (eta <= 18) {
   let under18 = biglietto * 0.80;
   console.log(under18);
   prezzoBiglietto.innerHTML=`sig ${nome} ${cognome} il prezzo della tratta scelta é di ${under18}€`;
} else {
    biglietto;
    console.log(biglietto); 
    prezzoBiglietto.innerHTML=`sig ${nome} ${cognome} il prezzo della tratta scelta é di ${biglietto}€`;  
}

