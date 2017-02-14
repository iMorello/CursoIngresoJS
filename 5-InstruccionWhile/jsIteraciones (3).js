function Mostrar()
{
    var clave;
    clave = prompt('Ingrese la clave.');
    while(clave!='utn750')
    {
        alert('La clave es inccorrecta.');
        clave = prompt('Ingrese la clave.');
    }
}
