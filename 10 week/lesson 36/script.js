// Задание 1: Изменение текста элемента
let paragraph = document.getElementById("message");
paragraph.textContent = "Добро пожаловать в JavaScript!";

// Задание 2: Работа с классами элементов
    let boxes = document.getElementsByClassName("box");
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].style.backgroundColor = "green";
    }
// Задание 3: Использование `querySelector` и `querySelectorAll`
let firstParagraph = document.querySelector('#text');
firstParagraph.textContent = 'Привет, мир!';

let boxes1 = document.querySelectorAll('.box1');

 boxes1.forEach(box1 => {
      box1.style.backgroundColor = "red";
      box1.style.borderRadius = "10px";
    });

// Задание 4: Поиск и выделение элементов по классу
const highlightedParagraphs = document.querySelectorAll('.highlight');

highlightedParagraphs.forEach(paragraph => {
   paragraph.style.color = 'red';
});
