// let names = ["Ann", "Oleksandra", "Olesia", "Ivan"];
// console.log(names.length);
// // let names2 = names.push("Maria");//додає елементи в кінець списку
// // console.log(names2);
// names.pop(); //видаляє останній елемент
// names.unshift("Pavlo");//додає на початок
// names.shift();//видаляє на початку
// let names2 = names.slice(1, 3);
// console.log(names2);
// console.log(names);

// let names = ["Ann", "Oleksandra", "Olesia", "Ivan"];
// let deleted = names.splice(2, 1); //видаляє за індексом
// console.log(deleted)
// console.log(names);
// names.splice(1, 0, "Seva");
// console.log(names);
// names.splice(0, 1, "Tatiana", "Nadia");
// console.log(names);

// function register(name){
//     if (name.trim() === ""){
//         alert("Please enter your name");
//         return;
//     }
//     let exits = false;
//     for(let i = 0; i < name.length; i++){
//         if(event[i] === name){
//             exits = true;
//         }
//     }
//     if(exits){
//         alert("You are already a registered" + name);
//         return;
//     }
//     event.push(name);
//     alert("Registered user" + name)
// }
// function remove(name){
//     let index = -1;
//     for(let i = 0; i < event.length; i++){
//         if (event[i] === name){
//             index = i;
//             break;
//         }
//     }
//     if(index === -1){
//         alert("Such user does not exist");
//     }else{
//         event.splice(index, 1);
//         alert("User is deleted");
//     }
// }
// function count(){
//     alert("Total users" + event.length);
// }
// let event = ["Ann", "Oleksandra", "Olesia", "Ivan"];
// register("Slavic");
// remove("Ann");
// register("   ");
// count();
//let names = ["Ann", "Oleksandra", "Olesia", "Ivan"];
// for(let i = 0; i < event.length; i++) {
//     console.log(event[i]);
// }
// for (let name of names){
//     console.log(name);
// }
// names.forEach(function (name, index){
//     console.log(name);
// })

//----------------------------------------------------------1
// let queue = ["Марія", "Олександра", "Влад", "Іван", "Павло"];
// queue.push("Влад");
// console.log(queue);
// queue.unshift("Всеволод");
// console.log(queue);
// queue.pop();
// console.log(queue);
// queue.splice(2, 1, "Єгор");
// console.log(queue);
// for (let i = 0; i < queue.length; i++) {
//     console.log((i + 1) + ". " + queue[i]);
// }
// for (let name of queue) {
//     console.log(name);
// }
// queue.forEach(function (name) {
//     console.log(name + ": " + name.length);
// });

//----------------------------------------------------------2
let prices = [120, 250, 180, 300, 150, 400];
let total = 0;
for (let i = 0; i < prices.length; i++) {
    total += prices[i];
}
console.log("Загальний виторг:", total, "грн");
let expensiveCount = 0;
for (let price of prices) {
    if (price >= 200) {
        expensiveCount++;
    }
}
console.log("Квитків від 200 грн:", expensiveCount);
let average = total / prices.length;
console.log("Середня ціна:", average.toFixed(2), "грн");
let total2 = 0;
let expensiveCount2 = 0;
prices.forEach(function (price) {
    total2 += price;
    if (price >= 200) {
        expensiveCount2++;
    }
});
console.log("виторг:", total2, "грн");
console.log("квитків від 200 грн:", expensiveCount2);




