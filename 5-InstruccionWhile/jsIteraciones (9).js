function Mostrar()
{

    var contador=0;
	var maximo;
	var minimo;
	var numero;	
	var primera=true;
	while(confirm('Si desea continuar presione aceptar, de lo contrario presione cancelar.'))
	{
		numero=prompt('Ingrese un numero');
		numero=parseInt(numero);
		if(primera)
		{
			primera=false;
			maximo=numero;
			minimo=numero;
		}
		else
		{
			if(numero>maximo)
			{
				maximo=numero;
			}
			if(numero<minimo)
			{
				minimo=numero;
			}
		}
	
	}
	alert('El número máximo es: ' + maximo);
	alert('El número mínimo es: ' + minimo);
	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo; 
	
}