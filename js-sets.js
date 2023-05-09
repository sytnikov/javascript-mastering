// SETS - UNORDERED (no indicies) collection of UNIQUE values

let str = new Set("bookkeeper");
console.log(str); // Set(6) { 'b', 'o', 'k', 'e', 'p', 'r' }

str = new Set();

str.add(3);
str.add(4);
str.add(3); // this value won't be added as it repeats the first one
str.add('Alexey');
str.add('Sytnikov');

console.log(str); // Set(4) { 3, 4, 'Alexey', 'Sytnikov' }

str.forEach(element => { // printing all set values one by one
    console.log(element);
});

// has method

console.log(str.has(3)); // true
console.log(str.has('Alexey')); // true
console.log(str.has('alexey')); // false becuase case sensitive