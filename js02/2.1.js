const  readlineSync  =  require ( "readline-sync" ) ;
let age = readlineSync.question("Quel est ton âge ? ");
if (age >= 18) {
    console.log("Tu es majeur !")
} 
else{
    console.log("Tu es mineur mon pote !")
}