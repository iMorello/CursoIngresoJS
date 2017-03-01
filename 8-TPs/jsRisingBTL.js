/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
    var edad;
    var sexo;
    var estadoCivil;
    var sueldo;
    var legajo;
    var nacionalidad;
    edad = prompt('Ingrese su edad.');
    while(edad<18 || edad>90)
    {
        edad = prompt('Ingrese su edad. Debe tener entre 18 y 90 años.');
    } 
    sexo = prompt('Ingrese su sexo');
    while(sexo!='F' || sexo!='M')
    {
        sexo = prompt('Ingrese si su sexo es masculino o femenino');
    } 
    estadoCivil = prompt('Ingrese su Estado Civil.');
    switch(estadoCivil)
    {
        case 1: 
        case 2:
        case 3:
        case 4: 
    }
    sueldo = prompt('Ingrese su sueldo.');
    legajo = prompt('Ingrese su número de legajo.');
    nacionalidad = prompt('Ingrese su nacionalidad.');
    switch(nacionalidad)
    {
        case A:
        case E:
        case N:
    }
    

}
