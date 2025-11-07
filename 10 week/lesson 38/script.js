// Задание 1: Сохранение примитивных данных в LocalStorage
localStorage.setItem('greeting', 'Привет, мир!');  // сохраняем строку
const storedGreeting = localStorage.getItem('greeting'); // получаем строку
console.log(storedGreeting); // выводим в консоль
// Задание 2: Удаление данных из LocalStorage
localStorage.removeItem('greeting'); // удаляем  данные
const greeting = localStorage.getItem('greeting'); // пытаемся получить удаленные данные
console.log(greeting); // выводим в консоль (ожидаем null)
// Задание 3: Хранение объектов в LocalStorage с использованием JSON
const user = { name: 'Инес', age: 30 }; // создаем объект
const userJSON = JSON.stringify(user); // преобразуем объект в JSON строку
localStorage.setItem('user', userJSON); // сохраняем JSON строку в LocalStorage
const storedUserJSON = localStorage.getItem('user'); // получаем JSON строку из LocalStorage
const storedUser = JSON.parse(storedUserJSON); // преобразуем JSON строку обратно в объект
console.log(storedUser); // выводим объект в консоль
// Задание 4: Модификация данных в LocalStorage
storedUser.country = 'Almaty'; // добавляем новое свойство в объект
const updatedUserJSON = JSON.stringify(storedUser); // преобразуем обновленный объект в JSON строку
localStorage.setItem('user', updatedUserJSON); // сохраняем обновленную JSON строку в LocalStorage
const newStoredUserJSON = localStorage.getItem('user'); // получаем обновленную JSON строку из LocalStorage
const newStoredUser = JSON.parse(newStoredUserJSON); // преобразуем JSON строку обратно в объект
console.log(newStoredUser); // выводим обновленный объект в консоль
// Задание 5: Проверка наличия данных в LocalStorage
const existingUser = localStorage.getItem('user');
if (existingUser) {
    console.log(existingUser);
} else {
    localStorage.setItem('user', JSON.stringify({ name: 'Default', age: 0 }));
}   

// Задание 6: Очистка LocalStorage
localStorage.clear(); // очищаем все данные в LocalStorage  
const clearedData = localStorage.getItem('user'); // пытаемся получить данные после очистки
console.log(clearedData); // выводим в консоль (ожидаем null)

// Задание 7: Сохранение списка задач в LocalStorage
const tasks = [
    { id: 1, title: 'Купить продукты', completed: false },
    { id: 2, title: 'Помыть машину', completed: true },
    { id: 3, title: 'Записаться к врачу', completed: false }
];
localStorage.setItem('tasks', JSON.stringify(tasks));   
const storedTasksJSON = localStorage.getItem('tasks');
const storedTasks = JSON.parse(storedTasksJSON);
console.log(storedTasks);

// Задание 8: Обновление состояния задачи

tasks[0].completed = true; // изменяем состояние первой задачи
localStorage.setItem('tasks', JSON.stringify(tasks));
const updatedTasksJSON = localStorage.getItem('tasks');
const updatedTasks = JSON.parse(updatedTasksJSON);
console.log(updatedTasks);
