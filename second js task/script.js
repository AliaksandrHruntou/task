//-------------------------------- 1

const fn = string => string[0].toUpperCase() + string.slice(1).toLowerCase();

console.log(fn("mICHAel"));

//-------------------------------- 2

const sayHello = name => name.toLowerCase() === "mark" ? `Hi, Mark!` : `Hello, ${name}!`;

console.log(sayHello("Mark"));
console.log(sayHello("dark"));
console.log(sayHello("lark"));
console.log(sayHello("hulk"));
console.log(sayHello("stark"));

//-------------------------------- 3

const filterStrings = (arr, len) => arr.filter((item) => item.length <= len);

const arr1 = ['a2', 'fd3', 'sldkqm7', '12fsxcvr10', '1', 'spf4','sdcqbgdr9', 'q[s;flr8', 'spwm5', 'pakdm6'];

console.log(filterStrings(arr1, 9));
console.log(filterStrings(arr1, 8));
console.log(filterStrings(arr1, 7));
console.log(filterStrings(arr1, 6));
console.log(filterStrings(arr1, 5));
console.log(filterStrings(arr1, 4));
console.log(filterStrings(arr1, 3));
console.log(filterStrings(arr1, 2));
console.log(filterStrings(arr1, 1));