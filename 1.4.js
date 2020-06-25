const  readlineSync  =  require ( "readline-sync" ) ;
let firstName = readlineSync.question('Can you give me your first name please? ');
let name = readlineSync.question('Can you give me your name please? ');
let city = readlineSync.question('Can you give me your city please? ');
console.log ("Hello " +name +" "+firstName + " you live in" +" " +city)