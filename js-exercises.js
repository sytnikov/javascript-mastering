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
