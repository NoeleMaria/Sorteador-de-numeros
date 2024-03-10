function sortear() {
    let qntdNumeros = parseInt(document.getElementById('quantidade').value);
    let numeroInicial = parseInt(document.getElementById('de').value);
    let numeroFinal = parseInt(document.getElementById('ate').value);

    let listaSorteados = [];
    let numerosSorteados;
    
    let diferençaEntreNumeros = numeroFinal - numeroInicial;

    if(diferençaEntreNumeros <= qntdNumeros) {
        alert('Atenção! Para o sorteio funcionar corretamente, O campo "Quantidade de números" deve ser menor que a diferença entre os campos "Do número" e "Até o número"! Verifique!')
    }

    if (numeroInicial >= numeroFinal) {
        alert('Atenção! O campo "Do número" não deve ser maior que o campo "Até o número" Verifique!');
        return;
      }

    for (let i = 0; i < qntdNumeros; i++) {
        numerosSorteados = obterNumeroAleatorio(numeroInicial, numeroFinal);

        while(listaSorteados.includes(numerosSorteados)) {
            numerosSorteados = obterNumeroAleatorio (numeroInicial, numeroFinal);
            // alert('Tentando obter número inédito');
        }
        listaSorteados.push(numerosSorteados);
    }

    let textoResultado = document.getElementById('resultado');
    let resultado = listaSorteados.join(', ');
    textoResultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${resultado}.</label>`;

    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (min - max + 1) + max);
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
    
    alterarStatusBotao();
}

function alterarStatusBotao() {
    let statusReiniciar = document.getElementById('btn-reiniciar');

    if(statusReiniciar.classList.contains('container__botao-desabilitado')) {
        statusReiniciar.classList.remove('container__botao-desabilitado');
        statusReiniciar.classList.add('container__botao');
    } else {
        statusReiniciar.classList.add('container__botao-desabilitado');
        statusReiniciar.classList.remove('container__botao');
    }
}