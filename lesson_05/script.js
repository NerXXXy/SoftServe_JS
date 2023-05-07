// 1.
// Напишіть клас Круг та реалізуйте функціонал:
//     - Визначте конструктор, який запитує координати центру кола, його радіус та ініціалізує об'єкт; +
// - Визначте метод отримання довжини кола для поточного об'єкта (L = 2 * π * R); +
// - Визначте статичний метод, який приймає радіус та повертає довжину кола для заданого радіусу; +
// - Визначте метод отримання об'єкта-кола, який повертає копію поточного об'єкта; +
// - Визначте статичний метод, який приймає координати центра кола, його радіус та повертає об'єкт кола із заданими параметрами;+
// - Визначте метод перевірки попадання крапки до кола;
// - Визначте метод перетворення поточного стану об'єкта на символьний рядок (toString()).
//

class Circle {
    constructor(x,y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    circleLength(){
        try{
            if(this.radius <=0 || isNaN(this.radius)){
                throw new Error('Wrong radius! Radius cant be less than 0 and you can use only numbers here!')
            }
            return (2 * 3.14 * this.radius).toFixed(1);
        }
        catch (error){
            console.warn(error)
        }
    }
    circleLengthByRadius(radius){
        try{
            if(radius <= 0 || isNaN(radius)){
                throw new Error('Wrong radius! Radius cant be less than 0 and you can use only numbers here!')
            }
            else{
                return (2 * 3.14 * radius).toFixed(1);
            }
        }
        catch (error){
            console.warn(error)
        }
    }
    getCircle(){
        return new Circle(this.x,this.y,this.radius)
    }
    getCircleWithParam(x,y,radius){
        return new Circle(x,y,radius)
    }
    isPointInside(x,y){
        const pointPosition = Math.sqrt((x - this.x) ** 2 + (y - this.y) ** 2)
        return pointPosition <= this.radius ? 'Point is inside circle ' : 'Point is outside circle'
    }
    circleInfo(){
        document.write(`<h2>Circle parameters</h2>\
                        <p>Coordinates: <br> x = ${this.x} <br> y = ${this.y}</p>
                        <p>Radius = ${this.radius}</p>
                        <p>Length = ${this.circleLength()}</p>`)

    }
}
let circle = new Circle(0,0,3,5)
circle.circleLength()
circle.circleLengthByRadius(0 )
console.log(circle.getCircle())
console.log(circle.getCircleWithParam(5,-2,10))
console.log(circle.isPointInside(3,0))
circle.circleInfo()





// 2.
// Напишіть функцію propsCount(currentObject),
// яка приймає об’єкт і визначає кількість властивостей цього об’єкта.
//     Наприклад:
// let mentor = {
//     course: "JS fundamental",
//     duration: 3,
//     direction: "web-development"
// };
// propsCount(mentor);  // 3

function propsCount(obj){
    let count = 0;
    for(key in obj){
        count++
    }
    return count
}
console.log(`There are ${propsCount(circle)} props in this object`);

// 3.
// Створіть клас Person, у якого конструктор приймає параметри name і surname, а також міститься метод showFullName(),
// який виводить у консоль ім’я і прізвище особи.
// - Від класу Person наслідується клас Student,
// конструктор якого крім name і surname, приймає параметр year (рік вступу до університету).
// - В класі Student необхідно перевизначити метод showFullName(middleName),
// щоб виводилося не лише ім’я, прізвище, але і по-батькові (middleName) студента.
// - Також в класі Student необхідно реалізувати метод showCourse(),
// який виводитиме поточний курс студента (від 1 до 6).
// Значення курсу визначатиметься як різниця поточного року (визначити самостійно) і року вступу до ВНЗ.
//     Приклад результату:
//     const stud1 = new Student("Petro", "Petrenko", 2019);
// console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
// console.log("Current course: " + stud1.showCourse()); //Current course: 4
//
class Person{
    constructor(name,surname) {
        this.name = name;
        this.surname = surname;
    }
    showFullName(){
        console.log(`${this.name} ${this.surname}`)
    }
}

class Student extends Person{
    constructor(name,surname, year) {
        super(name,surname);
        this.year = year;
    }
    showFullName(middleName) {
        console.log(`${this.name} ${this.surname} ${middleName}`)
    }
    showCourse(){
        let currentYear = new Date().getFullYear()
        try{
            if(this.year > currentYear){
                throw new Error(`Studying year cant be bigger that current year - ${currentYear}. You entered ${year}`)
            }
            else if((currentYear - this.year) > 6 ){
                return console.log('Seems like you finished your studying')
            }
            else if((currentYear - this.year) === 0){
                return console.log(`You are studying at 1 course`)
            }
            else{
                return console.log(`You are studying at ${(currentYear - this.year)} course`)
            }
        }
        catch(error){
            console.warn(error)
        }
    }
}
let person = new Person('Volodymyr','Feduniv')
person.showFullName()
let student = new Student('Volodymyr','Feduniv',2019)
student.showFullName('Borysovych')
student.showCourse()


// 4.
// А. Реалізувати клас, який описує простий маркер. У класі мають бути такі компоненти:
//     - поле, яке зберігає колір маркера;
// - поле, яке зберігає кількість чорнила в маркері (у відсотках);
// - метод друку (метод приймає рядок і виводить текст відповідним кольором;
// текст виводиться до тих пір, поки в маркері є чорнило; один не пробіловий символ – це 0,5% чорнила в маркері).
// В. Реалізувати клас, що описує маркер, що заправляється,
// успадкувавши його від простого маркера і додавши метод для заправки маркера.
// Продемонструвати роботу написаних методів

class Marker{
    constructor(color,ink) {
        this.color = color;
        this.ink = ink;
    }
    markerWrite(text){
        let writtenText ='';
        for(let i = 0; i< text.length; i++){
            if(this.ink < 0){
                break;
            }
            else if(text[i] !== ' '){
                writtenText += text[i]
                this.ink = this.ink - 0.5;
            }
            else {
                writtenText += text[i]
            }
        }
        console.log(`${writtenText} /// Color: ${this.color}`)
    }
}
class RefillableMarker extends Marker{
    refill(ink){
        this.ink = Math.min(100, this.ink + ink);
}

}
let marker = new Marker('red',10)
let refillableMarker = new RefillableMarker('red',10)
marker.markerWrite('Hello world12345678987654321!')
refillableMarker.markerWrite('Hello world12345678987654321!')
refillableMarker.refill(20)
refillableMarker.markerWrite('Hello world12345678987654321!')

// 5.
// Створіть клас Worker який буде мати конструктор, який приймає наступні властивості:
// fullName (ім’я і прізвище),
// dayRate (ставка за день роботи),
// workingDays (кількість відпрацьованих днів).
// 1) клас повинен мати метод showSalary(), який буде виводити зарплату працівника.
// Зарплата - це добуток ставки dayRate на кількість відпрацьованих днів workingDays.
// 2) додати приватне поле experience і присвоїти йому значення 1.2 і використовувати його як додатковий множник при визначенні зарплати
// – створити метод showSalaryWithExperience(). Вивести значення зарплати з цим коефіцієнтом.
// 3) додати гетери і сетери для поля experience. Встановити значення experience = 1.5 і вивести його на екран.
// 4) Вивести значення зарплати з новим experience.
// 5) Створити кілька екземплярів класу (працівників) з різними зарплатами, як показано в прикладі нижче.
// Посортувати зарплату працівників із найбільшим experience по зростанню і вивести результат в форматі:
// worker_fullName: salary_value
// 6) Реалізувати динамічне сортування для будь-кої кількості працівників-екземплярів класу Worker.

class Worker {
    static allWorkers = []
    constructor(name,surname,dayRate,workingDays) {
        this.fullName = `${name} ${surname}`;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
        this._experience = 1.2;
        Worker.allWorkers.push(this)
    }
    showSallary(){
        let salary = this.dayRate * this.workingDays
        console.log(`${this.fullName} salary: ${salary}`)
        return salary
    }
    showSallaryWithExperience(){
        let salary = this.dayRate * this.workingDays * this.experience
        console.log(`${this.fullName} salary: ${salary}`)
        return salary
    }
    get experience(){
        return this._experience;
    }
    set experience(value){
        this._experience = value;
    }

