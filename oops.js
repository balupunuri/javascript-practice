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




