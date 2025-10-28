// Задание 1: Создание массива

let fruits = ['яблоко', 'банан', 'апельсин'];
console.log(fruits);

// Задание 2: Доступ к элементам массива

console.log(fruits[0]); // первый элемент
console.log(fruits[fruits.length - 1]); // последний элемент

fruits.push('груша'); // добавление элемента в конец массива
console.log(fruits);

// Задание 3: Удаление элементов из массива

fruits.pop(); // удаление последнего элемента
fruits.shift(); // удаление первого элемента
console.log(fruits);

// Задание 4: Метод `forEach`

fruits.forEach((fruit) => console.log(fruit)); // вывод каждого элемента массива

// Задание 5: Метод `map`

let lengths = fruits.map((fruit) => fruit.length); // создание нового массива с длинами строк
console.log(lengths);

// Задание 6: Метод `filter`

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

// Задание 7: Метод `reduce`

let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); 

// Задание 8: Метод `find`

let firstGreaterThanFive = numbers.find(num => num > 5);
console.log(firstGreaterThanFive);

// Задание 9: Соединение массивов

 let arr1 = [1, 2, 3];
 let arr2 = [4, 5, 6];
let combined = arr1.concat(arr2);
console.log(combined);

// Задание 10: Проверка существования элемента (метод `includes`)

let hasBanana = fruits.includes('банан');
console.log(hasBanana);

// Задание 11: Обратный порядок массива

fruits.reverse();
console.log(fruits);

