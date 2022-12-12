/*Crie um algoritmo que leia o valor inicial da contagem, o valor nfial e
o incremento, mostrando em seguida todos os valores no intervalo:
Ex:
Digite o primeiro Valor: 3
Digite o último Valor: 10
Digite o incremento: 2
Contagem: 3 5 7 9 Acabou!*/

let inicial = parseInt(prompt("Digite o valor inicial: "));
let final = parseInt(prompt("Digite o valor final: "));
let incremento = parseInt(prompt("Digite o incremento. ex:3 = 3, 6, 9"))

for(i = inicial; i <= final; i += incremento){
    document.write(`${i} <br>`)
}
document.write("Acabou!");