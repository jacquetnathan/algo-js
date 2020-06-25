const  readlineSync  =  require ( "readline-sync" ) ;
let num1 = readlineSync.question('Un nombre avec une partie décimal svp ');
let num2 = readlineSync.question('Un autre svp ');
console.log("Resultat: " + Math.floor(num1) * num2)