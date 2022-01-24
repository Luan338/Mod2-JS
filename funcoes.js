//1 - crie uma função que exiba uma mensagem no console
function mensagem(){
    console.log("oi");
}
mensagem();

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function name(nome){
    console.log(`${nome}`)
}
name("Luan");

//3 - crie uma função que receba seu nome, idade, e estilo musical preferido (parâmetros)
// e exiba no console
function sobre(nomeNovo, idade, estiloMusical){
    console.log(`${nomeNovo}, ${idade}, ${estiloMusical}`)
}
sobre("Eric", 22, "RAP");

//4 - crie uma função que receba o seu filme favorito, musica favorita (parâmetros)
// e exiba no console
function gostos(filme, musica){
    console.log(`${filme}, ${musica}`)
}
gostos("Algum", "Algum");

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função
function triple(num){
    return num * 3;
}
console.log(triple(2));