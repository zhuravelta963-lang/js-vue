const max_cars = 7;
let properCars = 0;
let electricCars = 0;
let total = 0;
let maxPrice = 0;
for (let i = 0; i < max_cars; i++) {
    let hours = +prompt("Скільки год на стоянці?");
    if (hours === 0){
        break;
    }
    if (hours < 0 || hours > 12) {
        continue;
    }
    let carType = +prompt("Яка машина? 1 — звичайний;\n2 — електромобіль.");
    let price;
    if (carType === 1) {
        price = 40 * hours;
    } else if (carType === 2) {
        price = 30 * hours;
        electricCars++;
    } else {
        alert("Error. Wrong car type");
        continue;
    }
    if (hours > 5) {
        price = price - price * 0.2;
    }
    properCars++;
    total += price;
    if (price > maxPrice) {
        maxPrice = price;
    }
}
alert("Кількість правильно оброблених автомобілів: " + properCars);
alert("Кількість електромобілів: " + electricCars);
alert("Загальна сума оплати: " + total + " грн");
alert("Найбільша оплата за один автомобіль: " + maxPrice + " грн");
