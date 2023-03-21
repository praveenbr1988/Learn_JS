//let, const, var

// let age = 25;
// console.log(typeof age);
// console.log(age);

// age="twenty FIve"
// console.log(typeof age);
// console.log(age);

// let isittrue = true;
// console.log(typeof isittrue);
// console.log(isittrue);

let a = 88
let b = 98
let c = a+b;
console.log(c)

let ravi =45

let iPass= ravi<35
console.log(iPass)
console.log(typeof a);

let fruits = ['Apple', 'Banana', 'Orange'];


for (let key in fruits) {
    if (fruits.hasOwnProperty.call(fruits, key)) {
        const element = fruits[key];
        console.log(fruits[key])
    }
}
