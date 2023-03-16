// 2.
// Напишіть скрипт в зовнішньому файлі, який виводить в консоль ваше прізвище.
//     Підключіть створений файл до HTML-документу.

console.log('Feduniv Volodymyr');

// 3.
// a) оголосіть дві змінні;
// b) запишіть у змінні будь-які значення;
// c) виведіть на екран значення змінних;
// d) скопіюйте значення однієї змінної в іншу;
// e) виведіть на екран значення змінних.

let a = 10;
let b = 'hello';

document.write(a);
document.write(b);

b = a;
document.write(a);
document.write(b);


// 4.
// Створіть об’єкт з 5-ма наступними властивостями: “String”, “Number”, “Boolean”, “Undefined”, “Null”. Значення кожної властивості повинно відповідати відповідному примітивному типу даних.
//
let object = {
    String: 'hello',
    Number: 5,
    Boolean: true,
    Undefined: undefined,
    Null: null
}
// 5.
// Використовуючи функцію confirm() задайте користувачу питання про досягнення ним повнолітнього віку. Результат запишіть в змінну isAdult і виведіть в консоль.
//
let isAdult = confirm('Вам є 18 років?');
if (isAdult === true) {
    console.log('Ви повнолітній')
} else {
    console.log('Ви неповнолітній')
}
// 6.
// В зовнішньому файлі напишіть скрипт , в якому оголосіть змінні, для збереження таких даних:
//     - ваше ім’я
// - ваше прізвище
// - навчальна група
// - ваш рік народження.
//     Присвойте змінним відповідні значення.
//     Створіть та проініціалізуйте логічну змінну для збереження вашого сімейного стану.
//     Визначте тип кожної змінної.
//     Виведіть значення змінних в консоль, відповідно до їх типу, в такому порядку: Number, Boolean, String.
//     Створіть 2 довільних змінних типу Null і Undefined відповідно. Виведіть їх тип в консоль.
//
let name = 'Volodymyr';
let surname = 'Feduniv';
let group = 'JS';
let birthYear = 2001;
let marrige = false;
console.log('-----------')
console.log(typeof name);
console.log(typeof surname);
console.log(typeof group);
console.log(typeof birthYear);
console.log(typeof marrige);
console.log('------------');
console.log(birthYear);
console.log(marrige);
console.log(name);
console.log('-----------')
let none = null;
let und = undefined;
console.log(none);
console.log(und)

// 7.
// За допомогою функції prompt() напишіть скрипт , який послідовно запитує в користувача логін, імейл та пароль, і виводить на екран повідомлення із введеними даними. Наприклад “Dear User, your email is usermale@gmail.com, your password is qwerty”.
//
let login = prompt('Введіть свій логін');
let mail = prompt('Введіть свою пошту');
let password = prompt('Введіть свій пароль');
alert(`Dear ${login}, your email is ${mail}, your password is ${password}`)


// 8.
// Напишіть скрипт, який вираховує кількість секунд в годині, в добі, в місяці, записує результати в відповідні змінні, і виводить їх значення на екран.

function howManySeconds(hour,day,month){
    let seconds = 0;
    if(hour > 0){
        seconds = seconds + hour * 3600;
    }
    if(day > 0){
        seconds = seconds + day * (3600 * 24);
    }
    if(month > 0){
        seconds = seconds + month * ((3600 * 24)*30)
    }
    console.log(seconds);
}

howManySeconds(1,0,0);
