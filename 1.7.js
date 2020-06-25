const  readlineSync  =  require ( "readline-sync" ) ;
let pointure= readlineSync.question('Quel est votre pointure svp ');
let annee = readlineSync.question('Quel est votre année de naissance svp ');
console.log ( ((pointure *2) + 5 ) * 50 - annee + 1766 )