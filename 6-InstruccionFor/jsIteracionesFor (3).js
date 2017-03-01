function Mostrar()
{
    var repeticiones=0;
    var cantidadRepeticiones;
    cantidadRepeticiones = prompt("Ingrese el número de repeticiones.");
    while(cantidadRepeticiones<0)
    {
        cantidadRepeticiones = prompt('Ingrese un número mayor a 0.');
    }
    for(repeticiones;repeticiones<cantidadRepeticiones;repeticiones++)
    {
        alert('Hola UTN FRA');
    }
}