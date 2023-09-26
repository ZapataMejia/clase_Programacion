/*
Crea un programa que pida la nota de un estudiante en los tres trimestres del curso y calcule la nota
promedio. El resultado que dará será suspenso si la media es menor de 5, aprobado si está entre 5 y 7
y Notable por encima de 7.
Ejemplo para las notas 6, 8, 10 la media es 8 por tanto se califica como Notable
*/

function calcularPromedio(notas) {
    const promedio = (notas[0] + notas[1] + notas[2]) / 3;
    if (promedio < 5) {
        return "Perdio";
    } else if (promedio >= 5 && promedio < 7) {
        return "Gano";
    } else {
        return "Notable, Se salvo";
    }
}
console.log(calcularPromedio([6, 8, 10])); 
