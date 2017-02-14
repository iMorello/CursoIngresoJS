function Mostrar()
{
    var sexo;
    sexo = prompt("Ingrese F ó M.");
    while(sexo!='F' && sexo!= 'M')
    {
        alert('Ingrese F ó M.');
        sexo = prompt("Ingrese F ó M.");
    }
document.getElementById('Sexo').value=sexo;
}