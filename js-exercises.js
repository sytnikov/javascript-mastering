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
  const guessNumber = (number) => {
    if (number === 42) {
      return 'You win!';
    }
    
    return 'Try again!';
  }