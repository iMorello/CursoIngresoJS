function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;

	var respuesta='si';

	while(respuesta)
	{
		contador++;
		numero=prompt('Ingrese un número.');
		numero=parseInt(numero);
		if(numero>0)
		{
			positivo+=numero;
			respuesta=confirm('Si desea continuar presione aceptar, de lo contrario presione cancelar.');
		}
		else
		{
			negativo*=numero;
			respuesta=confirm('Si desea continuar presione aceptar, de lo contrario presione cancelar.');
		}
	}
alert('El número positivo es: ' + positivo);
alert('El número negativo es: ' + negativo);
document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;
}