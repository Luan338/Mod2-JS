//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18
let idade = 22;

if(idade >= 18){
    console.log(`Você é maior de idade e tem ${idade} anos`);
}

//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade
// E a condição humana seja true
let eHumano = true;
if(idade >= 18 && eHumano){
    console.log(`Você é um humano maior de idade.`)
}

//3 - Criar uma condição que exiba uma mensagem no console se você fizer
// aniversário em Janeiro OU Dezembro
let aniversario = "Janeiro";
if(aniversario == "Janeiro" || aniversario == "Dezembro"){
    console.log(`Você faz aniversário em ${aniversario}, logo, é Capricorniano !`);
}

//EXERCÍCIO BONUS
//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R
let nomeUm = "Luan";

if(nomeUm[0] == "R"){
    console.log(`Seu nome é ${nomeUm}.`)
}else{
    console.log(`Seu nome é ${nomeUm} e não começa com a letra R`);
}

//Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha 
//mais de 6 letras OU seu nome começar com a letra E
let sobrenome = "Eric";

if(sobrenome.length > 6 || nomeUm[0] == "E"){
    console.log(`Meu sobrenome é ${sobrenome}`);
}else{
    console.log("Ops");
}