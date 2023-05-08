// Printing on the screen 
console.log('Hello, World!');
console.log('- Did Joffrey agree?\n- He did. He also said "I love using \\n".');

// First function: prints the text
const printMotto = () => {
    const text = 'Winter is coming';
    console.log(text);
  };

// Function takes a string and a number, trancates the string to the index == nuber and add ...
const truncate = (text, length) => {
    const str = text.slice(0, length) + '...';
    return str;
  };
  
// Guess a number function (if condition)
function guessNumber(number) {
    if (number === 42) {
        return 'You win!';
    }

    return 'Try again!';
}

// else if conditions
const whoIsThisHouseToStarks = (name) => {
    let result;
    
    if (name === 'Karstark' || name === 'Tally') {
      result = 'friend';
    } else if (name === 'Lannister' || name === 'Frey') {
      result = 'enemy';
    } else {
      result = 'neutral';
    }
  
    return result;
  }

// Switch construction
const getNumberExplanation = (number) => {
  
    switch (number) {
      case 666:
        return 'devil number';
      case 42:
        return 'answer for everything';
      case 7:
        return 'prime number';
      default:
        return 'just a number';
    }

  }

// while cycle
const printNumbers = (initialNumber) => {
    let i = initialNumber;
    while (i > 0) {
      console.log(i);
      i = i - 1;
    }
    console.log('finished!');
  };

//function that takes a string and returns the string with every n element being capital
const makeItFunny = (str, n) => {
    let i = 0;
    let result = '';
  
    while (i < str.length) {
      if ((i + 1) % n === 0) {
        result = `${result}${str[i].toUpperCase()}`;
      } else {
        result = `${result}${str[i]}`;
      }
      i++;
    }
    return result
  }

  // encryption function: two next characters are swaped
  const encrypt = (str) => {
    let result = '';
    for (let i = 0; i < str.length; i += 2) {
      const nextSymbol = str[i + 1] || '';
      result = `${result}${nextSymbol}${str[i]}`;
    }
  
    return result;
  };

// Data types in JS: primitive and objects
// Primitive: number, string, boolean, null, undefined, symbol

// Numbers: calculations, BigInt, floating point, NaN - not a number (can appear when you make operations with numbers and strings)
// Hex decimals: 0xf; exponential 1.5e12 -> 1.5 times 10 in the power of 12, Infinity,
// big n -> put n in the end of the big number not to lose data

// Strings: 
// escape characters
const userName = "Dwain Jonson \"The Rock\"";

// \n - new line
console.log(userName);

// Boolean: true and false

//Data conversion
let num = String(6);  // number to string
let str = Number("123");    // string to number
let bool1 = Boolean(7) // true for all the numbers except 0
let bool2 = Boolean(0) // false
let parser = parseInt("123 Alexey 23")

// Data coercion
let x = 8; // number
result = x + "number"; // convert result into string 8number
console.log(result, typeof result)

let y = "7";
result = y - 3; // convert result into a number 4
console.log(result, typeof result);
// Falsy and truthy values

// Falsy value: null, undefined, empty string ''
// Thruthy values: objects, functions, strings

console.log(parser);
console.log();

// if else statements
let num1 = 6;
let num2 = 4;
let num3 = 7;

if (num1 > num2) {
    console.log("Number 1 is greater than number 2");
}

console.log("Bye...");

let num4 = 15;

(num4 % 2 === 0) ? console.log("The number is even") : console.log("The number is odd");

// switch statement

let day = "Monday";

switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
        console.log("4am");
        break;
    case "Thirsday":
    case "Friday":
        console.log("6am");
        break;
    case "Saturday":
    case "Sunday":
        console.log("9am");
        break;
    default:
        console.log("Enter a valid day!");    
}

// Template Literal
// `` - backtick symbol
// ${variable}

num1 = 9;
num2 = 4;
result = num1 + num2;

console.log(`The sum of ${num1} and ${num2} is ${result}`);

console.log(`
My name is
Alexey Sytnikov`);

// while loop: initial value, condition, increment
// best if you know where to stop

let i = 0;
while (i < 5) {
    console.log("Hi!");
    i++;
}

// do while loop: execute the block at least once

i = 0;
do {
    console.log("Hi!", i);
    i++;
} while (i < 5)

