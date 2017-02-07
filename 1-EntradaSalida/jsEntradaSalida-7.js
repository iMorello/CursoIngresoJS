/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
    var numeroDos;
    var numeroTres;
    numeroUno=document.getElementById('numeroUno').value;
    numeroUno=parseInt(numeroUno);
    numeroDos=document.getElementById('numeroDos').value;
    numeroDos=parseInt(numeroDos);
    numeroTres=parseInt(numeroUno+numeroDos);
    alert('La suma es:' + ' ' +numeroTres);
}

function restar()
{
    var numeroUno;
    var numeroDos;
    var numeroTres;
    numeroUno=document.getElementById('numeroUno').value;
    numeroUno=parseInt(numeroUno);
    numeroDos=document.getElementById('numeroDos').value;
    numeroDos=parseInt(numeroDos);
    numeroTres=parseInt(numeroUno-numeroDos);
    alert('La suma es:' + ' ' +numeroTres);
}

function multiplicar()
{ 
	var numeroUno;
    var numeroDos;
    var numeroTres;
    numeroUno=document.getElementById('numeroUno').value;
    numeroUno=parseInt(numeroUno);
    numeroDos=document.getElementById('numeroDos').value;
    numeroDos=parseInt(numeroDos);
    numeroTres=parseInt(numeroUno*numeroDos);
    alert('La suma es:' + ' ' +numeroTres);
}

function dividir()
{
	var numeroUno;
    var numeroDos;
    var numeroTres;
    numeroUno=document.getElementById('numeroUno').value;
    numeroUno=parseInt(numeroUno);
    numeroDos=document.getElementById('numeroDos').value;
    numeroDos=parseInt(numeroDos);
    numeroTres=parseInt(numeroUno/numeroDos);
    alert('La suma es:' + ' ' +numeroTres);
}

