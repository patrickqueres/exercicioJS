// JavaScript 

function roda()
{
	var tam1 = letamanho();
	for(var i=1;i<=tam1;i++){
       //var a='';
       var a=" ";
       document.querySelector("#resultado").innerHTML = document.querySelector("#resultado").innerHTML + "<br>";
       for(var j=1;j<=i;j++){
       	var a=a+' '+i;
       }
       document.querySelector("#resultado").innerHTML = document.querySelector("#resultado").innerHTML + a;
   }
}



function letamanho()
{
	var tamanho = parseFloat(document.querySelector("#valor1").value);
	return tamanho;
}


function limpa()
{
	document.querySelector("#resultado").innerHTML = "";
} 