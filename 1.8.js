const  readlineSync  =  require ( "readline-sync" ) ;
let nom = readlineSync.question("Tu t'apelle comment ");
let ville = readlineSync.question("t'es de ou ");
let plat = readlineSync.question("ton plat préféré ");
let voiture = readlineSync.question("ta voiture préféré ");
console.log ("Alors mon pote tu t'appelle " +nom +" et t'habite à " +ville +" tu aime bien manger " +plat +" et tu voudrais rouler en " +voiture)