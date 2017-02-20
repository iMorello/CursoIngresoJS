function Mostrar()
{
	
	var contador=0;
	var acumulador=0;
	var numero;
	while(contador<5)
	{
		contador++;
		numero = prompt('Ingrese un número.');
		numero = parseInt(numero);
		acumulador+=numero;
	}
alert('La suma de los numeros es: ' + acumulador);
alert('El promedio es: ' + acumulador/contador);
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;
}