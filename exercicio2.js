/*2. Desenvolva um aplicativo que leia o salário e o sexo de vários
funcionários. No final, mostre o total de salários pagos aos homens e
o total pago às mulheres. O programa vai perguntar ao usuário se
ele quer continuar ou não sempre que ler os dados de um
funcionário.*/

let totalHomens = 0;
let totalMulheres = 0;

let continuar = "sim";

while(continuar == 'sim'){
    let sexo = prompt("Digite o sexo, feminino ou masculino.");
    if(sexo == "feminino"){
        let salario = parseFloat(prompt("Digite o salário pago: "));
        totalMulheres += salario;
    } else if (sexo == "masculino") { 
        let salario = parseFloat(prompt("Digite o salário pago: "));
        totalHomens += salario;
    } else {
        alert("Opção inválida!");
    }
    continuar = prompt("Deseja continuar? \n SIM ou NÃO");
}

document.write(`Salário total de homens foi ${totalHomens}.<br> Salário total de mulheres foi ${totalMulheres}.`)
