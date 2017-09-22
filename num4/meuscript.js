// JavaScript 

function mudaImagem(i) {    

    // alert(i);

    switch (i){
        case 1:
        document.querySelector("#imagem1").src="images/alegre.gif";
        //document.querySelector("#resultado").value="ESSA FERA AÍ MEU!";
        //document.getElementById('lbltipAddedComment').innerHTML = 'your tip has been submitted!';
        document.querySelector("#resultado").innerHTML = "OW LOUCO, " + qualnome() +  "! ESSA FERA AÍ MEU!";
        break;
        
        case 2:
        document.querySelector("#imagem1").src="images/deboas.jpg";
        document.querySelector("#resultado").innerHTML = "aeeeee " + qualnome() +  ".. só de boas hoje!";
        break;
        
        case 3:
        document.querySelector("#imagem1").src="images/entediado.jpg";
        document.querySelector("#resultado").innerHTML = "ei, " + qualnome() +  "! tá um porre isso aqui hoje!";
        break;

        case 4:
        document.querySelector("#imagem1").src="images/impressionado.jpg";
        document.querySelector("#resultado").innerHTML = "OW LOUCO, " + qualnome() +  "! O QUE ESTÁ ACONTECENDO, BICHO!";
        break;

        case 5:
        document.querySelector("#imagem1").src="images/triste.jpg";
        document.querySelector("#resultado").innerHTML = "Está triste, " + qualnome() +  "?? Está tendo que programar em JAVA??";
        break;

        case 6:
        document.querySelector("#imagem1").src="images/loco.gif";
        document.querySelector("#resultado").innerHTML = "OW LOUCO!!" + " TA PEGANDO FOGO BICHO!! " + qualnome() + ", chama o bombeiro!" ;
        break;

        case 7:
        document.querySelector("#imagem1").src="images/gado.gif";
        document.querySelector("#resultado").innerHTML = "OW LOUCO, " + qualnome() +  "! Só canseira hoje!";
        break;
        
    }

}


function qualnome(){

    var nome = document.querySelector("#nome").value;
    //var nome = prompt("Qual o seu nome?");
    return nome;
}

function teste(){

    var nnn = qualnome();
    alert(nome);

}