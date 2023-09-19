console.log("Habla para ver")

console.log("10" == 10) //True
console.log("10" === 10) //False

const nameOne = "juan alberto";
const letter = nameOne[3]
console.log(letter)

const nameOne1 = "juan alberto";
const subString = "ANDRES";
console.log(nameOne1.includes(subString));
console.log(nameOne1)
console.log(nameOne1.trim)

const edad = 17
if (edad >= 18) {
    console.log("Eres mayor de edad")
} else if (edad >= 16) {
    console.log("Eres casi mayor de edad")
} else {
    console.log("Eres menor de edad")
}


const mascota = "perro";
switch (mascota) {
    case "lagarto":
        console.log("Tengo un lagarto")
        break;
    case "perro":
        console.log("Tengo un perro")
        break;
    case "gato":
        console.log("Tengo un gato")
        break;
    case "serpiente":
        console.log("Tengo un serpiente")
        break;
    case "loro":
        console.log("Tengo un loro")
        break;
    default:
        console.log("No tengo mascota")
        break;
}

let day = 0
switch (day) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
console.log(day)