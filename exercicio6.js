/*Faça um programa que leia a largura e o comprimento de um
terreno retangular, calculando e mostrando a sua área em m2. O
programa também deve mostrar a classificação desse terreno, de
acordo com a lista abaixo:
Abaixo de 100m2 = TERRENO POPULAR
Entre 100m2 e 500m2 = TERRENO MASTER
Acima de 500m2 = TERRENO VIP*/

let largura = Number.parseFloat(prompt("Digite a largura: "));
let comprimento = Number.parseFloat(prompt("Digite o comprimento: "));

let area = largura * comprimento;

if(area < 100){
    alert("TERRENO POPULAR.");
} else if (area >=100 && area <= 500){
    alert("TERRENO MASTER.")
} else if (area > 500){
    alert("TERRENO VIP")
}

