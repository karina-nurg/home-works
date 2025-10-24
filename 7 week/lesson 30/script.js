// Задание 1: Математические операции с переменными
let a = 10;
let b = 5;
let c = 2;

let sum = a + b + c; // Операция сложения чисел
console.log(sum);

let difference =  (a + c) - b; // Операция вычитания чисел
console.log(difference); 

let product = a * b / c; // Операция умножения и деления чисел
console.log(product);


let remainder = a % b; // Операция получения остатка от деления
console.log(remainder); // Вывод: 0

// Задание 2: Инкремент и декремент в выражениях

let x = 7;
console.log(x++ + ++x); // Вывод: 16
console.log(x-- - --x); // Вывод: 2

// Задание 3: Конкатенация и числа

let w = 4;
let z = 5;

// Складываем числа сначала, а потом объединяем со строкой
let result = "The result is: " + (w + z);

console.log(result); // The result is: 9

// Задание 4: Логические операторы в условиях

console.log(a > b && a > 0 && b > 0); // true
console.log(c < 10 || c == 2); //  true
console.log(a / c != 5); // false

// Задание 5: Операторы сравнения и типы данных

// == (равенство)
let m = 10;
let n = '10';
console.log(m == n); // true, потому что == не учитывает тип данных

// === (строгое равенство)
console.log(m === n); // false, потому что === учитывает тип данных

// Задание 6: Сложные выражения

let x1 = 8;

console.log((x1 % 2 == 0 || x1 % 3 == 0) && x1 % 6 !== 0);

let y = 11;

console.log(!(y > 10 || y < 5));