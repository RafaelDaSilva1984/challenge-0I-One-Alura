// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"


function capturarTextoInput() {
    // Capturar o texto do input
    let textoInputCapturado = document.querySelector('.conteudo__apresentacao__input').value;    
    // Substituir as vogais de acordo com as regras de criptografia
    let textoCriptografado = substituirVogais(textoInputCapturado);
    // Exibir o texto criptografado
    document.querySelector('.conteudo__apresentacao__texto__retorno').innerHTML = textoCriptografado;
    // Selecione o elemento pelo seu seletor
    var elemento = document.querySelector('.conteudo__apresentacao__texto__retorno');
    // Defina uma nova imagem de fundo
    elemento.style.backgroundImage = 'none';
    elemento.style.font_size = '132px';    
    limparCampo()
}
function substituirVogais(texto) {
    // Substituir "e" por "enter"
    texto = texto.replace(/e/g, "enter");
    // Substituir "i" por "imes"
    texto = texto.replace(/i/g, "imes");
    // Substituir "a" por "ai"
    texto = texto.replace(/a/g, "ai");
    // Substituir "o" por "ober"
    texto = texto.replace(/o/g, "ober");
    // Substituir "u" por "ufat"
    texto = texto.replace(/u/g, "ufat");
    return texto;
}

function capturarTextoRetorno(){
        let textoRetornoCapturado = document.querySelector('.conteudo__apresentacao__input').value;    
    let textoDescriptografado = substituirCriptografia(textoRetornoCapturado);
    document.querySelector('.conteudo__apresentacao__texto__retorno').innerHTML = textoDescriptografado;  
    
    limparCampo()
// 
}

function substituirCriptografia(textoSeguro){
    // Substituir "enter"  por "e"
    textoSeguro = textoSeguro.replace(/enter/g,"e");
    // Substituir "imes"  por "i"
    textoSeguro = textoSeguro.replace(/imes/g,"i");
    // Substituir "ai"  por "a"
    textoSeguro = textoSeguro.replace(/ai/g,"a");
    // Substituir "ober"  por "o"
    textoSeguro = textoSeguro.replace(/ober/g,"o");
    // Substituir "ufat"  por "u"
    textoSeguro = textoSeguro.replace([/ufat/g,"u"]);
    
    return textoSeguro;
    

}

function copiarTexto() {
    // Selecionar o elemento que contém o texto
    let elementoParaCopiar = document.querySelector('.conteudo__apresentacao__texto__retorno');
     limparCampo()
     
    // Criar um novo ClipboardItem com o conteúdo do elemento
    const item = new ClipboardItem({ "text/plain": new Blob([elementoParaCopiar.textContent], { type: "text/plain" }) });

    // Copiar o item para a área de transferência
    navigator.clipboard.write([item])
        .then(() => {
            // Callback de sucesso (opcional)
            alert('Texto copiado para a área de transferência!');
            
        })
        .catch((err) => {
            // Callback de erro (opcional)
            console.error('Erro ao copiar texto: ', err);
        });  
     
        
}

function limparCampo(){
    // textoRetornoCapturado = document.querySelector('.conteudo__apresentacao__descriptografar');
    // textoRetornoCapturado.value = '';    
    textoInputCapturado = document.querySelector('.conteudo__apresentacao__input');
    textoInputCapturado.value = '';
    
};

// Recarrega a página
function reiniciar() {
    location.reload();
}
// Chamada da função quando necessário
// recarregarPagina();

function rodape(){
    let textoRodape = document.querySelector('.rodape');
    textoRodape.innerHTML=" &copy; Desenvolvido &rarr; RafaelDaSilva1984  &reg;"
    textoRodape.style.textAlign='center';
    textoRodape.style.alignItems='baseline';
    textoRodape.style.fontSize='32px';
    textoRodape.style.color='#FFF';
    textoRodape.style.text_shadow = "1px 1px 1px  rgb(234, 112, 91)";
    textoRodape.style.backgroundColor = '#0A3871';
    textoRodape.style.padding = '32px';
}
rodape()

