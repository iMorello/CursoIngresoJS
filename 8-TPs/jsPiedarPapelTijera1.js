
var eleccionMaquina;
var contadorGano=0;
var contadorPerdio=0;
var contadorEmpate=0;
var rachaGanadas=0;
var rachaPerdidas=0;
var rachaEmpates=0;
var maximaRachaGanadas=0;
var maximaRachaEmpatadas=0;
var maximaRachaPerdidas=0;

function comenzar()
{
    eleccionMaquina = Math.floor(Math.random()*(4-1)+1);               
}

function piedra()
{
    comenzar();
    switch(eleccionMaquina)
    {
        case 1:
            contadorEmpate++;
            alert('Empate.');
            rachaEmpates++; 
            rachaGanadas=0;
            rachaPerdidas=0;
            if(rachaEmpates>maximaRachaEmpatadas)
            {
                maximaRachaEmpates = rachaEmpates;
            }   
            break;
        case 2:
            contadorPerdio++;
            alert('Usted perdió.');
            rachaPerdidas++;
            rachaGanadas=0;
            rachaEmpates=0;
            if(rachaPerdidas>maximaRachaPerdidas)
            {
                maximaRachaPerdidas = rachaPerdidas;                
            }            
            break;
        case 3:
            contadorGano++;
            alert('Usted ganó.');
            rachaGanadas++;
            rachaEmpates=0;
            rachaPerdidas=0;
            if(rachaGanadas>maximaRachaGanadas)
            {
                maximaRachaGanadas = rachaGanadas;
            } 
            break;
    } 
}

function papel()
{
    comenzar();
    switch(eleccionMaquina)
    {
        case 1:
            contadorGano++;
            alert('Usted ganó.');  
            rachaGanadas++;
            rachaEmpates=0;
            rachaPerdidas=0;
            if(rachaGanadas>maximaRachaGanadas)
            {
                maximaRachaGanadas = rachaGanadas;
            }   
            break;
        case 2:
            contadorEmpate++;
            alert('Empate.');
            rachaEmpates++;
            rachaGanadas=0;
            rachaPerdidas=0;
            if(rachaEmpates>maximaRachaEmpatadas)
            {
                maximaRachaEmpates = rachaEmpates;
            }   
            break;
        case 3:
            contadorPerdio++;
            alert('Usted perdió.');
            rachaPerdidas++;
            rachaGanadas=0;
            rachaEmpates=0;
            if(rachaPerdidas>maximaRachaPerdidas)
            {
                maximaRachaPerdidas = rachaPerdidas;
            } 
            break;
    } 
    
}

function tijera()
{
    comenzar();
    switch(eleccionMaquina)
    {
        case 1:
            contadorPerdio++;
            alert('Usted perdió.');
            rachaPerdidas++;
            rachaGanadas=0;
            rachaEmpates=0;
            if(rachaPerdidas>maximaRachaPerdidas)
            {
                maximaRachaPerdidas = rachaPerdidas;
            }     
            break;
        case 2:
            contadorGano++;
            alert('Usted ganó.');
            rachaGanadas++;
            rachaEmpates=0;
            rachaPerdidas=0;
            if(rachaGanadas>maximaRachaGanadas)
            {
                maximaRachaGanadas = rachaGanadas;
            } 
            break;
        case 3:
            contadorEmpate++;
            alert('Empate.');
            rachaEmpates++;
            rachaGanadas=0;
            rachaPerdidas=0;
            if(rachaEmpates>maximaRachaEmpatadas)
            {
                maximaRachaEmpates = rachaEmpates;
            }  
            break;
    } 
    informar();
}

function informar()
{
    comenzar();
    console.log('Usted ganó ' + contadorGano + ' veces.');
    console.log('Usted empató ' + contadorEmpate + ' veces.');
    console.log('Usted perdió ' + contadorPerdio + ' veces.');
    console.log('Racha de ganadas: ' + rachaGanadas);
    console.log('Racha de empates: ' + rachaEmpates);
    console.log('Racha de perdidas: ' + rachaPerdidas);
    console.log('Máxima racha de ganadas: ' + maximaRachaGanadas);
    console.log('Máxima racha de empates: ' + maximaRachaEmpatadas);
    console.log('Máxima racha de perdidas: ' + maximaRachaPerdidas);   
}
