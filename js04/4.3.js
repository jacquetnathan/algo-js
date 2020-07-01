const readlineSync = require("readline-sync");

function rand10(min, max)
        {
        return min+Math.floor(Math.random()*(max-min+1));
        }

function multiRand(n)
{
    for (let i = 0; i < n ; i++)
    {
         console.log (+rand10(1,10));
    }
}

let n = readlineSync.question("Combien de nombre voulez vous affichez? ");
multiRand(n);