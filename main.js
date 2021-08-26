let campo = $("#campo-digitacao");

let tempoRestante = $("#tempo-execucao").text();
campo.one("focus", function () {
    let cronometro = setInterval(function(){
        tempoRestante--;
        $("#tempo-execucao").text(tempoRestante);
        
        if (tempoRestante < 1) {
            campo.attr("disabled", true);
            clearInterval(cronometro);
        }
    }, 1000);
    ;
});

campo.on("input", function () {
    let conteudo = campo.val();
    let quantidadePalavras = conteudo.split(/\S+/).length - 1;
    let quantidadeCaracteres = conteudo.length;

    $("#quantidade-palavras").text(quantidadePalavras);
    $("#quantidade-caracteres").text(quantidadeCaracteres);

});