/*
Escribir un programa que pregunte al usuario su renta anual 
y muestre por pantalla el tipo impositivo que le corresponde.

Renta
Menos de 10000€
Entre 10000€ y 20000€
Entre 20000€ y 35000€
Entre 35000€ y 60000€
Más de 60000€

Tipo impositivo
5%
15%
20%
30%
45%
*/

function impuesto(rentaAnual) {
    if (rentaAnual < 10000) {
        return  "impositivo: 5%";
    } else if (rentaAnual >= 10000 && rentaAnual < 20000) {
        return "impositivo: 15%";
    } else if (rentaAnual >= 20000 && rentaAnual < 35000) {
        return "impositivo: 20%";
    } else if (rentaAnual >= 35000 && rentaAnual < 60000) {
        return "impositivo: 30%";
    } else {
        return "impositivo: 45%";
    }
}

console.log(impuesto(25000)); 
