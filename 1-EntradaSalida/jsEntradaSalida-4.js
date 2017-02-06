/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	var edad;
	edad=prompt('Ingrese su Edad');
    document.getElementById('elNombre').value=edad;
}

