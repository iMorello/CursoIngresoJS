function Mostrar()
{
    var edad;
    edad=document.getElementById('edad').value;
    if(edad>=18||edad<=12)
    {
        alert('Usted NO es adolescente.');
    } 
}