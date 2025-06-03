/*let number1 = 20;
let number2 = 30;
let som = number1+number2
console.log("A soma é: "+ som)
console.log("---------------------")
let number3 = 50;
let number4 = 20;
let sub = number3-number4
console.log(" a subtrção é: "+ sub)
console.log("---------------------")
let number5 = 25;
let number6 = 3;
let mul = number5*number6
console.log("A multiplicação é; " + mul)
console.log("---------------------")
let number7 = 50;
let number8 = 2;
let div = number7/number8
console.log("A divisão é:"+ div)

let salario = 4500;
let usuario = "Jullia"
let meses = 10
let result = salario/12*meses
console.log("Parabéns "+usuario+" seu décimo é: R$"+ result)
let salario = prompt("Digite o seu salario")
let meses = prompt("coloque seus meses trabalhados")
let result = salario/12*meses
console.log("Parabéns seu 13° é: "+ result)
var salario = prompt("Digite seu salario")
if (salario<500){
15/100*salario+salario
alert(15/100*salario+salario)
}
else if (salario>=500){
10/100*
    console.log("Seu salario recebeu um reajuste de 10%: R$")
}
else {
    console.log("Seu salario recebeu um reajuste de 5%: R$")
}

let idade = prompt("Digite aqui sua idade:")
if (idade<12){
    alert("Assista conteúdo Infantil")
}
else if (idade>=12 && idade<=17){
    alert("Assista conteúdo Teen")
}
else if (idade>=18 && idade<=60){
    alert("Assista conteúdo Adulto")
}
else {
    alert("Assista conteúdo Sênior")
}
let pontuacao = prompt ("Digite sua pontuação:")
if (pontuacao<=1000){
    alert("Seu nível é novato e seu bônus de XP é de: 100XP")
}
else if (pontuacao>=1001 && pontuacao<=5000 ){ 
    alert("Seu nível é aprendiz e seu bônus de XP é de: 500XP")
}
else if (pontuacao>=5001 && pontuacao<=10000){
    alert("Seu nível é expert e seu bônus de XP é de: 1000XP")
} 
 else {
    alert("Parabéns!! Seu nível é master e seu bônus de XP é de: 2000XP")
 }*/
let basico = 25;
let premium = 40;
let ultra = 60;
let telas3a4 = 5;
let telasmaisde4 = 7;
let tipodassinatura = prompt ("Digite o tipo de assinatura que deseja: ")
let telas = prompt("Quantas telas deseja?")






if (tipodassinatura == "básico "){
   if (telas>=1 && telas<=2 ){
    alert("O valor do seu pacote séra de: " + basico+"R$")
   }
   else if (telas>=3 && telas<=4){
     alert("O valor do seu pacote séra de: "+ (basico+telas3a4)+"R$")

   }
   else {

   }
   alert("O valor do seu pacote séra: "+(basico+telasmaisde4)+"R$")
}
else if (tipodassinatura == "premium"){
    if (telas>=1 && telas<=2 ){
    alert("O valor do seu pacote séra de: R$" + premium +)
   }
   else if (telas>=3 && telas<=4){
     alert("O valor do seu pacote séra de: "+ (premium+telas3a4)+"R$")

   }
   else {

   }
   alert("O valor do seu pacote séra: "+(premium+telasmaisde4)+"R$")
}
else