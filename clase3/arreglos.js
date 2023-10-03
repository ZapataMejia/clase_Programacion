/*
let frutas =["Manzana", "Banana"];
console.log(frutas.length)


let primero = frutas[0];//Manzana
console.log(frutas.push)

let ultimo = frutas[frutas.length -1];


let nuevaLongitud = frutas.push("Naranja"); //Añade "Naranja" al final 


let ultimo2 = frutas.pop(); // Elimina "Naranja" de el final


let primero2 = frutas.shift(); //Elimina "Fresa" de el inicio

frutas.push("Fresa") // ["Manzana", "Banana", "Fresa"]

let pos = frutas.indexOf("Banana"); // (pos) es la posicion para abreviar 

*/

//Ejercicio1
let number = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
console.log(number.length);
console.log(number);
number.push("2", "4", "6", "8");
number[0] = "Uno";
console.log(number);

//Ejercicio2
let number = ["1", "2", "3", "4", "5", "6"]
console.log(number);
number.pop()
console.log(number);

//Ejercicio3
let number = []
number.push("0", "1", "2")
console.log(number)
console.log(number.join())

//Const

const car = { type: "fiat", model: "500", color: "white" }
console.log(car)

const person = {
    firstName: "John",
    LastName: "Doe",
    age: "22",
    eyecolor: "Blue"
}
console.log(person)

//Ciclo while

let numberWhile = 0;
while (numberWhile < 10) {
    console.log(`el numero es: ${numberWhile}`);
    numberWhile++;
}