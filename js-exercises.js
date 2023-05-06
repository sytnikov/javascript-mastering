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
