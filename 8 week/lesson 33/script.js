// Задание 1: Создание объекта

let person = {
   name: "Анна",
   age: 25,
   city: "Астана",
};
console.log(person);

// Задание 2: Доступ к свойствам объекта

console.log(person.name);
console.log(person.age);

person.city = "Алматы";
console.log(person.city);

// Задание 3: Методы объекта
person.greet = function() {
   console.log("Привет, меня зовут " + this.name + ", мне " + this.age + " лет!");
};
person.greet(); 

// Задание 4: Сравнение объектов (Reference Type)

const obj1 = { a: 10, b: 20 };
const obj2 = { a: 10, b: 20 };
console.log(obj1 == obj2);   // false
console.log(obj1 === obj2);  // false
// obj1 и obj2 — это разные ссылки на разные участки памяти, несмотря на одинаковые значения.
// Операторы == и === при сравнении объектов проверяют, указывают ли переменные на один и тот же объект.

// Задание 5: Поверхностное и глубокое копирование объектов

const book = { 
    title: "JavaScript", 
    author: "Иван Иванов",
    details: {
    year: 2020,
    pages: 350
  }
};

let copyObject = Object.assign({}, book); // Поверхностное копирование
book.details.year = 2021;
console.log(copyObject.details.year); // 2021 - изменение в оригинале повлияло на копию так как details — это общий объект.

// Задание 6: Методы объектов

const calculator = { a: 10, b: 20 };
calculator.sum = function() {
   return this.a + this.b;
};
calculator.multiply = function() {
   return this.a * this.b;
};  
console.log(calculator.sum());       // 30
console.log(calculator.multiply());  // 200


// Задание 7: `const` и изменение содержимого объектов

const car = { brand: "Toyota", model: "Camry" };
car.model = "Corolla";  // Разрешено: изменение свойств объекта
console.log(car.model); // "Corolla"        
// car = { brand: "Honda", model: "Civic" }; // Ошибка: переназначение константы