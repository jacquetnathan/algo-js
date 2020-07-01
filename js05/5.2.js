const readlineSync = require("readline-sync");

function randomizeCast(askTvSerie)
{
return Math.floor(Math.random(askTvSerie))
}

function askTvSerie()
{
let SerieTV =
    {
        "nom" : "",
        "annee" : "",
        "cast" : [],
    }
SerieTV.nom = readlineSync.question("Quel est le nom de la Serie? ");
SerieTV.annee = readlineSync.question("Quel est l'année de la Serie? ");
let acteur= readlineSync.question("Quel est le nom de l'acteur? ");
do
{
    SerieTV.cast.push({acteur});
    acteur= readlineSync.question("Quel est le nom de l'acteur? ");
}
while(acteur !== "")
console.log(SerieTV)
}

askTvSerie();
console.log(randomizeCast(askTvSerie));