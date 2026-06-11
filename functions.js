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