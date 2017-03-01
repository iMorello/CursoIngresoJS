function Mostrar()
{
    var numero;
    var pares=1;
    var contador=0;
    numero = prompt('Ingrese un número.');
    for(pares;pares<=numero;pares++)
    {
        if(pares%2==0)
        {
           contador++; 
        }                
    }    
    alert(contador);
}