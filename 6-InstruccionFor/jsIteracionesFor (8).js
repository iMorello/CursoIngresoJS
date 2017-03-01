function Mostrar()
{
    var i;
    var numero = prompt('Ingrese un número.');
    var contador = 0;
    for(var i=1; i<=numero; i++)
    {
        if(numero%i==0)
        {
            contador++;
        }
    }
    if(contador==2)
    {
        alert('El número es primo.');
    }
    else
    {
        alert('El número no es primo.');
    }
}