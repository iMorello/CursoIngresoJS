/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos=0;
var numero;

function comenzar()
{
  numeroSecreto = Math.floor(Math.random()*(101-1))+1;
  console.log; 
}
function verificar()
{
  comenzar();
  numero = document.getElementById('numero').value;
  contadorIntentos++;
  if(numero==numeroSecreto)
  {
    alert('¡Usted ha ganado! Y tan sólo en ' + contadorIntentos + ' intentos.');
  }
  else
  {
    if(numero>numeroSecreto)
    {
      alert('Usted se ha pasado del número secreto.');
    }
    else
    {
      alert('Usted aún no alcanza el número secreto.')
    }
  }
	document.getElementById('intentos').value=contadorIntentos;
}