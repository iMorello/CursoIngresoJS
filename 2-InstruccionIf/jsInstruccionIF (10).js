function Mostrar()
{
	var numero;
	numero = parseInt(Math.random()*(10-1))+1;
	if(numero>=4 && numero<=10)
	{
		if(numero>=9)
		{
			alert('Nota:' + ' ' + numero +'.' + ' ' + 'Excelente.');
		}
		else
		{
			alert('Nota:' + ' ' + numero +'.' + ' ' + 'Aprobado.');
		}
	}
	else
	{
		alert('Nota:' + ' ' + numero +'.' + ' ' + 'Vamos, la próxima se puede.');
	}
}