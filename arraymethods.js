/*array methods*/
/*push*/
let fruits = ["Apple", "Banana"];

fruits.push("Mango");

console.log(fruits);

/*pop*/
let fruits = ["Apple", "Banana", "Mango"];

fruits.pop();

console.log(fruits);

/*unshift*/
let fruits = ["Banana", "Mango"];

fruits.unshift("Apple");

console.log(fruits);

/*shift*/
let fruits = ["Apple", "Banana", "Mango"];

fruits.shift();

console.log(fruits);

/*slice*/
let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruits.slice(1, 3));

/*splice*/
let fruits = ["Apple", "Banana", "Orange"];

fruits.splice(2, 0, "Mango");

console.log(fruits);

/*reverse*/
let numbers = [1, 2, 3, 4];

numbers.reverse();

console.log(numbers);

/*map*/
let numbers = [1, 2, 3];

let result = numbers.map(function(num) {
    return num * 2;
});

console.log(result);

/*reduce*/
let numbers = [1, 2, 3, 4];

let sum = numbers.reduce(function(total, num) {
    return total + num;
}, 0);

console.log(sum);

/*filter*/
let numbers = [10, 15, 20, 25];

let result = numbers.filter(function(num) {
    return num > 15;
});

console.log(result);

/*sort*/
let fruits = ["Mango", "Apple", "Banana"];

fruits.sort();

console.log(fruits);

/*find*/
let numbers = [5, 10, 15, 20];

let result = numbers.find(function(num) {
    return num > 10;
});

console.log(result);