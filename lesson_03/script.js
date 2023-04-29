// 1.
// Написати функцію createArray(start, end), яка приймає на вхід 2 параметри:
//     - початкове значення
// - кінцеве значення
// а на виході отримує масив із діапазоном цих значень (реалізувати достатньо лише із числовими значеннями)
// let arr = createArray(2, 9);
// console.log(arr); // [2,3,4,5,6,7,8,9]
//
function createArray(start, end){
    let mas = [];
    for(let i = start; i < end+1; i++){
        mas.push(i)
    }
    return mas;
}
console.log(createArray(5,32))
//
// 2.
// Задані цілі числа a і b (a < b). Виведіть усі цілі числа від a до b включно, при цьому a виводится 1 раз, число а+1 - два рази і т.д.
// // 1,2,2,3,3,3...
//
function makeDublicates(a,b){
    let mas = [];
    let step = 1;
    for(let i = a ; i < b+1 ; i++){
        for (let j = 0; j < step ;j++){
            mas.push(i)
        }
        step++
    }
    return mas;
}
console.log(makeDublicates(1,4))
//
// 3.
// Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами. Випадкові числа генеруються із діапазону 1-500.
// randArray(5);  // [399,310,232,379,40]
//

function randArray(k){
    let mas = [];
    for (let i = 0; i < k; i++){
        mas.push(Math.floor(Math.random() * 500) + 1);
    }
    return mas;
}
console.log(randArray(5))

//
// 4.
// Написати функцію compact() яка має приймати на вхід масив, а на вихід має повертати значення нового масиву без повторень.
//     приклад:
// const arr = [5, 3, 4, 5,6,7,3];
// const arr2 = compact(arr);
// console.log(arr2) ; // [5,3,4,6,7]
//

let arrg = [5, 3, 4, 5,6,7,3]
function compact(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(compact(arrg))
//
// 5.
// Є масив [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “brown”]
// Написати функцію яка виведе нові масиви які складаються із даних початкового масиву, але одного типу даних (не приводити тип стрінг в число навіть якщо там лише число)
// let  arr = [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “brown”];
// let arrNew = funcName(arr);
// /*
// [
// [5, 12, 99, 2, 2, 4, 3],
// [”Limit”, “a”, “3”, “33”, “a”, “text”, “strong”, “broun”
// ]
// */

function sort(arr){

    let string = [];
    let number = [];
    let mas = [];
    let sorted = [string ,number,mas]

    for(let i = 0; i < arr.length;i++){
        if(typeof arr[i] === 'string'){
            string.push(arr[i])
        }
        else if(typeof arr[i] === 'number'){
            number.push(arr[i])
        }
        else{
            mas.push(arr[i])
        }
    }
    return sorted;
}
console.log(sort([5,'Limit', 12, 'a', '3', 99, 2, [2, 4, 3, '33', 'a', 'text'], 'strong', 'brown']))
//
//
// 6.
// Напишіть функцію calc(a, b, op), яка виконує над числами a і b одну із арифметичних операцій та повертає її результат. Вид операції визначається цілим числом op: 1 – віднімання, 2 – добуток, 3 – ділення, інші значення – додавання.
// calc(10, 3, 1); // => 7
//

function calc(a,b,op){
    if(op === 1){
        return a - b;
    }
    else if(op === 2){
        return a*b;
    }
    else if(op === 3){
       return a / b;
    }
    else {
        a+b;
    }
}
console.log(calc(3,3,2))
// 7.
// Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи. Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.
// findUnique([1, 2, 3, 5, 3]);  // => false
// findUnique([1, 2, 3, 5, 11]); // => true
//
function findUnique(arr){
    let unique = true;
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) !== i) {
            unique = false;
            break;
        }
    }
    return unique;
}
console.log(findUnique([1, 2, 3, 5, 3]))
