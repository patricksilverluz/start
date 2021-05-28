var nome = "Patrick Ruan";
var cargo= "CTO-GROWDEV";

var nomeHtmal = document.getElementById("nome-no-html");
var cargoHtml = document.getElementById("cargo");
var texto1 = document.getElementById("texto1");
var texto2 = document.getElementById("texto2");


function colocarNomeNoHtml(nome) {
    nomeHtmal.innerHTML = nome;
}
function colocarCargoNoHtml(cargo){
    cargoHtml.innerHTML = cargo;
}
function logarNome() {
    console.log(nome);
}
function clickNoProjetos(){
    console.log ("Clicou no botao projetos");
    texto2.style.display = "block";
    texto1.style.display = "none";
}
function clickNoSobre (){
    console.log ("Clicou no botao spbres");
    texto1.style.display = "block";
    texto2.style.display = "none";
}


colocarNomeNoHtml(nome);
colocarCargoNoHtml(cargo);

