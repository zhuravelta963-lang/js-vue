// function name(arguments) {
//     //code
// }

// function showMassage(){
//     alert("Hello World!");
// }
// showMassage();

// function showInfo(){
//     console.log("In lalalaala")
//     console.log("Magas works from 8am to 11pm");
// }
// function showProduct(name, price, count){
//     console.log("Ya prodam: " + name);
//     console.log("Price" + price + "UAH for 1");
//     console.log("Total price: " + price*count + "UAH");
// }
// showInfo();
// showProduct("Пральний порошк", 800, 3);

// function calculateTotal(price, count){
//     return price * count;
// }
// let total = calculateTotal(800, 3);

// function discount(total){
//     if(total >= 5000){
//         return 10;
//     }else{
//         return 0;
//     }
// }
// let discount1 = discount(6000);
// let discount2 = discount(1000);
// console.log(discount1);
// console.log(discount2);

// function getProductTotal(price, count){
//     return price*count;
// }
// function getDiscount(total ){
//     if(total >= 10000){
//         return 15;
//     } else if(total >= 5000){
//         return 10;
//     } else if(total >= 2000){
//         return 5;
//     }else{
//         return 0;
//     }
// }
// function getDiscountValue(total, percent){
//     return total*percent/100;
// }
// function getFinalPrice(total, discount){
//     return total - discount;
// }
// let productName = prompt('Enter product name');
// let productPrice = +prompt('Enter price');
// let productCount = +prompt('Enter count');
//
// let productTotal = getProductTotal(productPrice, productCount);
// let productDiscountPercent = getDiscount(productTotal);
// let productDiscountValue = getDiscountValue(productTotal, productDiscountPercent);
// let productFinalPrice = getFinalPrice(productTotal, productDiscountValue);
// console.log("Product: " + productName);
// console.log("Price: " + productPrice);
// console.log("Amount: " + productCount);
// console.log("Suma: " + productTotal);
// console.log("Discount: " + productDiscountPercent);
// console.log("Discount amount: " + productDiscountValue);
// console.log("Total price: " + productFinalPrice);


//-----------------------------------------------------
function calculateTickets(price, count) {
    return price * count;
}
function getTicketDiscount(total) {
    if (total >= 1500) {
        return 15;
    }else if (total >= 1000) {
        return 10;
    }else if (total >= 500) {
        return 5;
    }else {
        return 0;
    }
}
function calculateTicketDiscount(total, percent) {
    return total * percent / 100;
}
function calculateTicketFinalPrice(total, discount) {
    return total - discount;
}
let ticketPrice = +prompt('Enter ticket price');
let ticketCount = +prompt('Enter tickets count');
let ticketsTotal = calculateTickets(ticketPrice, ticketCount);
let ticketDiscountPercent = getTicketDiscount(ticketsTotal);
let ticketDiscountValue = calculateTicketDiscount(ticketsTotal, ticketDiscountPercent);
let ticketFinalPrice = calculateTicketFinalPrice(ticketsTotal, ticketDiscountValue);

console.log("Ticket price: " + ticketPrice);
console.log("Tickets count: " + ticketCount);
console.log("Suma: " + ticketsTotal);
console.log("Discount: " + ticketDiscountPercent);
console.log("Discount amount: " + ticketDiscountValue);
console.log("Total price: " + ticketFinalPrice);
