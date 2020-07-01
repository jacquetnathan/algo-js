
function rand10(min, max)
{
return min+Math.floor(Math.random()*(max-min+1));
}
console.log (+rand10(1,10))