let arr = [1,2,3,4,5];
let somme = 0;
for (let i = 0; i < arr.length; i++)
{
    somme = arr[i] + somme;
}
console.log(+somme);