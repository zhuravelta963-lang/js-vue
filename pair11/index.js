// let book = {
//     title: "Кобзар", author: "Тарас Шевченко", year: "1840", price: 500, available: true
// }
// console.log(book);
// console.log(book.title);
// console.log(book[0]);

// let books = [
//     {
//         id: 1, title: "Кобзар", author: "Тарас Шевченко", year: "1840", price: 500, available: true
//     },{
//         id: 2, title: "Лісова пісня", author: "Леся Українка", year: "1911", price: 450, available: true
//     },{
//         id: 3, title: "Тигролови", author: "Іван Багряний", year: "1943", price: 500, available: false
//     }, {
//         id: 4, title: "Місто", author: "Іван Багряний", year: "1928", price: 450, available: false
//     }
// ]
// // console.log(books[2]);
// // for (let book of books) {
// //     console.log(`[${book.id}]: ${book.title}, [${book.author}]: ${book.price}`);
// // }
// // books.forEach(function (book){
// //     console.log(book.title);
// // })
// let availableCount = 0;
// let totalPrice = 0;
// for(let book of books){
//     if(book.available === true){
//         availableCount++;
//         totalPrice+= book.price;
//     }
// }
// console.log(availableCount);
// console.log(totalPrice);
// books.push({
//     id: 5, title: "Захар Беркут", author: "Іван Франко", year: "1882", price: 500, available: true
// })
// console.log(books.length);
// let idBooks = +prompt("Enter the book's id");
// let foundBooks = null;
// for(let book of books){
//     if(book.id === idBooks){
//         foundBooks = book;
//         break;
//     }
// }
// if(foundBooks !== null){
//     let status = "Not available";
//     if(foundBooks.available === true){
//         status = "Not available";
//     }
//     alert(`${foundBooks.length}, ${foundBooks.author}, ${foundBooks.year}, ${foundBooks.price}, ${foundBooks.available} `);
//
// }else {
//     alert("No books with this id");
// }

//-----------------PRAKTICHNA

let clubs = [
    {id: 1, name: "Програмування", category: "IT", price: 800, members: 15, active: true},
    {id: 2, name: "Футбол", category: "Спорт", price: 600, members: 20, active: true},
    {id: 3, name: "Малювання", category: "Мистецтво", price: 500, members: 12, active: false},
    {id: 4, name: "Робототехніка", category: "IT", price: 1000, members: 10, active: true},
    {id: 5, name: "Танці", category: "Мистецтво", price: 700, members: 18, active: false}
];
function showClubs() {
    if (clubs.length === 0) {
        alert("Каталог гуртків порожній");
    } else {
        let result = "";
        clubs.forEach(function(club) {
            let status = "Набір закритий";
            if (club.active === true) {
                status = "Набір відкритий";
            }
            result += "ID: " + club.id +
                "\nНазва: " + club.name +
                "\nНапрям: " + club.category +
                "\nЦіна: " + club.price +
                "\nУчасники: " + club.members +
                "\nСтатус: " + status + "\n\n";
        });
        alert(result);
    }
}
function findClub() {
    let idClub = +prompt("Введіть ID гуртка");
    let foundClub = null;
    for (let club of clubs) {
        if (club.id === idClub) {
            foundClub = club;
            break;
        }
    }
    if (foundClub !== null) {
        alert(
            "ID: " + foundClub.id +
            "\nНазва: " + foundClub.name +
            "\nНапрям: " + foundClub.category +
            "\nЦіна: " + foundClub.price +
            "\nУчасники: " + foundClub.members +
            "\nНабір відкритий: " + foundClub.active
        );
    } else {
        alert("Гуртка з таким ID немає");
    }
}
function addMember() {
    let idClub = +prompt("Введіть ID гуртка");
    let foundClub = null;
    for (let club of clubs) {
        if (club.id === idClub) {
            foundClub = club;
            break;
        }
    }
    if (foundClub !== null) {
        if (foundClub.active === true) {
            if (confirm("Записати учасника?")) {
                foundClub.members++;
                alert("Учасника записано. Кількість: " + foundClub.members);
            }
        } else {
            alert("Набір до гуртка закритий");
        }
    }
    else {
        alert("Гуртка з таким ID немає");
    }
}
function changeStatus() {
    let idClub = +prompt("Введіть ID гуртка");
    let foundClub = null;
    for (let club of clubs) {
        if (club.id === idClub) {
            foundClub = club;
            break;
        }
    }
    if (foundClub !== null) {
        if (confirm("Змінити статус набору?")) {
            if (foundClub.active === true) {
                foundClub.active = false;
                alert("Набір закрито");
            } else {
                foundClub.active = true;
                alert("Набір відкрито");
            }
        }
    } else {
        alert("Гуртка з таким ID немає");
    }
}
function addClub() {
    let name = prompt("Введіть назву гуртка");
    let category = prompt("Введіть напрям гуртка");
    let price = +prompt("Введіть вартість занять");
    let members = +prompt("Введіть кількість учасників");
    if (name === null || name === "" ||
        category === null || category === "") {
        alert("Назва та напрям не можуть бути порожніми");
    } else if (price < 0 || members < 0) {
        alert("Ціна та кількість учасників не можуть бути від'ємними");
    } else {
        let newId = 1;
        for (let club of clubs) {
            if (club.id >= newId) {
                newId = club.id + 1;
            }
        }
        if (confirm("Додати гурток?")) {
            clubs.push({
                id: newId,
                name: name,
                category: category,
                price: price,
                members: members,
                active: true
            });
            alert("Гурток додано. ID: " + newId);
        }
    }
}
function showStatistics() {
    let totalClubs = clubs.length;
    let activeCount = 0;
    let totalMembers = 0;
    let totalPrice = 0;
    for (let club of clubs) {
        if (club.active === true) {
            activeCount++;
        }
        totalMembers += club.members;
        totalPrice += club.price;
    }
    let averagePrice = 0;
    if (totalClubs > 0) {
        averagePrice = totalPrice / totalClubs;
    }
    alert(
        "Кількість гуртків: " + totalClubs +
        "\nГуртків із відкритим набором: " + activeCount +
        "\nЗагальна кількість учасників: " + totalMembers +
        "\nСередня вартість: " + averagePrice
    );
}
let choice;

do {
    choice = prompt(
        "Каталог гуртків:\n" +
        "1 - Показати всі гуртки\n" +
        "2 - Знайти гурток за ID\n" +
        "3 - Записати учасника\n" +
        "4 - Змінити статус набору\n" +
        "5 - Додати новий гурток\n" +
        "6 - Показати статистику\n" +
        "0 - Вихід"
    );
    if (choice === null) {
        break;
    }
    switch (choice) {
        case "1":
            showClubs();
            break;
        case "2":
            findClub();
            break;
        case "3":
            addMember();
            break;
        case "4":
            changeStatus();
            break;
        case "5":
            addClub();
            break;
        case "6":
            showStatistics();
            break;
        case "0":
            break;
        default:
            alert("Неправильний пункт меню");
    }
    if (choice !== "0" && confirm("Повернутися до меню?") === false) {
        break;
    }
} while (choice !== "0");
alert("Роботу програми завершено");
