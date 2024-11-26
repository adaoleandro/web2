// Spread Operator

// copiar arrays

const array1 = [2,5 , 6, 10];
const array2 = [1, 2, 6, 8];
const array3 = [...array1, 20, 25, ...array2];


array1.push(20);

console.log(array3);