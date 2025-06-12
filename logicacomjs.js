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
 }
let basico = 25;
let premium = 40;
let ultra = 60;
let telas1a2 = 0;
let telas3a4 = 5;
let telasmaisde4 = 7;
let tipodassinatura = prompt ("Digite o tipo de assinatura que deseja: ")
let telas = prompt("Quantas telas deseja?")
if (tipodassinatura == "básico "){
   if (telas>=1 && telas<=2 ){
    alert("O valor do seu pacote séra de: R$" +(basico+telas1a2) )
   }
   else if (telas>=3 && telas<=4){
     alert("O valor do seu pacote séra de: R$"+ (basico+telas3a4))

   }
   else {
alert("O valor do seu pacote séra: R$"+(basico+telasmaisde4))
}
   }
   

else if (tipodassinatura == "premium"){
    if (telas>=1 && telas<=2 ){
    alert("O valor do seu pacote séra de: R$" +(premium+telas1a2)  )
   }
   else if (telas>=3 && telas<=4){
     alert("O valor do seu pacote séra de: R$"+ (premium+telas3a4))

   }
   else {
alert("O valor do seu pacote séra de: R$ "+(premium+telasmaisde4))
   }
   
}
else{
     if (telas>=1 && telas<=2 ){
    alert("O valor do seu pacote séra de: R$ " + (ultra+telas1a2))
   }
   else if (telas>=3 && telas<=4){
     alert("O valor do seu pacote séra de: R$"+ (ultra+telas3a4))

   }
   else {
 alert("O valor do seu pacote séra: R$"+(ultra+telasmaisde4) )
   }
   }
  let daysOfWeek = ["Caio","Samuel"];
  console.log(daysOfWeek[1])
  console.log(daysOfWeek.length)
  let listdiver = ["Caio",1,2.5,"Escola",false]
  console.log(listdiver[3])
   let nomedoaluno = prompt("Digite o nome do novo aluno: ")
   daysOfWeek.push(nomedoaluno) // anoação: push adiciona por ultimo 
   console.log(daysOfWeek)

   let daysOfWeek = ["Caio","Samuel"];
  console.log(daysOfWeek[1])
  console.log(daysOfWeek.length)
  let listdiver = ["Caio",1,2.5,"Escola",false]
  console.log(listdiver[3])
   let nomedoaluno = prompt("Digite o nome do novo aluno: ")
  daysOfWeek.unshift("caique", "lyann", "clara") // se colocar "" em cada vai sair so o ultimo (se colocar sem vai sair todos)
   daysOfWeek.push(nomedoaluno) // unshift adiciona em primeiro lugar
   daysOfWeek.unshift("Richard")
 daysOfWeek.shift() // pop tira o ultimo e shift tira o primeiro
   console.log(daysOfWeek)

   let daysOfWeek = ["Caio","Samuel"];
  console.log(daysOfWeek[1])
  console.log(daysOfWeek.length)
  let listdiver = ["Caio",1,2.5,"Escola",false]
  console.log(listdiver[3])
   let nomedoaluno = prompt("Digite o nome do novo aluno: ")
  daysOfWeek.unshift("caique", "lyann", "clara") 
   daysOfWeek.push(nomedoaluno) 
   daysOfWeek.unshift("Richard")
 daysOfWeek.sort() // bota em ordem alfabetica ou numerica
 daysOfWeek.reverse()  // reverte os lugares
 console.log("Os alunos são: "+daysOfWeek)
   console.log(daysOfWeek.indexOf("Samuel"))

   const alunos = ["Ana","Bruno","Carlos","Diana"];
   for (const aluno  of alunos){
    console.log("Olá, "+ aluno+"!");
   }
 let number = Number(prompt("Digite o número que deseja somar aos anteriores: "))
 let numberfinal =0
 while (number != 0){
 number = Number(prompt("Digite o número que deseja somar aos anteriores: "))
     numberfinal = numberfinal+number

}
  console.log("O número final é: "+numberfinal)

  var array = [1,2,,3,4,5,6,7,8,9,10,11]
  for(let i = 1; i <=10; i++){ 
 console.log(i);
  }
 
 function saudar (){
alert("Seja bem-vindo ao sistema")

 }
saudar()

function dobrarNumero(numero){
  return numero * 2;
}
let resultado =dobrarNumero(20);
 alert("O resultado é: " + resultado)

 function comprimentar(nome){
  alert("Oi, "+ nome +" tenha um excelente dia!")
 }
 
 comprimentar("Davy")

 function contagemregressiva(numero){
alert(numero)
if(numero ===0){
  alert("Chegou")
}
contagemregressiva(numero-1)
 }
 contagemregressiva(5);*/

 