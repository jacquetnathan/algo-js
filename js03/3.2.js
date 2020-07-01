let arr = [1,2,3,4,5];
let moyenne = 0;
for (i = 0; i < arr.length; i++)
{
    moyenne = arr[i] + moyenne;
}
moyenne = moyenne / arr.length;
console.log(+moyenne)