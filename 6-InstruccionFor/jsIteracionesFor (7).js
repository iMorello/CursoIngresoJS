function Mostrar()
{
    var numero;
    var contador=0;
    numero = prompt('Ingrese un número.');
    var divisores= 'Divisores de ' + numero + ':' + '<br>';
    for(var i=1 ; i<=numero ; i++)
    {
        if(numero%i==0)
        {
            contador++;
            divisores += i + '<br>';
        }
    }
    divisores+='Cantidad de divisores: '+ contador + '<br>';
    document.write(divisores);
}