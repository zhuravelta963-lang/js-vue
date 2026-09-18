let eventType = +prompt("Оберіть тип події:\n1 - Кіно\n2 - Театр\n3 - Концерт");
while (eventType !== 1 && eventType !== 2 && eventType !== 3) {
    eventType = +prompt("Помилка. Введіть 1, 2 або 3:");
}
let price;
switch (eventType) {
    case 1:
        price = 150;
        break;
    case 2:
        price = 220;
        break;
    case 3:
        price = 350;
        break;
}
let dayType = +prompt("Оберіть тип дня:\n1 - Будній\n2 - Вихідний");
while (dayType !== 1 && dayType !== 2) {
    dayType = +prompt("Помилка. Введіть 1 або 2:");
}
if (dayType === 2) {
    price = price * 1.15;
}
let ticketCount = +prompt("Скільки квитків потрібно оформити? (1-6):");
while (isNaN(ticketCount) || ticketCount < 1 || ticketCount > 6) {
    ticketCount = +prompt("Помилка. Введіть число від 1 до 6:");
}
let processedCount = 0, freeCount = 0, discountCount = 0, fullPriceCount = 0, totalSum = 0;
for (let i = 1; i <= ticketCount; i++) {
    let age = +prompt(`Квиток №${i}: введіть вік глядача (-1, щоб завершити оформлення):`);
    while (isNaN(age) || (age < -1) || age > 120) {
        age = +prompt("Некоректний вік. Спробуйте ще раз (-1, щоб завершити):");
    }
    if (age === -1) {
        break;
    }
    let ticketPrice;
    if (age >= 0 && age <= 5) {
        freeCount++;
        processedCount++;
        alert(`Квиток №${i}: безкоштовно (вік ${age})`);
        continue;
    } else if (age >= 6 && age <= 12) {
        ticketPrice = price * 0.5;
        discountCount++;
    } else if (age >= 13 && age <= 17) {
        ticketPrice = price * 0.8;
        discountCount++;
    } else if (age >= 18 && age <= 59) {
        ticketPrice = price;
        fullPriceCount++;
        if (age <= 25) {
            let hasStudentCard = prompt("Є студентський квиток?:");
            if (hasStudentCard.toLowerCase() === "так") {
                ticketPrice = ticketPrice * 0.9;
                fullPriceCount--;
                discountCount++;
            }
        }
    } else {
        ticketPrice = price * 0.75;
        discountCount++;
    }
    processedCount++;
    totalSum += ticketPrice;
    alert(`Квиток №${i}: до сплати ${ticketPrice.toFixed(2)} грн`);
}
if (totalSum > 1000) {
    totalSum = totalSum * 0.95;
}
alert(
    `Підсумок:\n` +
    `Оброблено квитків: ${processedCount}\n` +
    `Безкоштовних: ${freeCount}\n` +
    `Зі знижкою: ${discountCount}\n` +
    `За повною ціною: ${fullPriceCount}\n` +
    `Загальна сума: ${totalSum.toFixed(2)} грн`
);
