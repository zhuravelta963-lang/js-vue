// alert("Hello");
// let age = 18;
// const name = 'Ivan';
// console.log(age);
// console.log(name);
//
// age = 19;
//
//
//
// const name = 'Ivan';
// let number = 8;
// let isTrue = false;
//
//
// console.log(typeof name);

//+-
// * / %
// **

// // const name = prompt("What is your name?);
// let num1 = prompt("Введіть перше число")
// let num2 = prompt("Введіть друге число")
// console.log(Number(num1) + Number(num2));
// console.log((num1 - 0) + (num2 - 0));
//
// let num3 = 100;
// console.log(typeof String(num3));

let productName = prompt("Enter your product name");
let price = Number(prompt("Enter your price"));
let quantity = Number(prompt("Enter your quantity"));
let delivery =Number(prompt("Enter your delivery price"));
let discount = Number(prompt("Enter your discount (%)"));
let totalCost = (price * quantity + delivery) * discount % 100;

console.log(`Загальна вартість за товар ${productName} становить ${totalCost} грн з урахуванням знижки ${discount}`);
alert("Товар: " + productName + "\nВартість товарів:" + totalCost);