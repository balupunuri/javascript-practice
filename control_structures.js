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
