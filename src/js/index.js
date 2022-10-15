/*
    Objetivo = ocultar uma aba quando a outra for clicada

*/
const abas = document.querySelectorAll(".aba");
console.log(abas);

abas.forEach((aba => {
    aba.addEventListener("click", function(){
    
    
        if(aba.classList.contains("selecionada")){
         return;
        }
        selecionaABA(aba);
        mostrarInformacoesAba(aba);
        
    })

}))
function selecionaABA(aba){
    console.log("clicou na aba", aba);
    const abaSelecionada = document.querySelector(".aba.selecionada");
    abaSelecionada.classList.remove("selecionada");

    aba.classList.add("selecionada");

}
function mostrarInformacoesAba(aba){
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");

    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`
    console.log(idDoElementoDeInformacoesDaAba)

    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
    informacaoASerMostrada.classList.add("selecionado")
}