// JavaScript 

function factorial(numero)
{
	
	
	if (numero < 0) {
		return -1;
	}
    
    else if (numero == 0) {
    	return 1;
    }
    
    else {
    	return (numero * factorial(numero - 1));
    }
    
    

}


function roda()
{
	var num=parseFloat(document.querySelector("#valor1").value);
	var resultado = factorial(num);
	// alert(resultado);

	document.querySelector("#resultado").value=resultado;

}