function Mostrar()
{
	
	var contador=0;
	var acumulador=0;
	var respuesta='si';
	while(respuesta)
	{
		contador++;
		numero=prompt('Ingrese un número.');
		numero=parseInt(numero);
		acumulador+=numero;
		respuesta=confirm('Si desea continuar presione aceptar, de lo contrario presione cancelar.');
	}
alert('La suma de los numeros es: ' + acumulador);
alert('El promedio es: ' + acumulador/contador);
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;
}