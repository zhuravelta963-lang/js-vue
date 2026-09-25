let  age = +prompt("Enter your age");
let dayType = +prompt("Оберіть день: 1 — будній, 2 — вихідний");

// if (dayType !== 1 && dayType !== 2){
//     alert("Помилка: неправильний тип дня");
// }
let priceWorkDay = 200;
let priceWeekend = 250;
do{
if(dayType === 1 ){
    alert(`Вартість квитка: ${priceWorkDay} грн`);
    if(age <= 7){
        alert("Вартість квитка: 0 грн");
    }
    else if(age >= 8 && age <= 17){
        alert(`Вартість квитка: ${priceWorkDay * 0.5} грн`)
    }
    else if(age >= 18 && age <= 59){
        alert(`Вартість квитка: ${priceWorkDay} грн`);
    }
    else if(age >= 60){
        alert(`Вартість квитка: ${priceWorkDay * 0.4} грн`);
    }
}
else if(dayType === 2 ){
    alert(`Вартість квитка: ${priceWeekend} грн`);
    if(age <= 7){
        alert("Вартість квитка: 0 грн");
    }
    else if(age >= 8 && age <= 17){
        alert(`Вартість квитка: ${priceWeekend * 0.5} грн`)
    }
    else if(age >= 18 && age <= 59){
        alert(`Вартість квитка: ${priceWeekend} грн`);
    }
    else if(age >= 60){
        alert(`Вартість квитка: ${priceWeekend * 0.4} грн`);
    }
}
} while(dayType === 1 && dayType === 2)
alert("Помилка: неправильний тип дня");
