// Задание 1: Первый запрос с Fetch API
fetch('https://jsonplaceholder.typicode.com/posts/1')
 .then(response => response.json())
 .then(posts => console.log(posts))  // Получаем список постов
 .catch(error => console.error('Ошибка:', error));


//  Задание 2: Настройка Fetch-запроса

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "Новый пост",
    body: "Содержимое поста",
    userId: 1
  })
})
  .then(response => response.json())
  .then(data => {
    console.log("Успешное создание поста:", data);
  })
  .catch(error => {
    console.error("Ошибка:", error);
  });

// Задание 3: Обработка ошибок

fetch('https://jsonplaceholder.typicode.com/nonexistent')
 .then(response => {
   if (!response.ok) {
     throw new Error('Ошибка сети: ' + response.status);
   }
   return response.json();
 })
 .then(data => console.log(data))
 .catch(error => console.error('Обработанная ошибка:', error));

//  Задание 4: Конфигурация с методами PUT и DELETE

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "Новый заголовок",
    body: "Обновлённый текст поста",
    userId: 1
  })
})
  .then(response => response.json())
  .then(data => {
    console.log("PUT результат:", data);
  })
  .catch(error => console.error("Ошибка PUT:", error));


  fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE"
})
  .then(response => {
    console.log("DELETE статус:", response.status); // jsonplaceholder не возвращает тело
    console.log("Пост удалён (на фейковом API)");
  })
  .catch(error => console.error("Ошибка DELETE:", error));

//   Задание 5: Обработка ошибок с `async/await`

async function updatePost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: "Обновлённый заголовок",
        body: "Новый текст поста",
        userId: 1
      })
    });

    if (!response.ok) {
      throw new Error("Ошибка сети: " + response.status);
    }

    const data = await response.json();
    console.log("PUT результат:", data);

  } catch (error) {
    console.error("Произошла ошибка:", error.message);
  }
}

updatePost();


// Задание 6: Запрос с кастомной конфигурацией

fetch("https://jsonplaceholder.typicode.com/comments", {
  method: "GET",
  headers: {
    "User-Agent": "MyCustomClient/1.0",
    "Authorization": "Bearer exampleToken123"
  }
})
  .then(response => {
    if (!response.ok) {
      throw new Error("Ошибка: " + response.status);
    }
    return response.json();
  })
  .then(data => {
    console.log("Результат GET-запроса:", data);
  })
  .catch(error => {
    console.error("Произошла ошибка:", error.message);
  });
