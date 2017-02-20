function Mostrar()
{
    var sexo;
    sexo = 'h';
    while(sexo!='F' && sexo!= 'M')
    {
        
        sexo = prompt("Ingrese F ó M.");
        if(sexo==null)
        {
            break;
        }
    }
document.getElementById('Sexo').value=sexo;
}