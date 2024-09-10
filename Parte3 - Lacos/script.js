/*
Nossa loja cresceu e estamos faturando muito dinheiro e tendo lucro, por isso
resolvemos fazer uma promoção bombástica, para os nossos consumidores.

Faça um programa que pergunte a pessoa usuária desde quando ela é nossa
cliente. Além disso, solicite o id , nome do Produto , preço do Produto, quantidade
do Estoque . Você deve perguntar para a pessoa deseja continuar cadastrando, se
ela confirmar que deseja, continue perguntando os dados do produto. Se a pessoa
não confirmar, deve imprimir "Você finalizou os cadastros ".
Além disso, devemos considerar os seguintes itens:
Se a pessoa é nossa cliente a mais de 1 ano, todos os produtos devem ter um
desconto de 10% . "Você tem 10% de desconto nos nossos produtos"; 

Se a pessoa é nossa cliente a mais de 2 anos, todos os produtos devem ter um
desconto de 20% . Imprima essa mensagem para a pessoa : "Você tem 20% de
desconto nos nossos produtos";
Se a pessoa é nossa cliente a mais de 3 anos, todos os produtos devem ter um
desconto de 30% . "Você tem 30% de desconto nos nossos produtos";

Além disso, devemos ter as mesmas confirmações das características do
produtos.
*/

let tempoCliente = parseInt(prompt("Há quanto tempo você é nosso cliente? (Em anos)"))
let desconto

if (tempoCliente >= 3) {
    desconto = 30
    alert("Você tem 30% de desconto nos nossos produtos!")
} else if (tempoCliente >= 2) {
    desconto = 20
    alert("Você tem 20% de desconto nos nossos produtos!")
} else if (tempoCliente >= 1) {
    desconto = 10
    alert("Você tem 10% de desconto nos nossos produtos!")
}

let continuar =  true

while (continuar) {
    let id = parseInt(prompt('Informe o ID do produto (nùmero inteiro):'))

    if (id <= 0) {
        alert('Identificador não encontrado, digite um ID válido!')
        continue
    }
    let nomeDoProduto = prompt('Informe o nome do produto:')

    let precoDoProduto = parseFloat(prompt('Informe o preço do produto (número inteiro e maior quue 20)'))

    if (precoDoProduto < 20) {
        alert('Informe um valor de produto válido.')
        continue
    }

    let estoque = parseInt(prompt('Informe a quantidade do produto em estoque (precisa sem maior que 10 e par)'))

    if (estoque <= 10 || estoque % 2 !== 0) {
        alert('Insira uma quantiadde de produto válida para o estoque.')
        continue
    }

    let precoComDesconto = precoDoProduto - (precoDoProduto * desconto / 100)

    document.write("<h2>Informações cadastradas com sucesso!</h2>")
    document.write(`ID: ${id}<br>`)
    document.write(`Nome do produto: ${nomeDoProduto}.<br>`)
    document.write(`Preço original do produto: ${precoDoProduto.toFixed(2)}.<br>`)
    document.write(`Preço com desconto: ${precoComDesconto.toFixed(2)}.<br>`)
    document.write(`Quantidade no estoque: ${estoque}.<br><br>`)

    confirm = confirm('Deseja continuar cadastrando produtos?')
}

document.write("<h2>Você finalizou os cadastros.</h2>")
