var cognomi = ['Bianchi ', 'Neri ', 'Rossi ', 'Verdi ', 'Gialli '];

var newLength = cognomi.push(prompt("Cognome")+"");
console.log(cognomi);
document.getElementById("cognomi").innerHTML=cognomi;

// Ordine alfabetico
var cognomiAlfabeto = cognomi;
cognomiAlfabeto.sort();
console.log(cognomiAlfabeto);
document.getElementById("ordine-alfabetico").innerHTML=cognomiAlfabeto;

//ordine umano
var ordineUmano;

for(var i=0; i < cognomi.length ; i++) {
    //ordineUmano += (i) + " " + cognomi[i];
    document.getElementById("ordine-umano").innerHTML += (i+1) + "-" + cognomi[i] + " ";
}

//console.log(ordineUmano);