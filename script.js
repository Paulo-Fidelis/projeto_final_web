function carregarSaudacao() {
    const hora = new Date().getHours();
    const elementoSaudacao = document.getElementById("saudacao");
    
    let textoSaudacao = "Bem-vindo à Daonde Tech";

    if (hora >= 5 && hora < 12) {
        textoSaudacao = "Bom dia! Bem-vindo à Daonde Tech";
    } else if (hora >= 12 && hora < 18) {
        textoSaudacao = "Boa tarde! Bem-vindo à Daonde Tech";
    } else {
        textoSaudacao = "Boa noite! Bem-vindo à Daonde Tech";
    }

    if (elementoSaudacao) {
        elementoSaudacao.textContent = textoSaudacao;
    }
}

window.onload = carregarSaudacao;

function enviarWhatsApp(){

    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem").value;

    if(nome.trim() === ""){
        alert("por favor preencha o nome")
        return;
    }

    const textoFormatado = encodeURIComponent(`Olá, meu nome é ${nome}. ${mensagem}`);

    const telefone_loja = "558192219415";

    const linkWhatsApp = `https://wa.me/${telefone_loja}?text=${textoFormatado}`;
    window.open(linkWhatsApp, '_blank');

}

