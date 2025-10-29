// Задание 1: Цикл `while`

let count = 0;
while (count <= 10) {
   console.log(count);
   count++;
}

// Задание 2: Управление циклами: `break` и `continue`


let count1 = 0;

while (count1 < 10) {
   count1++;
   if (count1 === 5) {
       continue; // Пропуск итерации, когда count становится 5
   }
   console.log(count1);
}

console.log("Цикл завершен");


let count2 = 0;

while (true) {
   console.log(count2);
   count2++;
   if (count2 === 8) {
       break; // Завершение цикла, когда count становится 8
   }
}

console.log("Цикл завершен");

// Задание 3: Цикл `do-while`

let count3 = 0;
do {
   console.log(count3);
   count3++;
} while (count3 < 5);

// цикл do-while гарантирует, что его тело будет выполнено хотя бы один раз, даже если условие сразу ложно.

// Задание 4: Бесконечные циклы

let count4 = 0;

while (true) {
   console.log(count4);
   count4++;
   if (count4 === 10) {
       break; // Завершение цикла, когда count становится 10
   }
}

// Задание 5: Цикл `for`


for (let i = 0; i <= 10; i++) {
   console.log(i);
};

// Задание 6: Бесконечный цикл `for`
let y = 0;

for (;;) {
  if (y > 100) {
    break; // Завершаем цикл
  }
  console.log(y);
  y++;
}


// Задание 7: Перебор элементов массива

let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
   console.log(numbers[i]);
}   


// Задание 8: Выбор между `while` и `for`

let array = [10, 20, 30, 40, 50];

for (let i = 0; i < array.length; i++) {
   console.log(array[i]);
};

// В данном случае цикл for предпочтительнее, так как мы заранее знаем количество итераций (длину массива), что делает его более удобным и читаемым для перебора элементов массива.

let input;

while (input !== "stop") {
   input = prompt("Введите 'stop' для завершения");
   console.log("Вы ввели: " + input);
};

// В этом случае цикл while предпочтительнее, так как количество итераций заранее неизвестно и зависит от ввода пользователя.

// Задание 9: Цикл с обратным отсчетом

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// Задание 10: Использование `continue` в цикле `for`


for (let i = 0; i < 10; i++) {
   if (i % 2 == 1) { continue; // Пропуск нечетных чисел
   }    
       console.log(i);
   };

