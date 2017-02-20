function Mostrar()
{

	var contador=0;
	var contadorPositivos=0;
	var contadorNegativos=0;
	var contadorPares; 
	var acumuladorPositivos=0;
	var acumuladorNegativos=0; 
	var numero;
	var mensaje; 
    while(confirm('Si desea continuar presione aceptar, de lo contrario presione cancelar.'))
	{
		numero=prompt('Ingrese un número.');
		numero=parseInt(numero);
		if(numero>0)
		{
			acumuladorPositivos=numero;
			contadorPositivos++;
		}
		else if(numero==0)
		{
			contador++;
		}
		else 
		{
			acumuladorNegativos+=numero;
			contadorNegativos++;
		}
		if(numero%2==0)
		{
			contadorPares++;
		}
		
	}
	mensaje='Suma de los números negativos es: ' + acumuladorNegativos + '<br>';
	mensaje+='Suma de los números positivos es: ' + acumuladorPositivos + '<br>';
	mensaje+='Cantidad de números positivos es: ' + contadorPositivos + '<br>';
	mensaje+='Cantidad de números negativos es: ' + contadorNegativos + '<br>';
	mensaje+='Cantidad de ceros es: ' + contador + '<br>';
	mensaje+='Promedio de positivos es: ' + (acumuladorPositivos/contadorPositivos) + '<br>';
	mensaje+='Promedio de negativos es: ' + (acumuladorNegativos/contadorNegativos) + '<br>';
	mensaje+='Diferencia de positivos es: ' + (acumuladorPositivos-acumuladorNegativos) + '<br>';
	document.write(mensaje);

}