// for loop, nested loop
// best if you know start and finish points

for (let i = 0; i < 5; i++) {
    console.log("Hi", i);
        for (let j = 0; j < 3; j++) {
            console.log("Hello", j);
        }
}

// objects
// objects has properties represented by key-value pairs
let alien = {
    name : "Alexey",
    tech : "JS"
}
console.log(alien, typeof alien);
console.log(alien.name);
console.log(alien.tech);

// another way to fetch a property -> useful when there's a user's input
console.log(alien['name']);
console.log(alien['tech']);

let input = 'name';
console.log(alien[input]); // console.log(alien.input) wouldn't work

// complex object, an object inside an object

let alienComplex = {
    name : 'Alexey',
    tech : 'JS',
    laptop : {
        cpu : 'i7',
        ram : 4,
        brand : 'Apple',
    }
}

console.log(alienComplex);

// ? symbol to use when you're not sure if the property or an object exists

console.log(alienComplex?.laptop?.brand?.length);

// delete a property

delete alienComplex.laptop;

console.log(alienComplex); // { name: 'Alexey', tech: 'JS' }
console.log(alienComplex?.laptop?.brand?.length); // undefined

// for in loop -> iterate thorugh the object
let alien1 = {
    name : 'Alexey',
    tech : 'JS',
    laptop : {
        cpu : 'i7',
        ram : 4,
        brand : 'Apple',
    }
}

console.log(alien1);

// fetching keys
for (let key in alien1) {
    console.log(key);
}

// fetching keys and correponding values
for (let key in alien1) {
    console.log(key, alien1[key]);
}

// fetching keys and correponding values of the laptop object
for (let key in alien1.laptop) {
    console.log(key, alien1.laptop[key]);
}

// Functions, return and passing
function greet(user) {
    return `Hello, ${user}`;
}

let user = 'Alexey';
console.log(greet(user));

// Function expression -> function is evaluated and then is assigned to a variable, and 
// now this valiable can be treated as a function

let add = function(num1, num2) {
    return num1 + num2;
}

result = add(3, 7);
console.log(result);

// Deafault value passing to the function
function adding(num1, num2 = 2) {
    return num1 + num2;
}

result = adding(2, 3);
console.log(result); // 5

result = adding(2);
console.log(result); // 4, the second value wasn't passed but there was a default value === 2


// Arrow function

let addingAgain = (num1, num2) => num1 + num2;

// Methods - functions inside the objects
// Objects possess data and behaviour
let laptop = {
    cpu : 'i9',
    ram : 16,
    brand : 'HP',

    greet : function() {
        console.log("Hello, world!");
    },

    compare : function(laptop) {
        (this.cpu > laptop.cpu) ? console.log(this) : console.log(laptop);
    },
}

laptop.greet(); // method greet of the object laptop

// THIS key word -> refers to the current object
let laptop1 = {
    cpu : 'i7',
    ram : 16,
    brand : 'HP',

    getConfig : function() {
        console.log(this.cpu);
    },
}

laptop1.getConfig();

// To compare two objects you can use 
// 1) a third party function OR
// 2) create a method for an object -> THIS key word is going to be extremely helpful here

// 1
let getFastestMachine = (laptop1, laptop2) => {
    (laptop1.cpu > laptop2.cpu) ? console.log(laptop1) : console.log(laptop2);
}

getFastestMachine(laptop, laptop1);

// 2 -> let's create a compare method for the laptop object (see above)

laptop.compare(laptop1);


// Constructor function - allows to create the same object without difining all its properties
// The difference in syntaxis is that a cinstruction function starts with a capital letter - Alien

function Alien(name, tech) {
    this.name = name;
    this.tech = tech;
}

let alien2 = new Alien('Alexey', 'JS');
let alien3 = new Alien('Sytnikov', 'Python');

console.log(alien3);

// changing the value pf the of the object property

alien2.tech = 'Java';
console.log(alien2);

// adding a method to a constructor function

function Alien1(name, tech) {
    this.name = name;
    this.tech = tech;

    this.work = function() {
        console.log('Search the bugs');
    }
}

let alien4 = new Alien1('Balvin', 'Python');
console.log(alien4);
alien4.work();