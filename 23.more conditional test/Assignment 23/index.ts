let fruit: string = 'apple';
let number: number = 10;
let colors: string[] = ['red', 'green', 'blue'];

// Tests for equality and inequality with strings
console.log("Is fruit equal to 'apple'? I predict true.");
console.log(fruit === 'apple');

console.log("Is fruit not equal to 'banana'? I predict true.");
console.log(fruit !== 'banana');

// Tests using the lowercase function
console.log("Is 'HELLO' in lowercase equal to 'hello'? I predict true.");
console.log('HELLO'.toLowerCase() === 'hello');

console.log("Is 'WORLD' in lowercase not equal to 'world'? I predict true.");
console.log('WORLD'.toLowerCase() !== 'world');

// Numerical tests
console.log("Is number greater than 5? I predict true.");
console.log(number > 5);

console.log("Is number less than or equal to 20? I predict true.");
console.log(number <= 20);

console.log("Is number equal to 15? I predict false.");
console.log(number === 15);

// Tests using "and" and "or" operators
console.log("Is fruit equal to 'apple' and number is greater than 5? I predict true.");
console.log(fruit === 'apple' && number > 5);

console.log("Is fruit equal to 'banana' or number is less than 5? I predict false.");
console.log(fruit === 'banana' || number < 5);

// Test whether an item is in an array
console.log("Is 'red' in the colors array? I predict true.");
console.log(colors.includes('red'));

console.log("Is 'yellow' not in the colors array? I predict true.");
console.log(!colors.includes('yellow'));

// Test whether an item is not in an array
console.log("Is 'green' not in the colors array? I predict false.");
console.log(!colors.includes('green'));

console.log("Is 'purple' not in the colors array? I predict true.");
console.log(!colors.includes('purple'));
