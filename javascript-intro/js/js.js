/**
 * file: js/js.js
 * purpose: Behaviors
 **/
console.log('Success: JavaScript running!');
console.log("Hello World");


/* Her er en konsol, der skriver møjn */
console.log("Mojn Do");//Her er en kommentar

/* Variabler */
let a = "Hvem fanden er Michael?";


/*Variabler tal (regne) */
let b = "23";
let c = 23;
console.log(c + c);

/*Booleans: true / false */
let julemandenEksisterer = true;
console.log ("Findes julemanden?" + julemandenEksisterer);

let aftensmad = false;

let vaer_23_Booked = false;

/* Kontrolstrukturen */
if(new Date().getHours()<18) {
    document.getElementById("demo").innerHTML = "Good Day";
}

/* Konkatenering: "Klistre sammen med +" */
let header = "<h1>" + a + "</h1>";
console.log(header);

document.getElementById("hej").innerHTML = header;
document.getElementById("hej").style.color = "blue";
