/*
Estamos desenvolvendo o maior E-commerce da América Latina. Para isso,
estamos desenvolvendo um sistema que cadastra nossos produtos e serviços ,
onde devemos solicitar a pessoa que está cadastrando os produtos , as seguintes
informações :

- Id (identificador único) - Número inteiro;
- Nome do Produto ;
- Preço do Produto (não pode ser negativo e nem menor que 20 reais) ;
- Quantidade em Estoque (deve ser maior que 10 e par) ;

Crie um programa que solicite a pessoa usuária cada uma das informações
individualmente. 

Caso a pessoa usuária não passe as informações, retorne as seguintes
mensagens em tela :

- ID => " Identificador não encontrado, passe um número válido "
- Nome do Produto => "Insira um nome de produto válido "
- Preço do Produto => "Insira um preço de produto válido "
- Quantidade em Estoque => "Insira uma quantidade de produto válida para o
estoque"

Após verificar cada um dos itens e ter certeza que todos foram preenchidos,
precisamos verificar o valor do produto para conseguir determinar em qual
categoria vai.
Se o valor do produto for par, devemos encaminhar o produto para a lista de
promoção especial e mostrar na tela a seguinte informação :
" O produto NOME_DO_PRODUTO foi cadastrado com sucesso! Produto adicionado
na nossa lista de promoções especiais "
*/

let id;
let nomeDoProduto;
let precoDoProduto;
let estoque;


id = parseInt(prompt("Informe o ID (número inteiro):"));

if (id <= 0) {
    alert("Identificador não encontrado, digite um ID válido!");
} else {
    nomeDoProduto = prompt("Informe o nome do produto:");

    precoDoProduto = parseFloat(prompt("Informe o preço do produto (número real e maior que 20,00):"));

    if (precoDoProduto < 20) {
        alert("Informe um valor de produto válido.");
    } else {
        estoque = parseInt(prompt("Informe a quantidade do produto em estoque (precisa ser maior que 10 e par):"));

        if (estoque <= 10 || estoque % 2 !== 0) {
            alert("Insira uma quantidade de produto válida para o estoque.");
        } else {
            document.write("<h2>Informações cadastradas com sucesso!</h2>");
            document.write(`ID: ${id}<br>`);
            document.write(`Nome do produto: ${nomeDoProduto}.<br>`);
            document.write(`Preço do produto: ${precoDoProduto.toFixed(2)}.<br>`);
            document.write(`Quantidade no estoque: ${estoque}.`);
        }
    }
}

