/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()
{
    eleccionMaquina = Math.floor(Math.random()*(4-1)+1);               
}
function piedra()
{
    comenzar()
    switch(eleccionMaquina)
    {
        case 1: 
             alert('Empate.');
             break;
        case 2:
             alert('Usted perdió.');
             break;
        case 3: 
             alert('Usted ganó');
             break;
    }
}
function papel()
{
    comenzar()
    switch(eleccionMaquina)
    {
        case 1: 
             alert('Usted ganó.');
             break;
        case 2:
             alert('Empate.');
             break;
        case 3: 
             alert('Usted perdió');
             break;
    }
}
function tijera()
{
    comenzar()
    switch(eleccionMaquina)
    {
        case 1: 
             alert('Usted perdió.');
             break;
        case 2:
             alert('Usted ganó.');
             break;
        case 3: 
             alert('Empate.');
             break;
        

    }
}