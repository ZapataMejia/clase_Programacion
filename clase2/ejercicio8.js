/*
Para tributar un determinado impuesto se debe ser mayor de 16 años y tener unos ingresos
iguales o superiores a 1000 € mensuales. Escribir un programa que pregunte al usuario su edad
y sus ingresos mensuales y muestre por pantalla si el usuario tiene que tributar o no.
*/

function tributarImpuesto(edad, ingresosMensuales) {
    if (edad > 16 && ingresosMensuales >= 1000) {
        return "Debes tributar";
    } else {
        return "No debes tributar";
    }
}

console.log(tributarImpuesto(18, 1200)); 
