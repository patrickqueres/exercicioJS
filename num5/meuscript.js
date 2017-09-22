// JavaScript 


function calculeimc(){
	var n1=parseFloat(document.querySelector("#peso").value);
	var n2=parseFloat(document.querySelector("#altura").value);
	
	var imc = n1/(n2*n2);
	
	document.querySelector("#resultado").value=imc;

	if (imc <= 18.5){
		alert("abaixo do peso!");

	} else if (imc >= 18.6 && imc <= 24.9) {
		alert("Peso ideal. Parabens!");
	} else if (imc >= 25 && imc <= 29.9) {
		alert("Levemente acima do peso.");
	} else if (imc >= 30 && imc <= 34.9) {
		alert("Obesidade grau I.");
	} else if (imc >= 35 && imc <= 39.9) {
		alert("Obesidade grau II (severa).");
	} else if (imc >= 40) {
		alert("Obesidade III (mórbida).");
	}

		
}