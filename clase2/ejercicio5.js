/*
En un tramo de un rally los conductores no deben ir ni 
demasiado rápido ni demasiado lentos. Este ejercicio debe 
tomar la longitud del tramo en kilómetros y el tiempo empleado, 
si la velocidad está entre 40 y 60 km/h el conductor pasa 
la prueba en caso contrario es descalificado.
Ejemplo. si recorre 100 km en 4 horas, ha ido a una velocidad 
de 100/4 que son 25km/h. Estaría descalificado.
*/

function velocidad(kilometros, horas) {
    const velocidad = kilometros / horas;
    if (velocidad >= 40 && velocidad <= 60) {
        return "El conductor pasa la prueba";
    } else {
        return "El conductor está descalificado";
    }
}
console.log(velocidad(60, 1)); 