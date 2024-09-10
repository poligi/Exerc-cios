/*
Uma pizzaria oferece três tamanhos de pizza:
Pequena: R$20,00
Média: R$30,00
Grande: R$40,00

Se o cliente pedir uma pizza pequena e refrigerante, o total será R$25,00..
Escreva um programa que leia o tamanho da pizza (pequena, média ou grande) e
a resposta do cliente sobre o refrigerante (sim ou não). O programa deve imprimir
o valor total a ser pago pelo cliente. 
*/

let pizza = prompt('Qual o tamanho da sua pizza? (Apenas P, M ou G)')
let refrigerante = prompt('Vai um refri? (S para "Sim" ou N para "Não")')

switch (pizza) {
    case 'P': 
        if (refrigerante === 'S'){
            alert(`Sua pizza ficou no total de 25,00`)
        } else {
            alert(`Sua pizza ficou no total de 20,00`)
        }
        break
    case 'M': 
        if (refrigerante === 'S') {
            alert(`Sua pizza ficou no total de 35,00`)
        } else {
            alert(`Sua pizza ficou no total de 30,00`)
        }
        break
    case 'G':
        if (refrigerante === 'S') {
            alert(`Sua pizza ficou no total de 45,00`)
        } else {
            alert(`Sua pizza ficou no total de 40,00`)
        } 
        break
    default:
        alert('Você digitou alguma informação inválida!')
} 