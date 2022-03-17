/* Função para filtro do menu superior acaba na linha 79*/

document.getElementById("header_botoes_todos").addEventListener('click', botaoTodos)

function botaoTodos () {
    document.getElementById("tag_acessorio1").className = "show"
    document.getElementById("tag_acessorio2").className = "show"
    document.getElementById("tag_acessorio3").className = "show"
    document.getElementById("tag_calcado1").className = "show"
    document.getElementById("tag_calcado2").className = "show"
    document.getElementById("tag_camiseta1").className = "show"
    document.getElementById("tag_camiseta2").className = "show"
    document.getElementById("tag_jaqueta1").className = "show"
    document.getElementById("tag_jaqueta2").className = "show"
}

document.getElementById('header_botoes_acessorios').addEventListener('click', botaoAcessorios)

function botaoAcessorios () {
    document.getElementById("tag_acessorio1").className = "show"
    document.getElementById("tag_acessorio2").className = "show"
    document.getElementById("tag_acessorio3").className = "show"
    document.getElementById("tag_calcado1").className = "hide"
    document.getElementById("tag_calcado2").className = "hide"
    document.getElementById("tag_camiseta1").className = "hide"
    document.getElementById("tag_camiseta2").className = "hide"
    document.getElementById("tag_jaqueta1").className = "hide"
    document.getElementById("tag_jaqueta2").className = "hide"
}

document.getElementById('header_botoes_calcados').addEventListener('click', botaoCalcados)

function botaoCalcados () {
    document.getElementById("tag_acessorio1").className = "hide"
    document.getElementById("tag_acessorio2").className = "hide"
    document.getElementById("tag_acessorio3").className = "hide"
    document.getElementById("tag_calcado1").className = "show"
    document.getElementById("tag_calcado2").className = "show"
    document.getElementById("tag_camiseta1").className = "hide"
    document.getElementById("tag_camiseta2").className = "hide"
    document.getElementById("tag_jaqueta1").className = "hide"
    document.getElementById("tag_jaqueta2").className = "hide"
}

document.getElementById('header_botoes_camisetas').addEventListener('click', botaoCamisetas)

function botaoCamisetas () {
    document.getElementById("tag_acessorio1").className = "hide"
    document.getElementById("tag_acessorio2").className = "hide"
    document.getElementById("tag_acessorio3").className = "hide"
    document.getElementById("tag_calcado1").className = "hide"
    document.getElementById("tag_calcado2").className = "hide"
    document.getElementById("tag_camiseta1").className = "show"
    document.getElementById("tag_camiseta2").className = "show"
    document.getElementById("tag_jaqueta1").className = "hide"
    document.getElementById("tag_jaqueta2").className = "hide"
}

document.getElementById('header_botoes_jaquetas').addEventListener('click', botaoJaquetas)

function botaoJaquetas () {
    document.getElementById("tag_acessorio1").className = "hide"
    document.getElementById("tag_acessorio2").className = "hide"
    document.getElementById("tag_acessorio3").className = "hide"
    document.getElementById("tag_calcado1").className = "hide"
    document.getElementById("tag_calcado2").className = "hide"
    document.getElementById("tag_camiseta1").className = "hide"
    document.getElementById("tag_camiseta2").className = "hide"
    document.getElementById("tag_jaqueta1").className = "show"
    document.getElementById("tag_jaqueta2").className = "show"
}

/* Função para carrinho de compras*/

let quantidadeItens = 0

document.getElementById('adicionar_tag_jaqueta1').addEventListener('click', carrinho)

function carrinho () {
    quantidadeItens +=1
    console.log (quantidadeItens)
    contador()
}
function contador () {
    if (quantidadeItens == 0) {
        document.getElementById('carrinho_box_vazio').classList = 'carrinho_box_vazio_show'
        document.getElementById('carrinho_box').classList = "carrinho_box_hide"
    }

    if (quantidadeItens > 0) {
        document.getElementById('carrinho_box_vazio').classList = 'carrinho_box_vazio_hide'
        document.getElementById('carrinho_box').classList = "carrinho_box_show"
    }
}
