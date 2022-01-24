// Crie um array que receba 5 itens e exiba no console.
let itens = [{
    nome: ["Lucas"],
    idade: 22,
    sexo: "Masculino",
    altura: 1.72,
    eHumano: true
}
]

// Utilize um método para adicionar um nome ao inicio do array.
itens[0].nome.unshift("Raimundo");

// Utilize um método para remover o último nome do array.
itens[0].nome.pop();

// Utilize um método para adicionar dois nomes ao fim do array.
itens[0].nome.push("Thaiz","Jessica")

// Utilize um método para remover o primeiro nome do array.
itens[0].nome.shift()
console.log(itens)

// Utilize um método para organizar em ordem crescente o seguinte array:
// const numbers = [7,5,6,3,8,9,2,1,4]
const numbers = [7,5,6,3,8,9,2,1,4]

numbers.sort()
console.log(numbers)