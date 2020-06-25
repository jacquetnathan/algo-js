const  readlineSync  =  require ( "readline-sync" ) ;
let num1 = readlineSync.question('Un nombre entier svp ');
let num2 = readlineSync.question('Un autre svp ');
console.log (num1 % num2)