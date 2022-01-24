//1 - Criar um loop que conte de 1 até 10 usando FOR
for(let i = 1; i <= 10; i++){
    console.log(i)
}

//2 - Criar um loop que conte de 10 até 1 usando WHILE

let cont = 10;

do{
    console.log(cont)
    cont--;
}while(cont >= 1)

//3 - Criar um loop que conte todos os números ímpares de 1 até 100

for(let impar = 1 ; impar <= 100 ; impar++){
    if(impar % 2 === 1){
        console.log(`Números ímpares: ${impar}`);
    }
 }

//4- Criar um loop que conte todos os números pares de 0 a 100
for(let par = 0 ; par <= 100 ; par ++){
    if(par % 2 === 0){
        console.log(`Numéros pares: ${par}`);
    }
}