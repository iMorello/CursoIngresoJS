/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
    var numeroUno;
    var numeroDos;
    var numeroTres;
    numeroUno=document.getElementById('numeroUno').value;
    numeroUno=parseInt(numeroUno);
    numeroDos=document.getElementById('numeroDos').value;
    numeroDos=parseInt(numeroDos);
    numeroTres=numeroUno+numeroDos;
    alert('El resultado es:'+' '+numeroTres);

}

