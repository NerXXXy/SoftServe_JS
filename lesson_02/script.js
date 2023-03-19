// 1.
// Дано три цілих числа: a, b, c. Перевірте істинність висловлювання:
//     a < b < c
let a = 1;
let b = 2;
let c = 3;
console.log(a<b<c);



// 2.
// Є такий код:

let x = 1;
let y = 2;

let res1 = '1' + '2'  // Допишіть код, необхідно використовувати змінні x і y
    console.log(res1); // ""12""
console.log(typeof res1); // ""string""

let res2 = '2' + true // Допишіть код, необхідно використовувати змінні x і y
    console.log(res2); // ""true2""
console.log(typeof res2); // ""string""

let res3 = Boolean(y-x) // Допишіть код, необхідно використовувати змінні x і y
    console.log(res3); // true
console.log(typeof res3); // ""boolean""

let res4 = true / false // Допишіть код, необхідно використовувати змінні x і y
    console.log(res4); // NaN
console.log(typeof res4); // ""number""


// Допишіть код, щоб в консолі браузера з'явилися рядки, які написані в коментарях, оперуючи при цьому змінними х і у.