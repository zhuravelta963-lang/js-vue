// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// for (let i = 1; i <= 5; i-= 2) {
//     console.log(i);
// }

// let sum = 0;
// for (let i = 0; i < 30; i++){
//     sum += i;
//
// }
// console.log(sum);

//----------------------------------- 1
// let sum = 0;
// for (let i = 0; i <=50; i+=2){
//     sum += i;
// }
// console.log(sum);

// let count = 0;
// for (let i = 0; i <= 100; i++) {
//     if(i % 3 === 0){
//         count++;
//     }
// }
// console.log(count);

// for (let i = 0; i <= 100; i++){
//     if(i > 20 && i % 4 === 0 && i % 6 === 0){
//         console.log(i);
//         break;
//     }
// }

// for(let i = 1; i <=30; i++){
//     if (i % 5 === 0){
//         continue;
//     }
//     console.log(i);
// }

// let studentCount = +prompt("What is the student count?");
// if(studentCount > 0){
//     let sum = 0, highLevel = 0, others = 0;
//     for(let i = 1; i <= studentCount; i++){
//         let grade = +prompt("What is the student grade?");
//         if(!grade >= 1 && grade <= 12){
//             alert("Error");
//             i--;
//             continue;
//         }
//         if(grade >= 7){
//             highLevel++;
//         }
//         else{
//             others++;
//         }
//         sum += grade;
//     }
//     console.log(sum);
//     console.log(sum / studentCount);
//     console.log(highLevel);
//     console.log(others);
// }


//----------------------------------2
// let studentCount = +prompt("What is the student count?");
// for (let sproba = 1; studentCount <= 0; sproba++) {
//     studentCount = +prompt("Error. Enter a positive number of students.");
// }
// let sum = 0, excellent = 0, good = 0, low = 0, max = 0, min = 100, hundred = 0;
// for (let i = 1; i <= studentCount; i++) {
//     let grade = +prompt("What is the student grade?");
//     for (let sproba = 1; grade < 0 || grade > 100; sproba++) {
//         grade = +prompt("You entered a wrong value. Try again.");
//     }
//     sum += grade;
//     if (grade >= 90 && grade <= 100) {
//         excellent++;
//     }
//     else if (grade >= 60 && grade <= 89) {
//         good++;
//     }
//     else {
//         low++;
//     }
//     if (grade > max) {
//         max = grade;
//     }
//     if (grade < min) {
//         min = grade;
//     }
//     if (grade === 100 && hundred === 0) {
//         hundred = i;
//     }
// }
// let average = sum / studentCount;
// alert("Average: " + average);
// alert("90–100: " + excellent);
// alert("60–89: " + good);
// alert("< 60: " + low);
// alert("Max: " + max);
// alert("Min: " + min);
// if (hundred !== 0) {
//     alert("Номер участика з 100 б.: " + hundred);
// }
// else {
//     alert("Нема 100-бальників");
// }