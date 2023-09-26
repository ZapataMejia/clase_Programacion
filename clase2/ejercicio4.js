/*
Este programa te ayuda a viajar. El programa pide al usuario si va 
a viajar con coche, tren, bicicleta o autobús. Si va en tren o autobús 
le recordará que lleve dinero para el billete.
Ejemplo. el cliente pide ir en tren, aparecerá el mensaje 
"lleva dinero para el ticket"
*/

const viaje = "r";
switch (viaje) {
    case "coche":
        console.log("Que le rinda el viaje")
        break;
    case "tren":
        console.log("lleva dinero para el billete")
        break;
    case "bicicleta":
        console.log("Que le rinda el viaje")
        break;
    case "autobus":
        console.log("lleva dinero para el billete")
        break;
    default:
        console.log("No conocemos este tipo de viaje")
        break;
}