    static sortWorkersBySallary(){
        Worker.allWorkers.sort((a,b) => a.showSallaryWithExperience() - b.showSallaryWithExperience())
    }
}

const worker1 = new Worker('Volodymyr','Feduniv',100,20)
const worker2 = new Worker('Max','Pupko',80,15)
const worker3 = new Worker('Sergiy','Jmenya',50,30)

worker1.showSallary()
worker1.showSallaryWithExperience()
worker1.experience = 2;
worker1.showSallaryWithExperience()
console.log('_________')
Worker.sortWorkersBySallary()




//     Example usage:
//     let worker1 = new Worker("John Johnson", 20, 23);
// console.log(worker1.fullName);
// worker1.showSalary();
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();
// worker1.setExp = 1.5;
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();
//
// let worker2 = new Worker("Tom Tomson", 48, 22);
// . . . . . .
//
// let worker3 = new Worker("Andy Ander", 29, 23);
// . . . . . .
//
// Output example:
//     John Johnson
//
// John Johnson salary: 460
// New experience: 1.2
// John Johnson salary: 552
// New experience: 1.5
// John Johnson salary: 690
//
// Tom Tomson
// Tom Tomson salary: 1056
//     . . . . . .
//     New experience: 1.5
// Tom Tomson  salary: 1584
//
// Andy Ander
// Andy Ander salary: 667
//     . . . . . .
//     New experience: 1.5
// Andy Ander  salary: 1000.5
//
// Sorted salary:
//     John Johnson: 690
// Andy Ander: 1000.5
// Tom Tomson: 1584