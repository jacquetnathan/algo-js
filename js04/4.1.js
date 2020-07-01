const readlineSync = require("readline-sync");

function calcSurface (longueur , largeur){
return longueur * largeur;
}

let longueur = readlineSync.question("Quel est la longueur? ");
let largeur= readlineSync.question("Quel est la largeur? ");
console.log (calcSurface(longueur, largeur))
