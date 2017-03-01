function Mostrar()
{
    var palabra;
    for(;;)
    {
        palabra = prompt('Ingrese la palabra que desee.');
        if(palabra==10)
        {
            console.log('Break');
            break; 
        }
    }
}