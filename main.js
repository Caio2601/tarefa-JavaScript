/*Considere este array: let numbers = [1,2,3,4,5,6,7,8,9,10];, com base nele:*/

let numbers = [1,2,3,4,5,6,7,8,9,10];

/*utilize uma função que retorne apenas os números ímpares;*/

const numImpar = numbers.filter((numero) => {return numero % 2 === 1;});

console.log(numImpar)

/*com este resultado em mãos, retorne apenas os números divisíveis por 3*/

const divisiveis = numImpar.filter((number) => {
    return number % 3 === 0;
})

console.log(divisiveis);

/*Considere este array ler words = [‘um’, ‘dois’, ‘tres’, ‘quatro’, ‘cinco’, ’seis’, ‘sete’. ‘oito’, ‘nove’, ‘dez’];, com base nele:
utilize alguma função para gerar um novo array onde os valores do array será o número de letras de cada palavra dentro do array original;
utilize alguma função para gerar um novo array com apenas as palavras que possuem encontros de vogais;
utilize alguma função para reordenar em ordem crescente este array com base no número de letras de cada palavra;*/

let words = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];

let contador = words.map(word => word.length);
console.log(contador)

/*Considere esta variável: let data = ‘2024-01-03 13:10:00’;:*/

let data = '2024-01-03 13:10:00';

/*utilize alguma função para retornar a data formatada da seguinte maneira: 03/01/2023;*/

let dataFormatada = data.split(' ')[0].split('-').reverse().join('/');
console.log(dataFormatada);


/*utilize alguma função para retornar apenas a hora: 13:10;*/


let horario = data.split(' ')[1];
console.log(horario)
