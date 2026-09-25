let hours = +prompt("Скіки годин на заправці?");
let carType = +prompt("Яка машина? 1 — звичайний;\n" +
    "   2 — електромобіль.");
let amountOfProperCars = 0;
let carAmount = 0;
let price;
let maxPrice;
do{
    if (hours === 0){
        amountOfProperCars ++;
    }
    if(carType === 1){
        price = 40 * hours;
    }
    else if(carType === 2){
        price = 30 * hours;
    }
    else{
        alert("Error");
    }
    if(hours >= 5){
        price = price - price*0.02;
    }

}while(hours >=0 || hours <= 12){}