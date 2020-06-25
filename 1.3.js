const  readlineSync  =  require ( "readline-sync" ) ;
let userName = readlineSync.question("Quel est ton prénom? ");
console.log("Bonjour " + userName);