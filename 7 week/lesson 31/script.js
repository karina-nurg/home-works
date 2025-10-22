// Задание 1: Простое условие

let number = prompt("Введите число:");
let compare = (number > 10) ? "Число больше 10" : "Число меньше или равно 10";
console.log(compare); 

// Задание 2: Подтверждение действия


let userConfirmed = confirm("Вы уверены, что хотите удалить файл?");

if (userConfirmed) {
   console.log("Файл удален.");
} else {
   console.log("Удаление отменено");
};

// Задание 3: Несколько условий с else if


let age = prompt("Введите ваш возраст:");

if (age < 18) {
   console.log("Вы еще подросток");
} else if (age >= 18 && age < 30) {
   console.log("Вы молодой взрослый");
} else {
   console.log("Вы взрослый");
};

// Задание 4: Тернарный оператор

let num = prompt("Введите число:");
let even = (num % 2 == 0) ? "Четное число" : "Нечетное число";
console.log(even); 

// Задание 5: Условное ветвление switch-case


let day = prompt("Введите день недели:");
let message;

switch (day) {
   case "1":
       message = "Понедельник";
       break;
   case "2":
       message = "Вторник";
       break;
   case "3":
       message = "Среда";
       break;
          case "4":
       message = "Четверг";
       break;
          case "5":
       message = "Пятница";
       break;
          case "6":
       message = "Суббота";
       break;
          case "7":
       message = "Воскресенье";
       break;
   default:
       message = "Некорректное значение";
}

console.log(message); 


// Задание 6: Комбинация if-else и тернарного оператора

let a = Number(prompt("Введите первое число:"));
let b = Number(prompt("Введите второе число:"));


if (a === b) {
   console.log("Числа равны");
} else {
    let result = (a > b) ? "Первое число больше" : "Второе число больше";
console.log(result); 
};
