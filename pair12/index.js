// function isHighScore(score){
//     return score >= 10;
// }
// let scores = [10, 34, 132, 67, 1];
// let highScore = scores.filter(isHighScore);
// console.log(highScore);\


// let scores = [10, 34, 132, 67, 1];
// let highScore = scores.filter(score => score >= 10);
// // let highScore = scores.filter(isHighScore);
// console.log(highScore);

// let courses = [
//     {id: 1, title: "HTML", price: 700, description: "HTML description", active: true},
//     {id: 2, title: "CSS", price: 300, description: "CSS description", active: true},
//     {id: 3, title: "JS", price: 400, description: "JS description", active: false},
//     {id: 4, title: "Vue", price: 800, description: "Vue description", active: true},
// ];
// let found = courses.find(course => course.id === 3);
// console.log(found);
// if(found !== undefined) {
//     console.log(found.title);
// }
// else{
//     console.log("Course is not found");
// }
// let activeCourse = courses.filter(course => course.active === true);
// console.log(activeCourse);
// let lowCost = courses.filter(course => course.price <= 400);
// console.log(lowCost);
// let title = courses.map(course => course.title);
// let sellPrice = courses.map(course => course.price * 0.9);
// //console.log(`Start data: ${courses}`);
// console.log(`Course names: ${title}`);
// console.log(`New price: ${sellPrice}`);
//
// let search = courses.filter(course => course.title.includes("S"));
// console.log(search);

// function isAvailable(book){
//     return book.available === true;
// }
// let books = [
//     {id: 1, title: "HTML for beginners", author: "Olena Clasna", year: 2024, available: true},
//     {id: 2, title: "JS for beginners", author: "Olena Wonderfool", year: 2022, available: false},
//     {id: 3, title: "CSS for beginners", author: "Olena Woman", year: 20242, available: true},
//     {id: 4, title: "HTML + JS + CSS for beginners", author: "Olena Muzik", year: 2024, available: false}
// ];
// let userIdBook = +prompt("What is your book?");
// let searchBookId = books.find(book => book.id === userIdBook);
// let availableBook = books.find(isAvailable);
// let title = books.map(book => book.title).join(", ");
// let js = books.filter(book => book.title.includes("JS"));

//--------------------------------------ДЗ



let courses = [
    {id: 1, title: "HTML for beginners", category: "Programming", price: 700, duration: 10, rating: 4.5, available: true},
    {id: 2, title: "CSS for beginners", category: "Design", price: 500, duration: 8, rating: 4.2, available: true},
    {id: 3, title: "JavaScript for beginners", category: "Programming", price: 1200, duration: 20, rating: 4.9, available: false},
    {id: 4, title: "Python for beginners", category: "Programming", price: 1500, duration: 25, rating: 4.8, available: true},
    {id: 5, title: "Web design", category: "Design", price: 900, duration: 15, rating: 4.6, available: true},
    {id: 6, title: "Cybersecurity", category: "Security", price: 1800, duration: 30, rating: 4.7, available: false},
    {id: 7, title: "Excel for beginners", category: "Analytics", price: 600, duration: 12, rating: 4.3, available: true},
    {id: 8, title: "Artificial intelligence", category: "Technology", price: 2000, duration: 35, rating: 5, available: true}
];
function findCourse(id) {
    return courses.find(course => course.id === id);
}
function findCategory(category) {
    return courses.filter(course =>
        course.category.toLowerCase() === category.toLowerCase()
    );
}
function findPrice(price) {
    return courses.filter(course => course.price <= price);
}
function findTitle(title) {
    return courses.filter(course =>
        course.title.toLowerCase().includes(title.toLowerCase())
    );
}
function getTitles() {
    return courses.map(course => course.title);
}
function getDiscount() {
    return courses.map(course => ({
        title: course.title,
        price: course.price * 0.85
    }));
}
function sortPrice() {
    let sortedCourses = [];
    for (let i = 0; i < courses.length; i++) {
        sortedCourses[i] = courses[i];
    }
    return sortedCourses.sort((a, b) => a.price - b.price);
}
function sortRating() {
    let sortedCourses = [];
    for (let i = 0; i < courses.length; i++) {
        sortedCourses[i] = courses[i];
    }
    return sortedCourses.sort((a, b) => b.rating - a.rating);
}
function sortTitle() {
    let sortedCourses = [];
    for (let i = 0; i < courses.length; i++) {
        sortedCourses[i] = courses[i];
    }
    return sortedCourses.sort((a, b) => {
        if (a.title > b.title) {
            return 1;
        }
        if (a.title < b.title) {
            return -1;
        }
        return 0;
    });
}
function calculatePrice() {
    let availableCourses = courses.filter(course => course.available === true);
    let totalPrice = 0;
    for (let i = 0; i < availableCourses.length; i++) {
        totalPrice = totalPrice + availableCourses[i].price;
    }
    let averagePrice = 0;
    if (availableCourses.length > 0) {
        averagePrice = totalPrice / availableCourses.length;
    }
    return {
        total: totalPrice,
        average: averagePrice
    };
}
function showCourses(list) {
    if (list.length === 0) {
        alert("Courses are not found");
    } else {
        let result = list.map(course =>
            `${course.title} | ${course.price} UAH | Rating: ${course.rating}`
        );
        alert(result.join("\n"));
    }
}
let choice;
do {
    choice = prompt(
        "Online cources\n" +
        "1 - Find course by ID\n" +
        "2 - Find courses by category\n" +
        "3 - Find courses by price\n" +
        "4 - Find courses by title\n" +
        "5 - Show course titles\n" +
        "6 - Show discounted prices\n" +
        "7 - Sort by price\n" +
        "8 - Sort by rating\n" +
        "9 - Sort by title\n" +
        "10 - Calculate available courses prices\n" +
        "0 - Exit"
    );
    if (choice === null) {
        break;
    }
    let result;
    let value;
    switch (choice) {
        case "1":
            value = prompt("Enter course ID:");
            if (value === null || value === "" || +value <= 0 || +value % 1 !== 0) {
                alert("Incorrect ID");
                break;
            }
            result = findCourse(+value);
            if (result !== undefined) {
                showCourses([result]);
            } else {
                alert("Course is not found");
            }
            break;
        case "2":
            value = prompt("Enter category:");
            if (value === null || value === "") {
                alert("Enter a category");
                break;
            }
            showCourses(findCategory(value));
            break;
        case "3":
            value = prompt("Enter maximum price:");
            if (value === null || value === "" || +value < 0 || +value !== +value) {
                alert("Incorrect price");
                break;
            }
            showCourses(findPrice(+value));
            break;
        case "4":
            value = prompt("Enter part of course title:");
            if (value === null || value === "") {
                alert("Enter a title");
                break;
            }
            showCourses(findTitle(value));
            break;
        case "5":
            alert(getTitles().join("\n"));
            break;
        case "6":
            result = getDiscount();
            alert(result.map(course =>
                `${course.title}: ${course.price} UAH`
            ).join("\n"));
            break;
        case "7":
            showCourses(sortPrice());
            break;
        case "8":
            showCourses(sortRating());
            break;
        case "9":
            showCourses(sortTitle());
            break;
        case "10":
            result = calculatePrice();
            alert(
                "Total price: " + result.total + " UAH\n" +
                "Average price: " + result.average.toFixed(2) + " UAH"
            );
            break;
        case "0":
            break;
        default:
            alert("Incorrect choice");
    }
    if (choice !== "0" && confirm("Return to menu?") === false) {
        break;
    }
} while (choice !== "0");
alert("Program finished");







