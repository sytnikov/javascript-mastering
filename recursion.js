// recursion - when a function call itself
// stack notion: last in first out. Show -> log -> log out -> show out

// let num = 1;
// function show() {
//     console.log("Hi! ", num);
//     num++;
//     show();
// }

// show();

// function counting factorial of a number

let fact = (n) => {
    if (n===0) 
        return 1;
    else
        return n * fact(n-1);
}

num = 7
let result = fact(num);
console.log(result);