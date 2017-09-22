// JavaScript 

function bissexto()
{
	var year = lerano();
	//alert(year);
	if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
		document.querySelector("#resultado").innerHTML = "O ano " + year + " é bissexto!";

	} else {
		document.querySelector("#resultado").innerHTML = "O ano " + year + " não é bissexto!";
	
	}
}



function lerano()
{
	var ano = parseFloat(document.querySelector("#valor1").value);
	//alert(ano);
	return ano;

	//var resultado = triangulo(num);
	
}