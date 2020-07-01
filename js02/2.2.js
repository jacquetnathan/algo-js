const  readlineSync  =  require ( "readline-sync" ) ;
let min = readlineSync.question("Donne un chiffre min? ");
let current = readlineSync.question("Donne un chiffre current? ");
let max = readlineSync.question("Donne un chiffre max ? ");
if ((current >= min) && (current <= max))
{ 
    console.log("Le chiffre est entre min et max ou égal")
}
else
{
    console.log("le chiffre est plus petit ou plus grand que min/max")
}