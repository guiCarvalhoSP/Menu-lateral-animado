const lista =  document.querySelectorAll('.lista');

function alteraIndicador(){
    lista.forEach((item) =>
        item.classList.remove('ativo'));
    this.classList.add('ativo')
}

lista.forEach((item) => 
    item.addEventListener('click', alteraIndicador));

function alteraConteudo(conteudo){
    escondeConteudo();

    switch(conteudo){
        case 'home':
            document.getElementById('home').classList.add('ativo');
            break;
        case 'perfil':
            document.getElementById('perfil').classList.add('ativo');
            break;

        case 'mensagens':
            document.getElementById('mensagens').classList.add('ativo');
            break;

        case 'fotos':
            document.getElementById('fotos').classList.add('ativo');
            break;

        case 'configuracoes':
            document.getElementById('configuracoes').classList.add('ativo');
            break;

        default: 
            document.getElementById('home').classList.add('ativo');
        }


}

function escondeConteudo(){
    document.querySelectorAll('.conteudo').forEach((item) => item.classList.remove('ativo'));
}