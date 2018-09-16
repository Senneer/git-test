
//Получение последнего элемента массива
let goods = [1, 2, 3, 4, 1001];
console.log(goods[goods.length - 1]); 

//Добавить новый элемент в массив
goods.push(102, 103);
console.log('Добавили 102 и 103 в конец массива', goods);

//Создание массива
let styles = new Array("Джаз", "Блюз");
styles.push("Рок-н-Ролл");
styles[styles.length-2] = "Классика";
console.log( styles.shift() );
styles.unshift("Рэп", "Регги");

//Генерация случайного элемента массива
let fruits = ["Яблоко", "Апельсин", "Груша", "Лимон"];
let rand = Math.floor(Math.random() * fruits.length);
console.log(fruits[rand]);

//Калькулятор
let numbers = [];
let sum = 0;

while (true) {
    let value = prompt("Введите число", "");

    if (value === null || isNaN(value) || value === "") break;

    numbers.push(+value);
}

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum);

//Filter Range
let values = [12, 5, 64, 21, 62];

function filterRange(arr, a, b) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= a && arr[i] <= b) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(filterRange(values, 10, 30));
