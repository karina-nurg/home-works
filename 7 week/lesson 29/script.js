// Задание 1: Объявление переменных с помощью `let` и `const`
let age = 28;
console.log(age); // Вывод: 28

age = 29; // Изменение значения допустимо
console.log(age); // Вывод: 29


const birthYear = 1997;
console.log(birthYear); // Вывод: 1997

// birthYear = 1996; // Ошибка: присваивание значения константе

// Задание 2: Что такое `var`?

var name = 'Asem';
console.log(name); // Вывод: Asem

var name = 'Alua'; // Повторное объявление допустимо
console.log(name); // Вывод: Alua

/* Использование var все еще допустимо, особенно в старом коде, но 
для более надежного и предсказуемого поведения рекомендуется использовать let или const. */

// Задание 3: Типы данных
    let num = 28;              // number
    let str = "Hello World!";  // string
    let bool = true;           // boolean
    let empty = null;          // null
    let undef;                 // undefined
    let notANumber = NaN;      // NaN (специальное значение "не число")
   

// Выводим значения и их типы в консоль
    console.log("num:", num, " тип:", typeof num);
    console.log("str:", str, " тип:", typeof str);
    console.log("bool:", bool, " тип:", typeof bool);
    console.log("empty:", empty, " тип:", typeof empty);       
    console.log("undef:", undef, " тип:", typeof undef);
    console.log("notANumber:", notANumber, " тип:", typeof notANumber);

// Задание 4: Преобразование типов
let number = 123;
let strNum = String(number); // Использование функции String()
console.log(strNum); // Вывод: "123"


let string = "456";
let numb = Number(string); // Использование функции Number()
console.log(numb); // Вывод: 456


let nullValue = null;
let undefinedValue = undefined;

console.log(String(nullValue)); // Вывод: "null"
console.log(Number(nullValue)); // Вывод: 0

console.log(String(undefinedValue)); // Вывод: "undefined"
console.log(Number(undefinedValue)); // Вывод: NaN

// Задание 5: Динамическая типизация

// Создаём переменную и присваиваем ей число
    let value = 100;
    console.log("Значение:", value, "Тип:", typeof value); // number

// Изменяем значение на строку
    value = "Сто";
    console.log("Новое значение:", value, "Тип:", typeof value); // string

// Задание 6: Использование `prompt`

  // Запрашиваем имя у пользователя
    let name1 = prompt("Введите ваше имя:");

    // Запрашиваем возраст
    let age1 = prompt("Введите ваш возраст:");

    // Выводим введённые данные в консоль
    console.log("Имя пользователя:", name1);
    console.log("Возраст пользователя:", age1);