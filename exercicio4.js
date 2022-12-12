/*Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar
descontos para todos, mas especialmente para mulheres. Faça um
programa que leia nome, sexo e o valor das compras do cliente e
calcule o preço com desconto. Sabendo que:
a. Homens ganham 5% de desconto
b. Mulheres ganham 13% de desconto*/

let nome = prompt("Digite seu nome : ");
let sexo = prompt("Digite o sexo: M - Masculino \n F - feminino");
let compras = parseInt(prompt("Digite o valor das suas compras: "));

if(sexo == "M" || sexo == "m"){
    compras -= (compras* 0.05);
    document.write(`${nome} e você pagará o total de ${compras}`);
} else if (sexo == "F" || sexo == "f"){
    compras -= (compras * 0.13);
    document.write(`${nome} você pagará o total de ${compras}`);
} else {
    document.write("Sexo inválido!")
}