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

function average(arr)
{
    moyenne = 0;
    for (let i = 0; i < n ; i++)
    {
        moyenne = moyenne + arr[i];
    }
    return moyenne / n;
}

function min(arr)
{

}

function max(arr)
{

}
let n = readlineSync.question("un nombre svp? ");
let arr = [multiRand(n)];
multiRand(n);