// Задание 1: Использование `setTimeout`

setTimeout(() => {
   console.log('Привет, мир!');
 }, 2000); 

//  Задание 2: Использование `setInterval`

let counter = 0;

const intervalId = setInterval(() => {
    const now = new Date();

    let hours = now.getHours().toString().padStart(2, "0");
    let minutes = now.getMinutes().toString().padStart(2, "0");
    let seconds = now.getSeconds().toString().padStart(2, "0");

    console.log(`${hours}:${minutes}:${seconds}`);

// Задание 3: Остановка `setInterval`

    counter++;

    if (counter === 5) {
        clearInterval(intervalId); // Останавливаем интервал
        console.log("Вывод времени остановлен.");
    }
}, 1000);

// Задание 4: Создание и использование `Promise`

function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Данные получены!");
        }, 3000); // 3 секунды
    });
}
fetchData().then(result => {
    console.log(result);
});

// Задание 5: Ошибка в `Promise`
function fetchWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Произошла ошибка при получении данных.");
        }, 2000); // 2 секунды
    });
}

fetchWithError()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error("Ошибка:", error);
    });

    // Задание 6: `async/await` с `Promise`

async function fetchDataAsync() {
    const result = await fetchData(); 
    return result;
}
fetchDataAsync().then(result => {
    console.log(result);
});

// Задание 7: Обработка ошибок с `async/await`

async function fetchWithErrorAsync() {
    try {
        const result = await fetchWithError(); 
        return result;
    } catch (error) {
        console.error("Ошибка:", error);
    }
}
fetchWithErrorAsync();  

// Задание 8: Последовательное выполнение асинхронных операций

function task1() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Задача 1 выполнена через 1 секунду");
        }, 1000);
    });
}

function task2() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Задача 2 выполнена через 2 секунды");
        }, 2000);
    });
}

async function runTasks() {
    const result1 = await task1();
    console.log(result1);

    const result2 = await task2();
    console.log(result2);
}

runTasks();

// Задание 9: Параллельное выполнение асинхронных операций

function taskA() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Результат taskA (2 секунды)");
        }, 2000);
    });
}

function taskB() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Результат taskB (3 секунды)");
        }, 3000);
    });
}

Promise.all([taskA(), taskB()])
  .then((results) => {
    console.log(results[0]); // результат taskA
    console.log(results[1]); // результат taskB
  })
  .catch((err) => console.error(err));

//   Задание 10: Асинхронная функция с задержкой

async function delayedMessage(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, delay);
  });
}

delayedMessage("Привет!", 4000); 
