/*
Una tienda aplica un descuento del 15% para las compras que incluyan más de 10 artículos
iguales cuyo precio sea superior a 40 euros. Tu programa debe comprobar y calcular la cantidad a
pagar sabiendo el número de artículos y el precio de cada uno.
Ejemplo si compras 20 artículos de 10 dólares se te descuenta un 15% del total pagarías 20*10 - 20*10*0.15 =
170 dólares.
*/

function descuento(articulos, precio) {
    const totalSinDescuento = articulos * precio;
    if (articulos > 10 && totalSinDescuento > 40) {
        const descuento = totalSinDescuento * 0.15;
        return "Cantidad a pagar: " + (totalSinDescuento - descuento) + " euros";
    } else {
        return "Cantidad a pagar: " + totalSinDescuento + " euros";
    }
}

console.log(descuento(20, 10)); 