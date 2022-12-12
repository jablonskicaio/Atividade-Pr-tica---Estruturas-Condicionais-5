/*Faça um algoritmo que pergunte a distância que um passageiro
deseja percorrer em Km. Calcule o preço da passagem, cobrando
R$0.50 por Km para viagens até 200Km e R$0.45 para viagens mais
longas.*/

let distancia = parseInt(prompt("Quantos km tem a sua viagem? "));
let passagem = 0;

if(distancia <= 200){
    passagem = distancia * 0.50;
    alert(`Sua passagem custa R$${passagem}.`);
} else {
    passagem = distancia * 0.45;
    alert(`Sua passagem custa R$${passagem}.`);
}

