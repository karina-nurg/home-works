// Задание 2: Добавление обработчика через JavaScript

const button = document.getElementById('jsButton');

button.addEventListener('click', () => {
   alert('Событие обработано через JS');
});

// Задание 3: Множественные события на одном элементе

  const myDiv = document.getElementById("myDiv");

    myDiv.addEventListener("click", () => {
      myDiv.style.backgroundColor = "blue";
    });

    myDiv.addEventListener("mouseenter", () => {
      console.log("Элемент нажат");
    });

// Задание 4: Работа с объектом события `event`

  const input = document.getElementById("textInput");

    input.addEventListener("keyup", function(event) {
      console.log("Вы ввели:", event.target.value);
    });

    // Задание 5: Отмена действия по умолчанию
 const link = document.getElementById("myLink");

    link.addEventListener("click", function(event) {    
        event.preventDefault();
        alert("Переход по ссылке отменен");
    });

    // Задание 6: Делегирование событий

    const ullist = document.getElementById("list");

    ullist.addEventListener("click", function(event) {  
        if (event.target && event.target.nodeName === "LI") {
            console.log("Вы кликнули по элементу: " + event.target.textContent);
        }
    }); 

// Задание 7: События клавиатуры
    const inputField = document.getElementById("keyboardInput");       
    inputField.addEventListener("keydown", function(event) {
        console.log("Нажата клавиша: " + event.key);
    });