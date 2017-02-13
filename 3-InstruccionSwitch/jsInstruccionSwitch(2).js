function Mostrar()
{
    var mesDelAño; 
    mesDelAño = document.getElementById('mes').value;
    switch(mesDelAño)
    {
        case 'Enero':
        case 'Febrero':
        case 'Marzo':
        case 'Abril':
        case 'Mayo':
        case 'Junio':
                 alert('Falta para el invierno.');
                 break;
        case 'Julio':
                 alert('¡Abrigate que hace frío!');
                 break;
        case 'Agosto':
                 alert('¡Abrigate que hace frío!');
                 break;
        default:       
                 alert('Ya pasó el frío, ¡ahora calor!');
                 break;      
    }
}