// 1.
// Напишіть функцію sumSliceArray(arr, first, second), яка приймає масив arr і два числа (first и second)
// – порядкові номери елементів масиву, які необхідно скласти. Наприклад, якщо ввели 3 та 5
// – сумуються 3-й та 5-й елементи.Функція повинна генерувати винятки, якщо були введені не числа,
// і коли одне з чисел або обидва більшого розміруза довжину масиву. Напишіть код, який використовує цю функцію,
// передбачте обробку можливих винятків.
//
function sumSliceArray(arr, first,second){
    try{
        if(first < 1 || first > arr.length || second < 1 || second > arr.length){
            throw new RangeError('Out of range of array')
        }
        else if(isNaN(first) || isNaN(second)){
            throw new Error('You can use only numbers!')
        }
        else{
            return console.log(arr[first-1] + arr[second-1]);
        }
    }
    catch (error){
        console.warn(error)
    }
}
sumSliceArray([5,3,2,1],1,4);

// 2.
// Створіть функцію checkAge(), яка запитує у користувача його ім'я, вік та статус (адмін, модератор, користувач) та генерує модальне вікно з помилкою,
// якщо:вік користувача менше 18 або більше 70 років (генерується помилка типу RangeError).
// користувач не ввів жодних даних в будь-якому полі (виводиться повідомлення The field is empty! Please enter your age з типом помилки Error).
// У полі статус введено неправильне слово (тип помилки EvalError).в полі вік введено нечислове значення.
// У всіх інших випадках користувач отримає доступ до перегляду фільму.
// У блоці catch передбачена можливість виведення назви та опису помилки.

//
function checkAge(){
    let name = prompt('Enter your name').toLowerCase();
    let age = +prompt('Enter your age');
    let stat = prompt('What is your status?').toLowerCase();
    try {

        if(name === ''){
            throw new Error('The field is empty! Please enter your name!')
        }

        if(isNaN(age)){
            throw new EvalError('You can use only numbers in age field!');
        }
        else if(age <= 17 || age > 70){
            throw new RangeError('Because of you age you dont have permission to enter our website');
        }

        if(!(stat === 'admin' || stat === 'moderator' ||  stat === 'user')){
            throw new Error('We dont have such status!')
        }
        else if(stat === ''){
            throw new EvalError('The field is empty! Please enter your status!');
        }

        alert(`Welcome, ${name}! You can now access the content as a ${stat}.`);
    }
    catch (error){
        console.log(`${error.name} : ${error.message}`)
    }
}
//checkAge();

// 3.
// Реалізуйте функцію calcRectangleArea(width, height),
// яка приймає 2 параметри ширина прямокутника width і висота прямокутника height і обраховує його площу.
// Передбачити припинення виконання програми і генерацію винятку у випадку, якщо функції передано не числові параметри.
//     Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.

function calcRectangleArea(width, height){
    try{
        if(isNaN(width) || isNaN(height)){
            throw new Error('You can use only numbers');
        }
        else{
            return console.log(`Площа прямокутника дорівнює : ${width * height}`)
        }
    }
    catch(error){
        console.log(`${error.name} , ${error.message}`)
    }
}
calcRectangleArea(5,3);

// 4.
// Створіть клас MonthException, конструктор якого приймає параметр message і ініціалізує поле name значенням MonthException.
//     Реалізуйте функцію showMonthName(month), в якій параметр month – це порядковий номер місяця в році.
//     Функція повертає назву місяця відповідно до введеного номера місяця.
//     У випадку некоректного вводу кидається ексепшн у вигляді об’єкта класу MonthException з повідомленням Incorrect month number.
//     Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
//     Приклад роботи програми:
//     console.log(showMonthName(5));  // May
// console.log(showMonthName(14)); // MonthException Incorrect month number
//

class MonthExeption {
    constructor(message) {
        this.name = 'MonthExeption';
        this.message = message;
    }
}

function showMonthName(month){
    const months =[
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]

    if(month < 1 || month > 12){
        throw new MonthExeption('Incorrect month number.')
    }

    return console.log(months[month-1])
}

showMonthName(2)

// 5.
// Реалізуйте функцію showUser(id), яка приймає параметром користувацьке id і повертає об’єкт,
// який містить значення переданої id.
// Також функція викидає помилку у разі якщо введено від’ємне id.
//     Реалізуйте функцію showUsers(ids), яка приймає параметром масив користувацьких айді ids,
//     перевіряє з використанням функції showUser() кожен елемент масиву ids на коректність,
//     в разі виключної ситуації виводить повідомлення про помилку.
//     Функція showUsers(ids) повертає масив об’єктів, де значеннями ключів є коректні елементи ids.
//
//     Приклад роботи програми:
//     showUsers([7, -12, 44, 22]);
// // Error: ID must not be negative: -12
// // [ {id: 7}, {id: 44}, {id: 22} ]
//

class IdError {
    constructor(message) {
        this.name = 'IdError';
        this.message = message;
    }
}

function showUser(id){
    try{
        if(id < 0){
            throw new IdError(`${id} <-- is lower than 0!`)
        }
        else if (isNaN(id)){
            throw new IdError(`${id} <-- is not a number! Use numbers only!`)
        }
        else{
            return id
        }
    }
    catch (error){
        console.warn(error)
    }
}

function showUsers(ids){
    let users = []
        for(let i = 0 ; i < ids.length ; i++){
            if(isNaN(showUser(ids[i]))){
                continue
            }
            const user = showUser(ids[i])
            users.push(user)
        }
    return console.log(users)
}

showUsers([5,3,-6,7,'a']);
