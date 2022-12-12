/*Faça um algoritmo que leia a idade de vários alunos de uma turma.
O programa vai parar quando for digitada a idade 999. No final,
mostre quantos alunos existem na turma e qual é a média de idade
do grupo.*/

let idade = 0;
let somaIdades = 0;
let numAlunos = 0;

while(idade !== 999){
    let idade = parseInt(prompt("Digite a idade do aluno: \n Quando digitar 999, para a repetição"));
    if(idade == 999){
        break;
    } 
    somaIdades += idade;
    numAlunos++;
}

let mediaAlunos = somaIdades/numAlunos;
document.write( `Exitem ${numAlunos} de alunos na turma.<br> A média de idade é ${mediaAlunos.toFixed(2)}`);
