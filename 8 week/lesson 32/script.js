// Задание 1: Простая функция


function greet() {
   console.log("Привет, мир!");
}

// Вызов функции
greet(); 

// Задание 2: Функция с параметрами


function sayHello(name) {
   console.log("Привет, " + name + "!");
}

// Вызов функции
sayHello("Амир"); 
sayHello("Алина");

// Задание 3: Функция с возвращаемым значением


function sum(a, b) {
    return a + b;
}

console.log(sum(10, 4)); 

// Задание 4: Функция с проверкой на чётность


function isEven (с) {
   return с % 2 === 0;
}

console.log(isEven(7)); 
console.log(isEven(10));

// Задание 5: Функция с несколькими параметрами и условием


let num1 = 20;
let num2 = 20;

function max(a, b) {
    if (a == b) {
        return "Числа равны";
    }
    return a > b ? a : b;
}
console.log(max(num1, num2));

// Задание 6: Функция для работы со строками

function getInitials(name, surname) {
   return name.charAt(0) + "." + surname.charAt(0) + ".";
}
console.log(getInitials("Алиса", "Боброва")); 
console.log(getInitials("Жасулан", "Куандык")); 


// Задание 7: Функция с вложенными вызовами

function square(n) {
   return n * n;
}       
console.log(square(5));

function cube(n) {
   return square(n) * n;
}
console.log(cube(3));


// Задание 8: Стрелочная функция

const sum1 = (a, b) => a + b;

console.log(sum1(10, 4)); 

// Дополнительное задание:

const getFactorial = (n) => {
   if (n === 0 || n === 1) {
       return 1;
   }    
    return n * getFactorial(n - 1);
};
console.log(getFactorial(5));
console.log(getFactorial(0));
