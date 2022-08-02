// Buscar o elemento do botão
const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');

// Buscar todos os cartões
const cartoes = document.querySelectorAll('.cartao');

// Criar variavel pra incrementar e encontrar o proximo cartão
var cartaoAtual = 0;

// Função de buscar o primeiro elemento selecionado e remover
function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}

// Função de mostrar o cartão selecionado
function mostrarCartaoSelecionado(indiceCartao){
    cartoes[indiceCartao].classList.add('selecionado');
}


btnAvancar.addEventListener('click', function(){
    if(cartaoAtual === 2){
        cartaoAtual = 0;
        cartaoAtual--;
    }
    esconderCartaoSelecionado();

    cartaoAtual++;
    mostrarCartaoSelecionado(cartaoAtual);
})

btnVoltar.addEventListener('click', function(){
    if(cartaoAtual === 0){
        cartaoAtual+= 3
    }

    esconderCartaoSelecionado();

    cartaoAtual--;
    mostrarCartaoSelecionado(cartaoAtual);
})