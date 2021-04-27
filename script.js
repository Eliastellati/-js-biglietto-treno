

var distanza = prompt("Inserisci il numero di chilometri che vuoi percorrere");
console.log(distanza);

var eta = prompt("Inserisci la tua età");
console.log(eta)

// prezzo definito in base ai km (0.21 € al km)

var costoBiglietto = distanza * 0.21;
console.log(costoBiglietto);
document.getElementById("totalcost").innerHTML = costoBiglietto;

// 20% per i minorenni
var discount20 = costoBiglietto * 0.2;
console.log(discount20);

// 40% per gli over 65.
var discount40 = costoBiglietto * 0.4;
console.log(discount40);

// sconto
if (eta < 18) {
    document.getElementById("discount").innerHTML = discount20;
} else if (eta >= 65) {
    document.getElementById("discount").innerHTML = discount40;
} else {
    document.getElementById("discount").innerHTML = "0";
}

// Prezzo finale del biglietto
var finale;
if (eta < 18) {
    // minorenne
    finale = costoBiglietto - discount20;

    document.getElementById("final-price").innerHTML = finale;
} else if (eta >= 65) {
    // over 65
    total = costoBiglietto - discount40;

    document.getElementById("final-price").innerHTML = finale;
} else {
    finale = costoBiglietto;

    document.getElementById("final-price").innerHTML = finale;
}

