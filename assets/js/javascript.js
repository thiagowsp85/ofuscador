//Para não haver envio de formulário

const btn = document.querySelector("#send");

btn.addEventListener("click", function(e) {

    e.preventDefault();

});
const btn2 = document.querySelector("#back");

btn2.addEventListener("click", function(b) {

    b.preventDefault();
});
//FIM

//Para captar o texto e jogar no quadro de baixo já ofuscando
var captar = "";

function chamar() {
    captar = document.getElementById('quadro1').value;

    captar = captar.replaceAll("e", "enter");
    captar = captar.replaceAll("i", "inis");
    captar = captar.replaceAll("o", "omber");
    captar = captar.replaceAll("u", "uffer");
    captar = captar.replaceAll("a", "ais");

    document.getElementById('quadro2').innerHTML = captar;
}
//FIM

//Corrigindo o texto ofuscado
var captar = "";

function voltar() {
    captar = document.getElementById('quadro1').value;

    captar = captar.replaceAll("enter", "e");
    captar = captar.replaceAll("inis", "i");
    captar = captar.replaceAll("omber", "o");
    captar = captar.replaceAll("uffer", "u");
    captar = captar.replaceAll("ais", "a");

    document.getElementById('quadro2').innerHTML = captar;

}
//FIM