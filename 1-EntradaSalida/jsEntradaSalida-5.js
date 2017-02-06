/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{	
    var nombre edad mensaje;
    nombre=document.getElementById('elNombre').value;
    edad=document.getElementById('laEdad').value;
    mensaje=('Usted se llama'+nombre+'y tiene'+edad+'años');
    alert('mensaje');
}

