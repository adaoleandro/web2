 const numeros = [5, 7, 20, 14, 8 ];

// // filter () - filtra elementos que atendem a uma condicao

const impares = numeros.filter(num => num % 2 !== 0 );
const maiores = numeros.filter(num => num > 5 );


// reduce ()  - um conjunto de valores em um unico valor
const soma = numeros.reduce(( acumulador, num )=> acumulador += num, 0);


//map () - percorrer todos os elementos, realizando algum processamento e retorna um novo array(modificado)

const dobro = numeros.map( num => num *2 );



// function ehprimo(num){
//     return num % 2 !== 0;
// }

console.log(impares);
console.log(maiores);
console.log(soma);
console.log(dobro);
