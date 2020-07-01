const  readlineSync  =  require ( "readline-sync" ) ;
let nombre = readlineSync.question("Quel est votre numéro préféré? ");
while (nombre !== "42")
{
    console.log("Etes vous sûr?");
    nombre = readlineSync.question("Quel est votre numéro préféré? ");
}