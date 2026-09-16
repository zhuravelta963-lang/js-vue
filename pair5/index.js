// let num = 1;
// while(num <= 5){
//     console.log(num);
//     num++;
// }

// let user_num = +prompt('Enter your number');
// while(user_num > 1 || user_num > 10) {
//     user_num = +prompt('Error.Enter your number');
// }
// console.log(user_num);
//
// Number();
// String();
// isNaN();

// console.log(Number("7"));
// console.log(Number("hello"));

// let age = +prompt("Enter your age");
// while(Number.isNaN(age) || age <= 0 || age >= 100){
//     age = +prompt("Error. Please enter a number");
// }
// console.log(age);

// const correctPin = "1234";
// let pin = +prompt("Enter a valid pin");
// let attempts = 1;
// while(attempts < 3 && pin !== correctPin) {
//     pin = +prompt("Enter a valid pin");
//     attempts++;
// }
// if (pin === correctPin) {
//     console.log("Access alowed");
// }
// else{
//     console.log("Card is blocked");
// }

// let attempt = 1, password = 1234;
// while(attempt <= 3){
//     let userPassword = +prompt('Enter your password');
//     if (password === userPassword){
//         console.log("Access alowed");
//         break;
//     }
//     console.log("Wrong password");
//     attempt++;
// }

//---------------------
// let attempt = 1, password = 1234;
// while(attempt <= 3){
//     let userPassword = +prompt('Enter your password');
//     if (password === userPassword){
//         console.log("Access alowed");
//         break;
//     }
//     console.log(`Wrong password. Remaining attempts: ${attempt - 1}`);
//     attempt++;
// }


// let menuChoice;
// do{
//     menuChoice = prompt("What is your action:\n" +
//         "1 - Профіль\n"+ "2 - Налаштування\n"+ "0 - Вихід");
//
// if(menuChoice === 1){
//     alert("Open profile");
// } else if( menuChoice === 2 ){
//     alert("Open settings");
// }
// else if (menuChoice === 0){
//     alert("Exit");
// }
// else{
//     alert("Unknown action");
// }
// }
// while(menuChoice !== 0);


//------------------------------------------
// let menuChoice = prompt("What is your action:\n" + "1 - Профіль\n"+ "2 - Налаштування\n"+ "0 - Вихід");
//     switch(menuChoice){
//         case "0":
//             alert("Exit");
//             break;
//         case "1":
//             alert("Open Profile");
//             break;
//         case "2":
//             alert("Open Settings");
//             break;
//         default:
//             alert("Unknown choice");
// }

// let count = 0, sum = 0;
// while(count < 5){
//     let currentGrade = +prompt(`Enter a grade № ${count + 1}`);
//     if(currentGrade < 1 || currentGrade > 12 || Number.isNaN(currentGrade)){
//         alert("Wrong grade");
//         continue;
//     }
//     sum += currentGrade;
//     count++;
// }
// console.log(sum);
// console.log(sum / 5);


// let questionsNumber = 1;
// let score = 1;
// while(questionsNumber <= 5) {
//     let questions = "", answers = "";
//     switch (questionsNumber) {
//         case 1:
//             questions = "How to make a variable?"
//             answers = "let";
//             break;
//         case 2:
//             questions = "який оператор строгої рівності?"
//             answers = "===";
//             break;
//         case 3:
//             questions = "How to mark an operator and?"
//             answers = "$$";
//             break;
//         case 4:
//             questions = "How to finish a cycle?";
//             answers = "break";
//             break;
//         case 5:
//             questions = "How to записати інкремент?";
//             answers = "++";
//             break;
//     }
//     let answer = prompt(`Question № ${questionsNumber} is 5\n ${questions}`);
//     if (answer === "") {
//         console.log("Answer can't be empty");
//         continue;
//     }
//     if(answer === answers){
//         alert("Correct!!")
//         score++;
//     } else{
//         alert("Uncorrect((");
//     }
//     questionsNumber++;
// }
// if(score === 5){
//     alert("Excelent");
// } else if(score >= 3){
//     alert("Norm");
// } else{
//     alert("Loser!!!")
// }

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//---------------------------------------------
let age = +prompt("Введіть свій вік:");
while (isNaN(age) || age < 12 || age > 90) {
    age = +prompt("Error. Enter your age number:");
}
const correctPin = 4321;
let attempt = 1;
let userPin;
do {
    userPin = +prompt("Введіть PIN:");
    if (userPin === correctPin) {
        alert("Доступ дозволено");
        break;
    } else {
        alert(`Wrong PIN. Remaining attempts: ${3 - attempt}`); // виправлення 2: рахуємо до інкременту
    }
    attempt++;
} while (attempt <= 3);
if (userPin === correctPin) {
    let menuChoice;
    do {
        menuChoice = +prompt(
            "Оберіть дію:\n" + "1 - Особистий кабінет\n" + "2 - Повідомлення\n" + "3 - Налаштування\n" + "0 - Вихід");
        switch (menuChoice) {
            case 1:
                alert("Going to profile");
                break;
            case 2:
                alert("Going to notifications");
                break;
            case 3:
                alert("Going to settings");
                break;
            case 0:
                alert("Going out");
                break;
            default:
                alert("Такого пункту немає.");
        }
    } while (menuChoice !== 0);
} else {
    alert("Вичерпано кількість спроб. Доступ заборонено.");
}