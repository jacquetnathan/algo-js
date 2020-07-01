const  readlineSync  =  require ( "readline-sync" ) ;
let nombre = readlineSync.question("Entrez un nombre entre 1 et 7 ? ");
if (nombre == 1)
{
    console.log("Lundi");
}
else if (nombre == 2)
{
    console.log("Mardi");
}
else if (nombre == 3)
{
    console.log("Mercredi");
}
else if (nombre == 4)
{
    console.log("Jeudi");
}
else if (nombre == 5)
{
    console.log("Vendredi");
}
else if (nombre == 6)
{
    console.log("Samedi");
}
else
{
    console.log("Dimanche");
}