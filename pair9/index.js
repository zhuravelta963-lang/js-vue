// let prices = [120, 23, 45, 60, 55];
// console.log(prices[1]);
// prices[1] = 60;
// console.log(prices.length);
// let sum = 0;
//
// for(let i = 0; i < prices.length; i++) {
//     console.log(prices[i]);
//     sum+= prices[i];
// }

// function getTotalPrices(prices) {
//     let sum = 0;
//     for(let i = 0; i < prices.length; i++) {
//         sum += prices[i];
//     }
//     return sum;
// }
// let prices = [120, 34, 324, 54, 83];
// let limit = 50;
// let result = getTotalPrices(prices);
// console.log(result);
// //----------------------------------------
// function returnMorePrices(prices) {
//     let morePrice = 0;
//     for(let i = 0; i < limit; i++) {
//         morePrice += prices[i];
//     }
//     return morePrice;
// }
// let overal = returnMorePrices(prices);
// console.log(overal);

let numbersCount = +prompt("How many numbers?");
function numberOperation(numbersCount) {
    let numbers = [];
    for (let number = 0; number < numbersCount; number++) {
        numbers[number] = +prompt("Enter a number:");
    }
    for (let number = 0; number < numbers.length; number++) {
        if (numbers[number] % 2 === 0) {
            console.log(numbers[number]);
        }
    }
}
numberOperation(numbersCount);


