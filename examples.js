/* assigning  value to a variable*/
let a = 2;
console.log(a);

let a = 2;
let b = 4;
console.log(a+b);

/* data types*/
/*1.number*/
let c = 4.5;
console.log(c);
console.log(typeof c);

let a = 56;
console.log(a);
console.log(typeof a);

/*string*/
let w = '69';
console.log(w);
console.log(typeof w);

/*bigint*/
let a = 50n;
console.log(a);
console.log(typeof a);

/*boolean*/
let x = true;
console.log(x);
console.log(typeof x);

/*type conversion*/
/*number to string*/
let a = 45;
console.log(a);
console.log(typeof a);
let b = String(a);
console.log(b);
console.log(typeof b);

/*number to boolean*/
let y = 10;
console.log(y);
console.log(typeof y);
let x = Boolean(y);
console.log(x);
console.log(typeof x);

/* control statements*/
/*if statement*/
let age = 20;

if (age >= 18) {
    console.log("You are eligible to vote.");
}

/*if else */
let number = 5;

if (number % 2 == 0) {
    console.log("Even Number");
} else {
    console.log("Odd Number");
}

/* if else if else*/
let marks = 85;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

/*switch*/
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid Day");
}

/*loops*/
/*for loop*/
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

/*while loop*/
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}

/*do while */
let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);

/*break*/
for (let i = 1; i <= 5; i++) {
    if (i == 3) {
        break;
    }
    console.log(i);
}

/*continue*/
for (let i = 1; i <= 5; i++) {
    if (i == 3) {
        continue;
    }
    console.log(i);
}

/*functions*/
function greet() {
    console.log("Hello, Welcome to JavaScript!");
}

greet();

/*functions with parameters*/
function greet(name) {
    console.log("Hello " + name);
}

greet("Varshitha");

/*function with return value*/
function add(a, b) {
    return a + b;
}

let result = add(10, 20);
console.log(result);

/*to find the largest value*/
function largest(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log(largest(15, 25));

/*Arrow function*/
const square = (num) => {
    return num * num;
};

console.log(square(6));

/*oops*/
/*class*/
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let s1 = new Student("Varshitha", 21);

console.log(s1.name);
console.log(s1.age);

/*object*/
class Car {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
}

let car1 = new Car("Toyota", "Black");

console.log(car1);

/*method*/
class Student {
    constructor(name) {
        this.name = name;
    }

    display() {
        console.log("Student Name: " + this.name);
    }
}

let s1 = new Student("Anu");

s1.display();

/*constructor*/
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
}

let emp = new Employee("Rahul", 50000);

console.log(emp.name);
console.log(emp.salary);

/*inheritance*/
class Animal {
    sound() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
}

let d = new Dog();

d.sound();

/*polymorsphism*/
class Animal {
    sound() {
        console.log("Animal sound");
    }
}

class Dog extends Animal {
    sound() {
        console.log("Dog barks");
    }
}

let d = new Dog();

d.sound();

/*encapsulation*/
class Bank {
    constructor(balance) {
        this.balance = balance;
    }

    showBalance() {
        console.log(this.balance);
    }
}

let account = new Bank(10000);

account.showBalance();

/*abstraction*/
class ATM {
    withdraw() {
        console.log("Money Withdrawn");
    }
}

let user = new ATM();

user.withdraw();










