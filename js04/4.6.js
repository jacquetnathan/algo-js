const readlineSync = require("readline-sync");

function factorial(a)
{
    if (a === 0) 
    {
        return 1;
    }
    else 
    {
        return a * factorial(a - 1);
    } 
}

let a = readlineSync.question("un nombre svp ");
console.log (factorial(a))